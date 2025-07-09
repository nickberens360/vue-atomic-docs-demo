<template>
  <div>
    <h1>{{text}}</h1>
    <p>{{message}}</p>
  </div>
</template>
<script setup lang="ts">

interface Props {
  text?: string;
  message?: string;
}
withDefaults(defineProps<Props>(), {
  text: 'Hello World',
  message: 'Oh Hey!',
});
/*defineProps({
  text: {
    type: String,
    default: 'Hello World'
  },
  message: {
    type: String,
    default: 'Oh Heyyyyyy!!!'
  }
})*/
</script>