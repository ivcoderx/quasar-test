<template>
  <div class="container">
    <q-page class="row items-center justify-evenly">
      <div class="col">
        <div class="q-mb-xl">
          <div class="text text-center q-pb-xl">
            <h1 class="q-mb-sm">Start connecting your world</h1>
            <p class="q-mb-none">
              Save time and money by making the internet work for you! We
              believe you might like...
            </p>
          </div>
        </div>
        <Services />
        <Suggest />
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import Services from "../components/services/index.vue";
import Suggest from "../components/suggest/index.vue";
</script>
