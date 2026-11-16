import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

function resolveBasePath(command: 'build' | 'serve'): string {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  const ghRepo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (process.env.GITHUB_ACTIONS === 'true' && ghRepo) {
    return ghRepo.endsWith('.github.io') ? '/' : `/${ghRepo}/`;
  }
  return command === 'build' ? './' : '/';
}

function resolveCanonicalSiteUrl(): string | null {
  if (process.env.VITE_SITE_URL) {
    return process.env.VITE_SITE_URL.endsWith('/')
      ? process.env.VITE_SITE_URL
      : `${process.env.VITE_SITE_URL}/`;
  }
  const fullRepo = process.env.GITHUB_REPOSITORY;
  if (process.env.GITHUB_ACTIONS === 'true' && fullRepo && fullRepo.includes('/')) {
    const [owner, repo] = fullRepo.split('/');
    if (repo.endsWith('.github.io')) {
      return `https://${owner}.github.io/`;
    }
    return `https://${owner}.github.io/${repo}/`;
  }
  return null;
}

export default defineConfig(({command}) => {
  const base = resolveBasePath(command);
  const pwaBase = base === './' ? './' : base;
  const canonicalUrl = resolveCanonicalSiteUrl();

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      // Resolves og:url, og:image and twitter:image to absolute HTTPS URLs during GitHub Actions builds
      {
        name: 'resolve-social-og-urls',
        transformIndexHtml(html: string): string {
          if (!canonicalUrl) return html;
          return html
            .replace(
              '<meta property="og:url" content="./" />',
              `<meta property="og:url" content="${canonicalUrl}" />`,
            )
            .replaceAll('content="./og-image.png"', `content="${canonicalUrl}og-image.png"`);
        },
      },
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,
        includeAssets: [
          'icon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png',
          'og-image.png',
        ],
        manifest: {
          id: pwaBase,
          name: 'KKTC Kamu Yeterlik Sınav Simülatörü',
          short_name: 'KKTC Sınav',
          description:
            'KKTC Kamuya Giriş Yeterlilik Sınavı için Kamu Görevlileri Yasası ve KKTC Anayasası tabanlı gerçek sınav simülasyonu.',
          theme_color: '#19345E',
          background_color: '#F7F4EC',
          display: 'standalone',
          orientation: 'portrait',
          start_url: pwaBase,
          scope: pwaBase,
          lang: 'tr',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          skipWaiting: true,
          clientsClaim: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,pdf}'],
          globIgnores: ['**/og-image.png'],
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [/\.pdf$/i],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
