<template>
  <div>
    <h1>Main App ID</h1>
    <p style="margin-bottom: 1rem;">
      The <code>mainAppID</code> option specifies the ID of your main application element.
      This helps vue-atomic-docs integrate properly with your application's DOM structure.
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
    mainAppID: 'app'
})
\`\`\`

### Type Definition
\`\`\`typescript
mainAppID: string
\`\`\`

The ID of the main app element in your HTML (e.g., 'app'). This helps vue-atomic-docs integrate properly with your application's DOM structure.
`;
</script>
