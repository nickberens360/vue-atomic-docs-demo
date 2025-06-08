<template>
  <ExampleComponentUsage
    :component="SimpleTest"
    expand-props-table
    description="A simple box component"
  >
    sdfsdfsdf
    <SimpleTest
      :text="text"
      :message="message"
    />
    <template #[`item.actions`]="{item}">
      <input
        v-if="item.name === 'text'"
        type="text" v-model="text"
      />
      <input
        v-if="item.name === 'message'"
        type="text" v-model="message"
      />
    </template>
  </ExampleComponentUsage>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SimpleTest from "../components/SimpleTest.vue";
const text = ref('Hello World');
const message = ref('Yooooooo');

</script>
<style scoped>
.box-demo-container {
  display: flex;
}
</style>
