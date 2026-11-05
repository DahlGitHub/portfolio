# Portfolio

This project uses Next.js and pnpm 11.24.0. Use pnpm for dependency changes and commit `pnpm-lock.yaml`; do not create npm or Yarn lockfiles.

## Local development

Install Node.js 24 or newer and pnpm 11.24.0, then run from the repository root:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd dev
```

Open http://localhost:3000. Edit `app/page.tsx` or the components to see changes automatically. Press Ctrl+C to stop the server.

On Windows PowerShell, use `pnpm.cmd` if `pnpm` reports that script execution is disabled. This uses the same pnpm installation without changing the system execution policy. In other shells, use `pnpm`.

## Production build

```powershell
pnpm.cmd build
pnpm.cmd start
```

The Dockerfile also installs and builds with pnpm and the committed lockfile.
