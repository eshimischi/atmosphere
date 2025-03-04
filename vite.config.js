import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite'
import IconsResolver from "unplugin-icons/resolver"
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [
                IconsResolver(),
            ],
        }),
        Icons({
            // experimental
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
    }
});
