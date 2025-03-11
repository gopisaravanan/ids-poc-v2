  // import { defineConfig } from 'vite'
  // import react from '@vitejs/plugin-react-swc'

  // // https://vite.dev/config/
  // export default defineConfig({
  //   plugins: [react()],
  // })

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
        name: 'MyLib',
        // the proper extensions will be added
        fileName: 'my-lib',
      },
      rollupOptions: {
        external: ["react", "react-dom"], // Exclude React & ReactDOM
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  })