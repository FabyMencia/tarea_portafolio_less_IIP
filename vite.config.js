import path, {resolve} from 'node:path'
import { defineConfig } from 'vite'
import * as glob from 'glob'
import htmlPurge from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'
import {ViteMinifyPlugin} from 'vite-plugin-minify'

const obtenerEntradas = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync(
                './**/*.html',
                {
                    ignore: [
                        './dist/**',
                        './node_modules/**'
                    ]
                }
            ).map(
                fileData => [
                    fileData.slice(0, fileData.length - path.extname(fileData).length),
                    resolve(__dirname, fileData)
                ]
            )
        ]
    );
}


export default defineConfig({
    css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true, // Esto es necesario para habilitar ciertos tipos de LESS
          },
        },
      },
      build: {
        rollupOptions: {
          input: obtenerEntradas()
        },
        minify: true
      },
      base: "/tarea_portafolio_less_IIP/",  // Asegúrate de que sea correcto
      plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, 'partials'),
          context : (pagePath) => {
            return {}
          }
        }),
        htmlPurge({}),
        ViteMinifyPlugin(),
      ],
});

