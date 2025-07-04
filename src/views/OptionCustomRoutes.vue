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
`;
</script>