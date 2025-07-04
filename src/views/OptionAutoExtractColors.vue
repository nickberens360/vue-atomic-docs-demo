<template>
  <div>
    <h1>Auto Extract Colors</h1>
    <p style="margin-bottom: 1rem;">
      The <code>autoExtractColors</code> option enables automatic extraction of color variables from your components.
      When enabled, vue-atomic-docs will analyze your components and extract color information to display in the documentation.
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
    autoExtractColors: true
})
\`\`\`

### Type Definition
\`\`\`typescript
autoExtractColors: boolean
\`\`\`

When set to \`true\`, vue-atomic-docs will automatically analyze your components and extract color information to display in the documentation.
`;
</script>
