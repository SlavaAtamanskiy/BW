<template>
  <div class="list">
    <slot name="title"></slot>
    <slot name="contents"></slot>
  </div>
</template>

<script>

export default {
  name: "list",
  props: {
    list: { type: Array, required: false },
    search: { type: String }
 }
};
</script>
