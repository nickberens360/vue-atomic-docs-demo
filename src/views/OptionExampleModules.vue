<template>
  <div>
    <h1>Example Modules Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>exampleModules</code> option specifies which Vue component examples should be included in your documentation.
      These examples demonstrate how your components can be used in different contexts and with various props.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="exampleModulesProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    exampleModules: import.meta.glob('@/component-examples/**/*.vue')
})
\`\`\`

### Type Definition
\`\`\`typescript
exampleModules: Record<string, () => Promise<any>>
\`\`\`

This is typically the result of \`import.meta.glob('@/component-examples/**/*.vue')\`, which creates an object where:
- Keys are file paths (string)
- Values are dynamic import functions that return a Promise resolving to the component example
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the exampleModules properties data
const exampleModulesProperties = [
  {
    property: 'exampleModules',
    type: 'Record<string, () => Promise<any>>',
    required: 'Yes',
    description: 'An object mapping file paths to dynamic import functions that load component examples. Typically created using import.meta.glob().'
  }
];
</script>
