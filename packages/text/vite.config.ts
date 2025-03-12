  import { dirname, resolve } from 'node:path'
  import { fileURLToPath } from 'node:url'
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'
  import dts from 'vite-plugin-dts'
  import { libInjectCss } from 'vite-plugin-lib-inject-css'
  import tailwindcss from '@tailwindcss/vite'

  const __dirname = dirname(fileURLToPath(import.meta.url))

  export default defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      libInjectCss(),
      dts({
        tsconfigPath: resolve(__dirname, "tsconfig.json"),
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        name: 'Text',
        fileName: 'text',
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  })