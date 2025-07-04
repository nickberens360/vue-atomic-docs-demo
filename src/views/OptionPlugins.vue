<template>
  <div>
    <h1>Add Application Plugins</h1>
    <p style="margin-bottom: 1rem;">
      You can pass your application's plugins and filters to be used in the component documentation by using the <code>plugins</code> option in the configuration.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="pluginProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`javascript
// other options...
plugins: [
  vuetify,
  filters,
  store,
  fontawesome,
],
\`\`\`

### Type Definition
\`\`\`typescript
plugins: Array<Plugin>
\`\`\`

This allows your components in the documentation to have access to the same plugins, filters, and stores that your main application uses, ensuring consistent behavior and appearance.
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the plugin properties data
const pluginProperties = [
  {
    property: 'plugins',
    type: 'Array',
    required: 'No',
    description: 'An array of Vue plugins that will be registered with the documentation application, allowing components to access the same plugins as your main application.'
  }
];
</script>
