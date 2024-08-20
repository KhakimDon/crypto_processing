<script setup>
import { useTraderStore } from '~/stores/useTraderStore'
import { ref, watch } from 'vue'

definePageMeta({
    name: "Allcards",
    layout: 'account',
    middleware: 'auth',
    path: "/account/allcards"
})

const store = useTraderStore();
const cardsIsOpen = ref(false);

watch(cardsIsOpen, (newVal) => {
  store.cards_all_activate(newVal);
});

function open_cards(){
  cardsIsOpen.value = !cardsIsOpen.value;
}
</script>

<template>
    <main>
        <div class="flex gap-[10px] font-[Montserrat]">
            <!-- Select элементы и кнопка -->
            <select class="select select-bordered font-[600] text-[var(--target-txt)] text-[15px] w-full max-w-xs">
                <option hidden selected>Состояние </option>
                <option>Все</option>
                <option>В работе</option>
                <option>Скрыта</option>
                <option>Ожидает активизации</option>
                <option>Заблокирована</option>
            </select>
            <select class="select font-[600] text-[var(--target-txt)] text-[15px] select-bordered w-full max-w-xs">
                <option hidden selected>Банк</option>
                <option>Alfa</option>
                <option>Sber</option>
                <option>Tinkoff</option>
            </select>
            <input type="text" placeholder="Поиск"
                class="input input-bordered flex-1 font-[600] text-[var(--target-txt)] text-[15px]" />
            <button class="btn btn-outline btn-success">Найти <search-svg/> </button>
        </div>

        <div class="flex items-center font-[Montserrat] gap-[8px] justify-end mt-[20px]">
            <label for="openall" class="cursor-pointer">Открыть все</label>
            <input id="openall" @click="open_cards()" v-model="cardsIsOpen" type="checkbox" class="toggle" />
        </div>

        <div class="mt-[20px]">
            <div class="flex border-b px-[20px] pb-[5px] justify-between font-[Montserrat] font-[500] text-[#6b6b6b] text-[18px] ">
                <div class="max-w-[300px] w-[100%]">ФИО</div>
                <div class="flex-1">Кол-во Карт</div>
                <div class="flex-1">Общий Баланс</div>
                <div class="flex-1">СМС</div>
                <div class="flex-1">Время</div>
                <div class="flex-1">Действия</div>
            </div>
            <cards-table v-for="(item, index) in store.allCards" :key="item.id" :index="index" :card="item" />
        </div>
    </main>
</template>
