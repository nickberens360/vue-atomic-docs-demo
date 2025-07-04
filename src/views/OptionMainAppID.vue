<template>
  <div>
    <h1>Main App ID</h1>
    <p style="margin-bottom: 1rem;">
      The <code>mainAppID</code> option specifies the ID of your main application element.
      This helps vue-atomic-docs integrate properly with your application's DOM structure.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="mainAppIDProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    mainAppID: 'app'
})
\`\`\`

### Type Definition
\`\`\`typescript
mainAppID: string
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the mainAppID properties data
const mainAppIDProperties = [
  {
    property: 'mainAppID',
    type: 'String',
    required: 'No',
    description: 'The ID of the main app element in your HTML (e.g., \'app\'). Helps integrate with your application\'s DOM structure.'
  }
];
</script>
