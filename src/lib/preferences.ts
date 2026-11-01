export const initialPreferencesScript = `
(() => {
  let storedTheme;
  let languageRedirected = true;
  try {
    storedTheme = localStorage.getItem('theme');
    languageRedirected = Boolean(localStorage.getItem('lang_redirected'));
  } catch {}

  const theme = storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try { localStorage.setItem('theme', theme); } catch {}

  if (!languageRedirected && navigator.language.toLowerCase().startsWith('es') && window.location.pathname === '/') {
    try {
      localStorage.setItem('lang_redirected', 'true');
      window.location.replace('/es/' + window.location.search + window.location.hash);
    } catch {}
  }
})();
`;
