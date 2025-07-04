<template>
  <div>
    <h1>Enable Documentation</h1>
    <p style="margin-bottom: 1rem;">
      The <code>enableDocs</code> option allows you to conditionally enable or disable the documentation system.
      This is useful for toggling documentation in different environments (development vs. production).
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="enableDocsProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    enableDocs: import.meta.env.VITE_ENABLE_ATOMIC_DOCS === 'true'
})
\`\`\`

### Type Definition
\`\`\`typescript
enableDocs: boolean
\`\`\`

A boolean flag that determines whether the documentation system is enabled or disabled. This is useful for toggling documentation in different environments (development vs. production).
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the enableDocs properties data
const enableDocsProperties = [
  {
    property: 'enableDocs',
    type: 'Boolean',
    required: 'No',
    description: 'A flag that determines whether the documentation system is enabled or disabled. Useful for toggling documentation in different environments.'
  }
];
</script>
