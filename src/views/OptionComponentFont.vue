<template>
  <div>
    <h1>Component Font</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentFont</code> option allows you to specify the default font family used for components in the documentation.
      This helps maintain consistent typography throughout your component documentation.
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
    componentFont: 'Times, serif'
})
\`\`\`

### Type Definition
\`\`\`typescript
componentFont: string
\`\`\`

A string specifying the default font family used for components in the documentation (e.g., 'Times, serif'). This helps maintain consistent typography throughout your component documentation.
`;
</script>
