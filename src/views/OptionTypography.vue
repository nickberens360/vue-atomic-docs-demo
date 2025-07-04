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

### Type Definition
\`\`\`typescript
typography: Array<{
  name: string,
  fontFamily: string,
  fontSize: string,
  fontWeight: string,
  lineHeight: string
}>
\`\`\`

Each typography object requires:
- \`name\`: String - The name of the typography style (e.g., 'Headline 1')
- \`fontFamily\`: String - The font family (e.g., '"Roboto", sans-serif')
- \`fontSize\`: String - The font size (e.g., '2.5rem')
- \`fontWeight\`: String - The font weight (e.g., '700')
- \`lineHeight\`: String - The line height (e.g., '1.5')
`;
</script>
