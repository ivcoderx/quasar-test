<template>
  <div
    class="svg"
    :style="{ width: `${size}px`, height: `${size}px`, color: color }"
    v-html="ICONS[name]"
  ></div>
</template>

<script setup lang="ts">
import ICONS from "./icons-template";

interface Props {
  name: string;
  color?: string;
  size: number | string;
}
withDefaults(defineProps<Props>(), {
  name: "mds123",
  color: "#37474F",
  size: 24,
});
</script>

<style scoped lang="scss">
.svg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
}
</style>
