<template>
  <div>
    <h1>Components Directory Name</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentsDirName</code> option specifies the name of the directory where your Vue components are stored.
      This helps vue-atomic-docs locate and organize your components in the documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="componentsDirNameProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    componentsDirName: 'components'
})
\`\`\`

### Type Definition
\`\`\`typescript
componentsDirName: string
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the componentsDirName properties data
const componentsDirNameProperties = [
  {
    property: 'componentsDirName',
    type: 'String',
    required: 'No',
    description: 'The name of the directory where your Vue components are stored (e.g., \'components\')'
  }
];
</script>
