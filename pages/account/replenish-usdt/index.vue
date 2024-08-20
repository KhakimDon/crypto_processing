<script setup>
definePageMeta({
    name: "replenish-usdt",
    layout: 'account',
    middleware: 'auth',
    path: "/account/replenish-usdt"
})
</script>

<template>
    <main>
    <form @submit.prevent class="max-w-[800px] mx-auto">
        <h2 class="font-[Montserrat] text-[26px] font-[600] text-[var(--target-txt)]">Закинуть <u>USDT</u></h2>
        <div class="flex mt-[10px] font-[Montserrat] flex-col items-start">
            <span class="text-[var(--target-txt)]">Хэш транзакции:</span>
            <input class="input font-[600] mt-[5px] input-bordered w-[100%] text-[var(--target-txt)]" type="text">
            <button class="btn bg-[var(--target-bg)] text-[16px] mt-[15px] text-[--white-text] w-[100%]">Пополнить</button>
        </div>
    </form>
    </main>
</template>