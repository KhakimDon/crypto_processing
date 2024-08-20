<script setup>
definePageMeta({
    name: "Create-cards",
    layout: 'account',
    middleware: 'auth',
    path: "/account/create-cards"
})
</script>

<template>
    <main>
        <div class="max-w-[1000px] mx-auto">
            <h2 class="text-[var(--target-txt)] text-[32px] font-[500] font-[Montserrat]">Создание карты</h2>
            <form class="font-[Montserrat">
                <div class="mt-[10px]">
                    <label for="select_bank" class="font-[Montserrat]">Банк:</label>
                    <select id="select_bank"
                        class="w-[100%] font-[Montserrat] select mt-[3px] select-bordered font-[600] text-[var(--target-txt)] text-[15px]">
                        <option hidden selected>Банк</option>
                        <option>Alfa</option>
                        <option>Sber</option>
                        <option>Tinkoff</option>
                    </select>
                </div>
                <div class="mt-[10px]">
                    <label for="select_id_device" class="font-[Montserrat]">ID устройства:</label>
                    <input id="select_id_device" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="text">
                </div>
                <div class="mt-[10px]">
                    <label for="select_number_card" class="font-[Montserrat]">Номер карты:</label>
                    <input id="select_number_card" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_name" class="font-[Montserrat]">ФИО:</label>
                    <input id="select_name" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="text">
                </div>
                <div class="mt-[10px]">
                    <label for="select_min_summa" class="font-[Montserrat]">Минимальная сумма:</label>
                    <input id="select_min_summa" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_max_summa" class="font-[Montserrat]">Максимальная сумма:</label>
                    <input id="select_max_summa" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_day_limit" class="font-[Montserrat]">Дневной лимит:</label>
                    <input id="select_day_limit" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_schet" class="font-[Montserrat]">Счет:</label>
                    <input id="select_schet" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_link_for_qr" class="font-[Montserrat]">Ссылка на QR код:</label>
                    <input id="select_link_for_qr" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <div class="mt-[10px]">
                    <label for="select_type_of_graphic" class="font-[Montserrat]">Тип трафика:</label>
                    <input id="select_type_of_graphic" class="input font-[Montserrat] text-[var(--target-txt)] input-bordered w-[100%]" type="number">
                </div>
                <button class="btn font-[Montserrat] text-[18px] h-[50px] mt-[30px] bg-[--target-bg] text-[--white-text] w-[100%]">Создать</button>
            </form>
            <div class="h-[200px]"></div>
        </div>
    </main>
</template>