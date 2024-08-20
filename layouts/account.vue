<template>
  <div class="account-layout flex bg-[var(--main-bg)] flex-col min-h-[100vh]">
    <trader-header class="z-[999]"/>
    <main class="h-[100%] w-[100%] flex-1 flex">
      <trader-navigation/>
      <NuxtPage class="w-[100%] p-[25px] py-[20px] flex-1"/>
    </main>
  </div>
</template>

<style>
.account-layout {
  /* Стили для пользовательского макета */
}
</style>