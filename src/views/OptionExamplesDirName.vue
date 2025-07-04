<template>
  <div>
    <h1>Examples Directory Name</h1>
    <p style="margin-bottom: 1rem;">
      The <code>examplesDirName</code> option specifies the name of the directory where your component examples are stored.
      This helps vue-atomic-docs locate and organize your component examples in the documentation.
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
    examplesDirName: 'component-examples'
})
\`\`\`

### Type Definition
\`\`\`typescript
examplesDirName: string
\`\`\`

The name of the directory where your component examples are stored (e.g., 'component-examples'). This helps vue-atomic-docs locate and organize your component examples in the documentation.
`;
</script>
