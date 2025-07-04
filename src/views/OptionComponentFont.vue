<template>
  <div>
    <h1>Component Font</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentFont</code> option allows you to specify the default font family used for components in the documentation.
      This helps maintain consistent typography throughout your component documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="componentFontProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    componentFont: 'Times, serif'
})
\`\`\`

### Type Definition
\`\`\`typescript
componentFont: string
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the componentFont properties data
const componentFontProperties = [
  {
    property: 'componentFont',
    type: 'String',
    required: 'No',
    description: 'The default font family used for components in the documentation (e.g., \'Times, serif\')'
  }
];
</script>
