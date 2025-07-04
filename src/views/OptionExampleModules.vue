<template>
  <div>
    <h1>Example Modules Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>exampleModules</code> option specifies which Vue component examples should be included in your documentation.
      These examples demonstrate how your components can be used in different contexts and with various props.
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
    exampleModules: import.meta.glob('@/component-examples/**/*.vue')
})
\`\`\`
`;
</script>