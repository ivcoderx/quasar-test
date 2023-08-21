<template>
  <router-view />
</template>

<script setup lang="ts">
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap");
body {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  background-color: rgba(0, 5, 11, 1);
  background-image: url(../src/assets/bg.svg);
  background-size: cover;
  color: white;
}
.container {
  width: 100%;
  max-width: 960px;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: auto;
  margin-left: auto;
}
h1 {
  margin: 0;
  font-size: 72px;
  font-weight: 900;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
}
a {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-decoration: none;
  color: white;
}
.q-field__control {
  height: 64px;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.08);
  font-family: Inter;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
}
.q-field__label {
  color: rgba(103, 130, 154, 1);
}
i.q-icon.notranslate.material-icons {
  color: rgba(103, 130, 154, 1);
}
.q-field__native {
  color: white;
  font-weight: 700;
}
.q-field__native::placeholder {
  color: rgba(103, 130, 154, 1);
  font-weight: normal;
}
.q-btn {
  font-weight: 900;
  background: linear-gradient(
      304.29deg,
      rgba(51, 123, 190, 0.2) 0%,
      rgba(51, 123, 190, 0) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.input--error {
  color: #d40a3a;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  animation: 0.5s fade forwards;
}

.fade-leave-active {
  animation: 0s fade reverse;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s linear;
  transform-origin: 0% 0% 0;
  transform: scaleY(1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(0.1);
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
