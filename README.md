# 🦙 Billama.net — Official Website

Static Next.js website for **Billama**, the decentralized GPU marketplace & AI token utility grid.

Live URL: [https://billama.net](https://billama.net)

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (Static HTML Export: `output: "export"`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with dark mode cyber-grid aesthetic
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **CI/CD**: GitHub Actions deploying directly to [GitHub Pages](https://pages.github.com/)

---

## 🚀 Local Development

Ensure you have Node.js 20+ and `pnpm` installed:

```bash
# Install dependencies using pnpm
pnpm install

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 📦 Static Production Build

To test the static export locally:

```bash
# Builds static output into ./out
pnpm run build
```

The exported site will be generated in the `./out` directory with `.nojekyll` and `CNAME` for GitHub Pages.

---

## 🌐 GitHub Actions Deployment

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. On push to `main`, GitHub Actions runs `pnpm install` and `pnpm run build`.
2. The `./out` static directory is bundled using `actions/upload-pages-artifact@v3`.
3. The site is published automatically to GitHub Pages using `actions/deploy-pages@v4`.
4. Custom domain `billama.net` is maintained via [`public/CNAME`](public/CNAME).

### Enabling GitHub Pages in Repository Settings:
1. Go to **Settings** > **Pages** in GitHub.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
