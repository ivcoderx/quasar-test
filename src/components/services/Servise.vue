<template>
  <div class="col-4 service">
    <a class="service-link" :href="link" target="_blank">
      <div class="service-icon">
        <Icons :name="icon" size="" />
      </div>
      <div class="service-caption">
        {{ caption }}
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import Icons from "../Icons/index.vue";

export interface ServicesProps {
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<ServicesProps>(), {
  caption: "",
  link: "#",
  icon: "",
});
</script>
<style lang="scss" scoped>
.service {
}

.service-link {
  display: block;
  height: 240px;
  border-radius: 16px;
  background: linear-gradient(
      304.29deg,
      rgba(51, 123, 190, 0.2) 0%,
      rgba(51, 123, 190, 0) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
}
.service-caption {
  text-align: center;
}
</style>
