<template>
  <div>
    <h1>Add your brand colors</h1>
    <p style="margin-bottom: 1rem;">
      Define your brand's colors with the <code>colors</code> option in the
      configuration.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="colorProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`javascript
// import componentDocs from 'vue-atomic-docs';
.use(componentDocs, {
// other options...
  colors: [
      {
          name: 'primary',
          color: '#1976d2',
      },
      {
          name: 'secondary',
          color: '#424242',
      },
      {
          name: 'tertiary',
          color: '#b0bec5',
      },
      {
          name: 'accent',
          color: '#8c9eff',
      },
      {
          name: 'error',
          color: '#ff5252',
      },
      {
          name: 'info',
          color: '#2196f3',
      },
      {
          name: 'success',
          color: '#4caf50',
      },
      {
          name: 'warning',
          color: '#fb8c00',
      },
  ],
}
\`\`\`

### Type Definition
\`\`\`typescript
colors: Array<{name: string, color: string}>
\`\`\`
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the color properties data
const colorProperties = [
  {
    property: 'name',
    type: 'String',
    required: 'Yes',
    description: 'The name of the color (e.g., \'primary\', \'secondary\')'
  },
  {
    property: 'color',
    type: 'String',
    required: 'Yes',
    description: 'The color value in hex format (e.g., \'#1976d2\')'
  }
];
</script>
