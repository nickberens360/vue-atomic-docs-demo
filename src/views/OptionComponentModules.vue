<template>
  <div>
    <h1>Component Modules Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentModules</code> option specifies which Vue components should be included in your documentation.
      It uses Vite's <code>import.meta.glob</code> to dynamically import all component files matching the specified pattern.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="componentModulesProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    componentModules: import.meta.glob('@/components/**/*.vue')
})
\`\`\`

### Type Definition
\`\`\`typescript
componentModules: Record<string, () => Promise<any>>
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the componentModules properties data
const componentModulesProperties = [
  {
    property: 'componentModules',
    type: 'Record<string, () => Promise<any>>',
    required: 'Yes',
    description: 'An object mapping file paths to dynamic import functions that load Vue components. Typically created using import.meta.glob().'
  }
];
</script>
