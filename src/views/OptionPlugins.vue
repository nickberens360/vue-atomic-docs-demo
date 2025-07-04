<template>
  <div>
    <h1>Add Application Plugins</h1>
    <p style="margin-bottom: 1rem;">
      You can pass your application's plugins and filters to be used in the component documentation by using the <code>plugins</code> option in the configuration.
    </p>
    <DocsMarkdown :content="markdownFileContent" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown} from "vue-atomic-docs";
const markdownFileContent = `
\`\`\`javascript
// other options...
plugins: [
  vuetify,
  filters,
  store,
  fontawesome,
],
\`\`\`

This allows your components in the documentation to have access to the same plugins, filters, and stores that your main application uses, ensuring consistent behavior and appearance.
`;
</script>