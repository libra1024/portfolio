import { expect, test } from '@playwright/test';

test('serves the portfolio through Next.js', async ({ request }) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);
  expect(response.headers()['x-powered-by']).toBe('Next.js');
});

for (const locale of [
  { path: '/', lang: 'en', title: 'Portfolio | libra1024', heading: 'Agentic Workflows', about: 'About Me' },
  { path: '/es/', lang: 'es', title: 'Portafolio | libra1024', heading: 'Agénticos para Producción', about: 'Sobre Mí' },
]) {
  test(`renders ${locale.lang} content and metadata`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error' && /hydration|hydrated/i.test(message.text())) errors.push(message.text());
    });
    await page.goto(locale.path);
    await expect(page).toHaveTitle(locale.title);
    await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(locale.heading);
    await expect(page.locator('#about h2')).toHaveText(locale.about);
    await expect(page.locator('main article')).toHaveCount(6);
    await expect(page.locator('#courses a')).toHaveCount(6);
    await expect(page.locator('#experience')).toContainText('Wotbi');
    await expect(page.locator('#experience')).toContainText('Zacsoft');
    await expect(page.locator('#contact a')).toHaveAttribute('href', /^https?:\/\//);
    await expect(page.locator('#contact a')).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(page.locator('#nav-menu a[href$="#about"]')).toHaveAttribute('href', `${locale.path}#about`);
    expect(await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(243, 244, 246)');
    expect(errors).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath('desktop.png'), fullPage: true });
  });
}

test('switches languages in both directions', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'ES', exact: true }).click();
  await expect(page).toHaveURL('/es/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('persists a toggled theme across reloads and languages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Toggle Theme' }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.getByRole('link', { name: 'ES', exact: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.locator('#theme-toggle').click();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});

test('honors system theme and a stored override', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.evaluate(() => localStorage.setItem('theme', 'light'));
  await page.reload();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});

test('opens and closes mobile navigation', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('#nav-menu')).not.toBeVisible();
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await expect(page.locator('#nav-menu')).toBeVisible();
  await page.getByRole('link', { name: 'Skills', exact: true }).click();
  await expect(page.locator('#nav-menu')).not.toBeVisible();
  await expect(page).toHaveURL('/#skills');
  await expect(page.locator('#header')).toHaveClass(/shadow-sm/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('mobile.png'), fullPage: true });
});

test.describe('Spanish browser preferences', () => {
  test.use({ locale: 'es-MX' });

  test('redirects once and allows returning to English', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/es/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL('/');
    await page.reload();
    await expect(page).toHaveURL('/');
  });

  test('respects English selected after a direct Spanish visit', async ({ page }) => {
    await page.goto('/es/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('respects English when browser storage rejects writes', async ({ page }) => {
    await page.addInitScript(() => {
      Storage.prototype.setItem = () => { throw new DOMException('Full', 'QuotaExceededError'); };
    });
    await page.goto('/es/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL('/');
    await page.reload();
    await expect(page).toHaveURL('/');
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

test('keeps theme and navigation working when storage is blocked', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
  });
  await page.goto('/');
  await page.locator('#theme-toggle').click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.getByRole('link', { name: 'ES', exact: true }).click();
  await expect(page).toHaveURL('/es/');
  expect(errors).toEqual([]);
});

test('renders localized content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, locale: 'en-US' });
  const page = await context.newPage();
  for (const [path, lang] of [['/', 'en'], ['/es/', 'es']]) {
    await page.goto(`http://127.0.0.1:3000${path}`);
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator('main article')).toHaveCount(6);
    await expect(page.locator('#experience')).toContainText('Wotbi');
  }
  await context.close();
});

test('returns 404 for unknown routes and serves the favicon', async ({ request }) => {
  expect((await request.get('/unknown/')).status()).toBe(404);
  expect((await request.get('/favicon.ico')).status()).toBe(200);
});
