<template>
  <div>
    <h1>Create Custom Routes</h1>
    <p style="margin-bottom: 1rem;">
      You can create custom routes in your Vue Atomic Docs application by adding them to the
      <code>customRoutes</code> array in the vue-atomic-docs options configuration. This allows you to add custom
      pages or components that are not part of the standard documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`javascript
// other options...
customRoutes: [
    {
        path: 'my-custom-page', // URL will be /atomic-docs/my-custom-page
        name: 'my-custom-page',
        component: () => import('@/views/MyCustomView.vue'),
        meta: {
            section: 'Custom Section',
            title: 'My Custom Page',
            icon: '🚀',
        }
    }
]
\`\`\`

### Type Definition
\`\`\`typescript
customRoutes: Array<{
  path: string,
  name: string,
  component: () => Promise<any>,
  meta: {
    section: string,
    title: string,
    icon: string
  }
}>
\`\`\`

Each route object requires:
- \`path\`: String - The URL path for the route (e.g., 'my-custom-page')
- \`name\`: String - The route name (e.g., 'my-custom-page')
- \`component\`: Function - A function that returns a dynamic import of the component
- \`meta\`: Object - Contains metadata for the route:
  - \`section\`: String - The section name in the navigation (e.g., 'Custom Section')
  - \`title\`: String - The display title (e.g., 'My Custom Page')
  - \`icon\`: String - An emoji or icon for the route (e.g., '🚀')
`;
</script>
