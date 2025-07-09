<template>
  <div>
    <h1>Auto Extract Typography</h1>
    <p style="margin-bottom: 1rem;">
      The <code>autoExtractTypography</code> option enables automatic extraction of typography styles from your components.
      When enabled, vue-atomic-docs will analyze your components and extract typography information such as font families, sizes, and weights to display in the documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="autoExtractTypographyProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    autoExtractTypography: true
})
\`\`\`

### Type Definition
\`\`\`typescript
autoExtractTypography: boolean
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the autoExtractTypography properties data
const autoExtractTypographyProperties = [
  {
    property: 'autoExtractTypography',
    type: 'Boolean',
    required: 'No',
    description: 'When set to true, automatically analyzes components and extracts typography information such as font families, sizes, and weights to display in the documentation.'
  }
];
</script>
