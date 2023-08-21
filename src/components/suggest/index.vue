<template>
  <div class="suggest text-center">
    <transition name="fade">
      <div class="suggest-form" v-if="isShowSuggest">
        <div class="suggest-title row items-center justify-center q-gutter-md">
          <div class="suggest-title--text">Your own Integration</div>
          <q-btn
            padding="8px 12px"
            class="suggest-title--btn"
            size="18px"
            @click="toggleShowSuggest"
            >Close</q-btn
          >
        </div>
        <div class="suggest-input">
          <label class="suggest-input--label">Integration name: </label>
          <q-input
            v-model="name"
            placeholder="Type Web Service name here..."
            outlined
          ></q-input>
        </div>
        <div class="suggest-input">
          <label class="suggest-input--label"
            >Triggers that you wanna have:
          </label>
          <q-input
            v-model="trigger"
            placeholder="Type here triggers that you wanna use..."
            outlined
          ></q-input>
        </div>
        <q-btn class="suggest-btn" size="48px" round @click="hundlerSubmit"
          >Submit</q-btn
        >
      </div>
    </transition>
    <transition name="fade">
      <q-btn
        class="suggest-btn"
        v-if="!isShowSuggest"
        size="40px"
        round
        @click="toggleShowSuggest"
        >Suggest your own</q-btn
      ></transition
    >
  </div>
</template>

<script setup lang="ts">
import { useUptifyStore } from "../../stores/uptify-store/index";
import { ref } from "vue";

const store = useUptifyStore();
const name = ref("");
const trigger = ref("");
const isShowSuggest = ref(false);

function toggleShowSuggest() {
  isShowSuggest.value = !isShowSuggest.value;
}

function hundlerSubmit() {
  store.addService({
    caption: name.value,
    link: trigger.value,
    icon: "google",
  });
  name.value = "";
  trigger.value = "";
}
</script>
<style lang="scss" scoped>
.suggest {
  padding-bottom: 40px;
}
.suggest-input {
  margin-bottom: 34px;
}
.suggest-input:last-of-type {
  margin-bottom: 56px;
}
.suggest-btn {
  width: 256px;
  height: 256px;
  line-height: 1;
}
.suggest-title {
  margin-bottom: 40px;
}
.suggest-title--text {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}
.suggest-title--btn {
  font-weight: 700;
}
.suggest-input--label {
  display: block;
  margin-bottom: 14px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
}
</style>
