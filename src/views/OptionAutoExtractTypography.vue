<template>
  <div>
    <h1>Auto Extract Typography</h1>
    <p style="margin-bottom: 1rem;">
      The <code>autoExtractTypography</code> option enables automatic extraction of typography styles from your components.
      When enabled, vue-atomic-docs will analyze your components and extract typography information such as font families, sizes, and weights to display in the documentation.
    </p>
    <DocsMarkdown :content="markdownFileContent" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`js
// import componentDocs from 'vue-atomic-docs';

.use(componentDocs, {
    // other options...
    autoExtractTypography: true
})
\`\`\`
`;
</script>