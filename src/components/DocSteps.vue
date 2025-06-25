<template>
  <div class="doc-steps">
    <h2 class="doc-steps__heading">{{ title }} </h2>
    <DocsMarkdown :content="markdownFileContent" />
  </div>
</template>

<script
  setup
  lang="ts"
>
import {defineProps} from 'vue'
import { DocsMarkdown } from "vue-atomic-docs";
defineProps<{
  title: string
  markdownFileContent?: string,
  markdownFileContentMDX?: string
}>()
</script>

<style scoped>
.doc-steps__heading {
  margin-bottom: 16px;
  font-size: 24px;
}
</style>