import ReactSWC from "@vitejs/plugin-react-swc"
import * as Vite from "vite"

// https://vitejs.dev/config/

export default Vite.defineConfig({
  plugins: [ReactSWC()],
  publicDir: "../website/static",
})
