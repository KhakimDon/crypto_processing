<script setup>
import { useAdminStore } from '~/stores/useAdminStore'
useAdminStore().active_link(useRouter())
</script>

<template>
  <div class="admin-layout flex bg-[var(--main-bg)] flex-col min-h-[100vh]">
    <admin-header class="z-[999]"/>
    <main class="h-[100%] w-[100%] flex-1 flex">
      <admin-navigation/>
      <NuxtPage class="w-[100%] p-[25px] py-[20px] flex-1" />
    </main>
  </div>
</template>

<style>
.admin-layout {
  /* Стили для админского макета */
}
</style>