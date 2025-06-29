/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from '../router/index.js'
import componentDocs from 'vue-atomic-docs'

// Import your generated manifest file
// Adjust the path './docs-manifest' based on where your script generates the file
import { components, exampleComponents } from '../docs-manifest';

// Types
import type {App, Plugin} from 'vue'
import type { ComponentItem, ExampleItem } from 'vue-atomic-docs/dist/types';

export function registerPlugins(app: App) {
    const componentModules = components.reduce<Record<string, () => Promise<any>>>((acc, comp: ComponentItem) => {
        console.log(`Registering component: ${comp.relativePath}`);
        acc[comp.relativePath] = comp.importer;
        return acc;
    }, {});

    const rawComponentSourceModules = components.reduce<Record<string, () => Promise<string>>>((acc, comp: ComponentItem) => {
        if (comp.rawImporter) {
            acc[comp.relativePath] = comp.rawImporter;
        }
        return acc;
    }, {});

    const exampleModules = exampleComponents.reduce<Record<string, () => Promise<any>>>((acc, example: ExampleItem) => {
        acc[example.relativePath] = example.importer;
        return acc;
    }, {});

    app
        .use(router)
        .use(componentDocs as any, {
            componentModules: componentModules,
            rawComponentSourceModules: rawComponentSourceModules,
            exampleModules: exampleModules,
            componentsDirName: 'components',
            examplesDirName: 'component-examples',
            mainAppID: 'app',
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