<template>
  <div>
    <h1>Enable Documentation</h1>
    <p style="margin-bottom: 1rem;">
      The <code>enableDocs</code> option allows you to conditionally enable or disable the documentation system.
      This is useful for toggling documentation in different environments (development vs. production).
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
    enableDocs: import.meta.env.VITE_ENABLE_ATOMIC_DOCS === 'true'
})
\`\`\`
`;
</script>