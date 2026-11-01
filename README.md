# Portfolio

A bilingual portfolio built with Next.js App Router, React, TypeScript, and
Tailwind CSS 4. English is available at `/` and Spanish at `/es/`.

## Development

Use Node.js 24.x and pnpm 12.16.1, pinned in `package.json`. If you use nvm,
run `nvm install` and `nvm use` to select the version specified in `.nvmrc`.
Install pnpm with `npm install -g pnpm@12.16.1` if it is not already available.

```sh
pnpm install
cp .env.example .env
pnpm dev
```

Open `http://localhost:3000`.

Set `PUBLIC_LINKEDIN` in `.env` to your LinkedIn profile URL. The value is read
on the server when the portfolio pages are built. URLs without a scheme receive
`https://`. Rebuild after changing the value because both pages are prerendered.
The `.env` file stays local and is ignored by Git.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create the production build in `.next/` |
| `pnpm start` | Serve the production build |
| `pnpm preview` | Alias for `pnpm start` |
| `pnpm typecheck` | Generate route types and check TypeScript |
| `pnpm test:unit` | Check contact configuration |
| `pnpm test` | Run unit and production browser tests |

Before running the browser tests:

```sh
pnpm exec playwright install chromium
pnpm build
pnpm test
```

The test suite starts its own production server on port 3000, which must be free.
To use an existing Chromium installation, set
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable path.

## Structure

- `src/app/(en)/`: English root layout and home page.
- `src/app/(es)/`: Spanish root layout and `/es/` page.
- `src/components/`: Shared portfolio sections, document shell, and interactive header.
- `src/data/cv.ts`: Localized profile, experience, skills, and courses.
- `src/i18n/utils.ts`: Interface translations and language types.
- `src/lib/preferences.ts`: Initial browser theme and language preferences.
- `src/styles/global.css`: Tailwind theme and shared styles.
- `public/`: Static assets.

The two route groups produce static HTML with the appropriate document language.
Language switching performs a full navigation between their root layouts. Theme
preferences persist in browser storage. Spanish browser preferences trigger a
one-time redirect unless the visitor has explicitly chosen a language.

## Deployment

On Vercel, select the **Next.js** framework preset and use `pnpm build`. Remove
any previous custom output-directory setting. Configure the LinkedIn variable
before building. No deployment adapter is required.

For a Node.js host, run `pnpm build` followed by `pnpm start`.
