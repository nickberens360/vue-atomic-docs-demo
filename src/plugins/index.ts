/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from '../router/index.js'
import componentDocs from 'vue-atomic-docs'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(componentDocs as any, {
            componentModules: import.meta.glob('@/components/**/*.vue'),
            rawComponentSourceModules: import.meta.glob('@/components/**/*.vue', {query: '?raw', import: 'default'}),
            exampleModules: import.meta.glob('@/component-examples/**/*.vue'),
            componentsDirName: 'components',
            examplesDirName: 'component-examples',
            mainAppID: 'app',
            enableDocs: import.meta.env.VITE_ENABLE_ATOMIC_DOCS === 'true',
            componentFont: 'Times, serif',
            autoExtractColors: true,
            autoExtractTypography: true,
            typography: [
                {
                    name: 'Headline 1',
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    lineHeight: '1.5',
                },
                {
                    name: 'Body Text',
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '1.6',
                },
                {
                    name: 'Caption',
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    lineHeight: '1.4',
                },
            ],
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