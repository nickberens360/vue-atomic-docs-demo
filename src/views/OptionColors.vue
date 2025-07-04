<template>
  <div>
    <h1>Add your brand colors</h1>
    <p style="margin-bottom: 1rem;">
      Define your brand's colors with the <code>colors</code> option in the
      configuration.
    </p>
    <DocsMarkdown :content="markdownFileContent" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`javascript
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
\`\`\`
`;
</script>