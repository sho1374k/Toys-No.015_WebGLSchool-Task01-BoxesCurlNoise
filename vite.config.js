import { resolve } from "path";
import autoprefixer from "autoprefixer";
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import * as dotenv from "dotenv";

const result = dotenv.config();
if (result.error) throw result.error;

function createDate() {
  const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    date = now.getDate();
  return `${year}${month}${date}`;
}
const DATE = createDate();

const config = {
  root: "src",
  dist: "dist",
  public: "public",
};

export default defineConfig(({ mode }) => {
  console.log(
    `// --------------------------\n\n⚡️ ~ MODE : ${mode}\n\n▕▔▔▔▔▔▔▔▔▔▔▔╲\n▕╮╭┻┻╮╭┻┻╮╭▕╮╲\n▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏\n▕╭┻┻┻┛┗┻┻┛ ╰▏ ▏\n▕╰━━━┓┈┈┈╭╮▕╭╮▏\n▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏\n▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏\n\n// --------------------------`,
  );

  return {
    root: config.root,
    base: "./",
    css: {
      postcss: {
        plugins: [autoprefixer({ grid: true })],
      },
    },
    publicDir: resolve(__dirname, config.public),
    esbuild: {
      drop: ["console", "debugger"],
    },
    build: {
      outDir: resolve(__dirname, config.dist),
      emptyOutDir: true,
      chunkSizeWarningLimit: 100000000,
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/app.${DATE}.js`,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "index.css") {
              return `assets/css/app.${DATE}.css`;
            }
            return `assets/[name].${DATE}.[ext]`;
          },
          chunkFileNames: `assets/[name].${DATE}.js`,
        },
      },
    },
    plugins: [glsl()],
    server: {
      open: process.env.SITE_DEVE_URL,
      port: process.env.PORT,
      host: true,
    },
    preview: {
      open: process.env.SITE_DEVE_URL,
      port: process.env.PORT,
      host: true,
    },
  };
});
