<template>
  <div>
    <h1>Examples Directory Name</h1>
    <p style="margin-bottom: 1rem;">
      The <code>examplesDirName</code> option specifies the name of the directory where your component examples are stored.
      This helps vue-atomic-docs locate and organize your component examples in the documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="examplesDirNameProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    examplesDirName: 'component-examples'
})
\`\`\`

### Type Definition
\`\`\`typescript
examplesDirName: string
\`\`\`

The name of the directory where your component examples are stored (e.g., 'component-examples'). This helps vue-atomic-docs locate and organize your component examples in the documentation.
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the examplesDirName properties data
const examplesDirNameProperties = [
  {
    property: 'examplesDirName',
    type: 'String',
    required: 'No',
    description: 'The name of the directory where your component examples are stored (e.g., \'component-examples\')'
  }
];
</script>
