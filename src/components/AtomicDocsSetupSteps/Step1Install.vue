<template>
  <DocSteps
    title="Install"
    :markdown-file-content="step1InstallMarkdown"
  />
</template>

<script
  setup
  lang="ts"
>
import step1InstallMarkdown from '@/markdown-content/step-1-install.md?raw'
import DocSteps from "@/components/DocSteps.vue";
</script>
