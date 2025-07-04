<template>
  <div>
    <h1>Raw Component Source Modules</h1>
    <p style="margin-bottom: 1rem;">
      The <code>rawComponentSourceModules</code> option allows you to access the raw source code of your components.
      This is useful for displaying the component source code in your documentation.
      It uses Vite's <code>import.meta.glob</code> with the <code>?raw</code> query parameter.
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
    rawComponentSourceModules: import.meta.glob('@/components/**/*.vue', {query: '?raw', import: 'default'})
})
\`\`\`

### Type Definition
\`\`\`typescript
rawComponentSourceModules: Record<string, () => Promise<string>>
\`\`\`

This is typically the result of \`import.meta.glob('@/components/**/*.vue', {query: '?raw', import: 'default'})\`, which creates an object where:
- Keys are file paths (string)
- Values are dynamic import functions that return a Promise resolving to the raw source code as a string
`;
</script>
