<template>
  <div>
    <h1>Components Directory Name</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentsDirName</code> option specifies the name of the directory where your Vue components are stored.
      This helps vue-atomic-docs locate and organize your components in the documentation.
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
    componentsDirName: 'components'
})
\`\`\`
`;
</script>