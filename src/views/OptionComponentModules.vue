<template>
  <div>
    <h1>Component Modules Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>componentModules</code> option specifies which Vue components should be included in your documentation.
      It uses Vite's <code>import.meta.glob</code> to dynamically import all component files matching the specified pattern.
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
    componentModules: import.meta.glob('@/components/**/*.vue')
})
\`\`\`
`;
</script>