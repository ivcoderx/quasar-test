<template>
  <div class="q-pt-xl q-pb-md">
    <q-input
      outlined
      bottom-slots
      v-model="store.searchServices"
      placeholder="Search Services"
    >
      <template v-slot:prepend>
        <q-icon name="search" color=""></q-icon>
      </template>
      <template v-slot:append>
        <q-icon
          v-if="store.searchServices !== ''"
          name="close"
          @click="store.clearSearchServices"
          class="cursor-pointer"
        ></q-icon>
      </template>
    </q-input>
  </div>
  <div class="row q-col-gutter-md q-mb-xl">
    <Service
      v-for="service in store.getServices"
      :key="service.caption"
      v-bind="service"
    />
  </div>
</template>

<script setup lang="ts">
import { useUptifyStore } from "../../stores/uptify-store/index";
import Service, { ServiceProps } from "./Servise.vue";
// import { computed, ref } from "vue";

const store = useUptifyStore();
// const services: ServiceProps[] = store.services;
</script>
<style lang="scss" scoped>
</style>
