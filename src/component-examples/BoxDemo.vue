<template>
  <ExampleComponentUsage
    :event-items="eventItems"
    :slot-items="slotItems"
    expand-props-table
    description="A simple box component."
  >
    <div class="box-demo-container">
      <BoxDemo
        :height="`${height}px`"
        :width="`${width}px`"
        :bg-color="bgColor"
        :border-radius="`${borderRadius}px`"
        @click="handleClick"
      />
    </div>
    <template #[`item.actions`]="{item}">
      <DocsSlider
        v-if="item.name === 'width'"
        v-model="width"
        label="width"
        thumb-label
        max="600"
        hide-details
      />
      <DocsSlider
        v-if="item.name === 'height'"
        v-model="height"
        thumb-label
        label="height"
        max="600"
        hide-details
      />
      <DocsMenu
        v-if="item.name === 'bgColor'"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <DocsChip
            v-bind="props"
            :color="bgColor"
            variant="flat"
            :rounded="false"
            size="large"
            label
            width="100%"
            class="color-chip"
          >
            Color
          </DocsChip>
        </template>
        <DocsColorPicker
          v-model="bgColor"
          label="bgColor"
        />
      </DocsMenu>
      <DocsSlider
        v-if="item.name === 'borderRadius'"
        v-model="borderRadius"
        thumb-label
        label="borderRadius"
        max="100"
        hide-details
      />
    </template>
  </ExampleComponentUsage>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BoxDemo from "../components/BoxDemo.vue";
import {DocsSlider, DocsMenu, DocsChip, DocsColorPicker } from "vue-atomic-docs";

const height = ref(150);
const width = ref(150);
const bgColor = ref('#6dabe8');
const borderRadius = ref(8);

const eventItems = [
  {
    event: 'box-clicked',
    payload: 'void',
    description: 'Emitted when the box is clicked.',
  },
];

const slotItems = [
  {
    name: 'default',
    content: 'null',
    description: 'Slot for custom content.',
  },
];

const handleClick = () => {
  alert('Box clicked');
};

</script>
