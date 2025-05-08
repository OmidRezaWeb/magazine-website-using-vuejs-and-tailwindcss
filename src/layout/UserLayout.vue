<script setup>
import { RouterView } from 'vue-router';
import HeaderView from '@/components/user/HeaderView.vue';
import FooterView from '@/components/user/FooterView.vue';
</script>
<template>
  <div>
    <HeaderView/>
    <main>
      <RouterView />
    </main>
    <FooterView/>
  </div>
</template>
<style scoped></style>
