/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from '../router/index.js'
import componentDocs from 'vue-atomic-docs'

console.log(import.meta.env.VITE_ENABLE_ATOMIC_DOCS === 'true')
// Types
import type {App, Plugin} from 'vue'

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(componentDocs as any, {
            componentModules: import.meta.glob('@/components/**/*.vue'),
            rawComponentSourceModules: import.meta.glob('@/components/**/*.vue', {query: '?raw', import: 'default'}),
            exampleModules: import.meta.glob('@/component-examples/**/*.vue'),
            componentsDirName: 'components',
            examplesDirName: 'component-examples',
            enableDocs: import.meta.env.VITE_ENABLE_ATOMIC_DOCS === 'true',
            componentFont: 'Times, serif',
            autoExtractColors: true,
            autoExtractTypography: true,
            colors: [
                {
                    name: 'primary',
                    color: '#1976d2',
                },
                {
                    name: 'secondary',
                    color: '#424242',
                },
                {
                    name: 'tertiary',
                    color: '#b0bec5',
                },
                {
                    name: 'accent',
                    color: '#8c9eff',
                },
                {
                    name: 'error',
                    color: '#ff5252',
                },
                {
                    name: 'info',
                    color: '#2196f3',
                },
                {
                    name: 'success',
                    color: '#4caf50',
                },
                {
                    name: 'warning',
                    color: '#fb8c00',
                },
            ]
        })
}