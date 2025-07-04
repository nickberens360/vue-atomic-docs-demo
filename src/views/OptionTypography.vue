<template>
  <div>
    <h1>Typography Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>typography</code> option allows you to define typography styles for your documentation.
      You can specify different text styles with properties like font family, size, weight, and line height.
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
    typography: [
        {
            name: 'Headline 1',
            fontFamily: '"Roboto", sans-serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            lineHeight: '1.5',
        },
        {
            name: 'Body Text',
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.6',
        },
        {
            name: 'Caption',
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.875rem',
            fontWeight: '400',
            lineHeight: '1.4',
        },
    ]
})
\`\`\`
`;
</script>