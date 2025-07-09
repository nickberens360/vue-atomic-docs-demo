<template>
  <div>
    <h1>Auto Extract Colors</h1>
    <p style="margin-bottom: 1rem;">
      The <code>autoExtractColors</code> option enables automatic extraction of color variables from your components.
      When enabled, vue-atomic-docs will analyze your components and extract color information to display in the documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="autoExtractColorsProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    autoExtractColors: true
})
\`\`\`

### Type Definition
\`\`\`typescript
autoExtractColors: boolean
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the autoExtractColors properties data
const autoExtractColorsProperties = [
  {
    property: 'autoExtractColors',
    type: 'Boolean',
    required: 'No',
    description: 'When set to true, automatically analyzes components and extracts color information to display in the documentation.'
  }
];
</script>
