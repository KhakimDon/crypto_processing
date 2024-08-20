<script setup>
definePageMeta({
    name: "Download-report",
    layout: 'account',
    middleware: 'auth',
    path: "/account/download-report"
})
</script>

<template>
    <main>
        <form @submit.prevent class="max-w-[800px] mx-auto">
            <h2 class="font-[Montserrat] text-[26px] font-[600] text-[var(--target-txt)]">Скачать отчет</h2>
            <div class="flex mt-[10px] font-[Montserrat] flex-col items-start">
                <div class="flex justify-between w-[100%] gap-[20px]">
                    <div class="flex-1">
                        <span class="text-[var(--target-txt)]">C даты:</span>
                        <input class="input font-[600] mt-[5px] input-bordered w-[100%] text-[var(--target-txt)]"
                            type="date">
                    </div>
                    <div class="flex-1">
                        <span class="text-[var(--target-txt)]">По дату:</span>
                        <input class="input font-[600] mt-[5px] input-bordered w-[100%] text-[var(--target-txt)]"
                            type="date">
                    </div>
                </div>
                <div class="w-[100%] mt-[15px]">
                    <span class="text-[var(--target-txt)]">Выберите статус:</span>
                    <select class="select select-bordered text-[var(--target-txt)] font-[600] mt-[5px] w-[100%]">
                        <option class="text-[18px]">Все</option>
                        <option class="text-[18px]">Создан</option>
                        <option class="text-[18px]">Отменён</option>
                        <option class="text-[18px]">Завершён</option>
                        <option class="text-[18px]">Удалён</option>
                    </select>
                </div>
                <div class="w-[100%] mt-[15px]">
                    <span class="text-[var(--target-txt)]">Тип отчета:</span>
                    <select class="select select-bordered text-[var(--target-txt)] font-[600] mt-[5px] w-[100%]">
                        <option class="text-[18px]">Стандартный</option>
                        <option class="text-[18px]">Внешний</option>
                    </select>
                </div>
                <button
                    class="btn bg-[var(--target-bg)] text-[16px] mt-[15px] text-[--white-text] w-[100%]">Сохранить</button>
            </div>
        </form>
    </main>
</template>