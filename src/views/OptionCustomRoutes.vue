<template>
  <div>
    <h1>Create Custom Routes</h1>
    <p style="margin-bottom: 1rem;">
      You can create custom routes in your Vue Atomic Docs application by adding them to the
      <code>customRoutes</code> array in the vue-atomic-docs options configuration. This allows you to add custom
      pages or components that are not part of the standard documentation.
    </p>
    <DocsMarkdown :content="allMarkdownContent" />

    <DocsDataTable :headers="headers" :items="routeProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownCodeExample = `
\`\`\`javascript
// import componentDocs from 'vue-atomic-docs';
.use(componentDocs, {
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
})
\`\`\`
`;

const typeDefinitionCode = `
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
`;

const allMarkdownContent = `${markdownCodeExample}

### Type Definition
${typeDefinitionCode}`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Description', key: 'description' }
];


// Define the route properties data
const routeProperties = [
  {
    property: 'path',
    type: 'String',
    description: 'The URL path for the route (e.g., \'my-custom-page\')'
  },
  {
    property: 'name',
    type: 'String',
    description: 'The route name (e.g., \'my-custom-page\')'
  },
  {
    property: 'component',
    type: 'Function',
    description: 'A function that returns a dynamic import of the component'
  },
  {
    property: 'meta.section',
    type: 'String',
    description: 'The section name in the navigation (e.g., \'Custom Section\')'
  },
  {
    property: 'meta.title',
    type: 'String',
    description: 'The display title (e.g., \'My Custom Page\')'
  },
  {
    property: 'meta.icon',
    type: 'String',
    description: 'An emoji or icon for the route (e.g., \'🚀\')'
  }
];
</script>
