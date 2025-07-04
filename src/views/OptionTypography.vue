<template>
  <div>
    <h1>Typography Configuration</h1>
    <p style="margin-bottom: 1rem;">
      The <code>typography</code> option allows you to define typography styles for your documentation.
      You can specify different text styles with properties like font family, size, weight, and line height.
    </p>
    <DocsMarkdown :content="markdownFileContent" />

    <DocsDataTable :headers="headers" :items="typographyProperties" />
  </div>
</template>
<script setup lang="ts">
import {DocsMarkdown, DocsDataTable} from "vue-atomic-docs";
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
`;

// Define headers for the data table
const headers = [
  { title: 'Property', key: 'property' },
  { title: 'Type', key: 'type' },
  { title: 'Required', key: 'required' },
  { title: 'Description', key: 'description' }
];

// Define the typography properties data
const typographyProperties = [
  {
    property: 'name',
    type: 'String',
    required: 'Yes',
    description: 'The name of the typography style (e.g., \'Headline 1\')'
  },
  {
    property: 'fontFamily',
    type: 'String',
    required: 'Yes',
    description: 'The font family (e.g., \'"Roboto", sans-serif\')'
  },
  {
    property: 'fontSize',
    type: 'String',
    required: 'Yes',
    description: 'The font size (e.g., \'2.5rem\')'
  },
  {
    property: 'fontWeight',
    type: 'String',
    required: 'Yes',
    description: 'The font weight (e.g., \'700\')'
  },
  {
    property: 'lineHeight',
    type: 'String',
    required: 'Yes',
    description: 'The line height (e.g., \'1.5\')'
  }
];
</script>
