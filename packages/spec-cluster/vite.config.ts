import * as Vite from "vite"

// https://vitejs.dev/config/
export default Vite.defineConfig({
  build: {
    lib: {
      entry: ["src/index.ts"],
      formats: ["es"],
    },
    emptyOutDir: true,
    copyPublicDir: false,
    minify: false,
    rollupOptions: {
      external: [
        "@emotion/react",
        "@emotion/styled",
        "@mui/material",
        "@react-three/drei",
        "@react-three/fiber",
        "react-dom",
        "react",
        "react/jsx-runtime",
        "three",
      ],
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
    sourcemap: true,
  },
})
