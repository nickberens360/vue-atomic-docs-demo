/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from '../router/index.js'
import componentDocs from 'vue-atomic-docs'

// Types
import type {App} from 'vue'

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
            ],
            customRoutes: [
                {
                    path: 'options/option-custom-routes',
                    name: 'optionCustomRoutes',
                    component: () => import('@/views/OptionCustomRoutes.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Custom Routes',
                        icon: '🚀',
                    }
                },
                {
                    path: 'options/colors',
                    name: 'optionColors',
                    component: () => import('@/views/OptionColors.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Colors',
                        icon: '🎨',
                    }
                },
                {
                    path: 'options/component-modules',
                    name: 'optionComponentModules',
                    component: () => import('@/views/OptionComponentModules.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Component Modules',
                        icon: '📦',
                    }
                },
                {
                    path: 'options/raw-component-source-modules',
                    name: 'optionRawComponentSourceModules',
                    component: () => import('@/views/OptionRawComponentSourceModules.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Raw Component Source',
                        icon: '📄',
                    }
                },
                {
                    path: 'options/example-modules',
                    name: 'optionExampleModules',
                    component: () => import('@/views/OptionExampleModules.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Example Modules',
                        icon: '🔍',
                    }
                },
                {
                    path: 'options/components-dir-name',
                    name: 'optionComponentsDirName',
                    component: () => import('@/views/OptionComponentsDirName.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Components Directory',
                        icon: '📁',
                    }
                },
                {
                    path: 'options/examples-dir-name',
                    name: 'optionExamplesDirName',
                    component: () => import('@/views/OptionExamplesDirName.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Examples Directory',
                        icon: '📂',
                    }
                },
                {
                    path: 'options/main-app-id',
                    name: 'optionMainAppID',
                    component: () => import('@/views/OptionMainAppID.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Main App ID',
                        icon: '🆔',
                    }
                },
                {
                    path: 'options/enable-docs',
                    name: 'optionEnableDocs',
                    component: () => import('@/views/OptionEnableDocs.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Enable Docs',
                        icon: '✅',
                    }
                },
                {
                    path: 'options/component-font',
                    name: 'optionComponentFont',
                    component: () => import('@/views/OptionComponentFont.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Component Font',
                        icon: '🔤',
                    }
                },
                {
                    path: 'options/auto-extract-colors',
                    name: 'optionAutoExtractColors',
                    component: () => import('@/views/OptionAutoExtractColors.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Auto Extract Colors',
                        icon: '🌈',
                    }
                },
                {
                    path: 'options/auto-extract-typography',
                    name: 'optionAutoExtractTypography',
                    component: () => import('@/views/OptionAutoExtractTypography.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Auto Extract Typography',
                        icon: '📝',
                    }
                },
                {
                    path: 'options/typography',
                    name: 'optionTypography',
                    component: () => import('@/views/OptionTypography.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Typography',
                        icon: '🖋️',
                    }
                },
                {
                    path: 'options/plugins',
                    name: 'optionPlugins',
                    component: () => import('@/views/OptionPlugins.vue'),
                    meta: {
                        section: 'Options',
                        title: 'Plugins',
                        icon: '🔌',
                    }
                }
            ]
        })
}
