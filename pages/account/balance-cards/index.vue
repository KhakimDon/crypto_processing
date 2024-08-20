<script setup>
import { useTraderStore } from '~/stores/useTraderStore'

definePageMeta({
    name: "Balance-cards",
    layout: 'account',
    middleware: 'auth',
    path: "/account/balance-cards"
})

const traderStore = useTraderStore()

const allcards = ref(toRaw(traderStore.allCards.map(item => toRaw(...item.cards))))


</script>

<template>
    <div>
        <div class="overflow-x-auto">
            <table class="table table-zebra font-[Montserrat]">
                <!-- head -->
                <thead>
                    <tr>
                        <th class="text-[var(--target-txt)] font-[700] text-[16px]">Номер карты</th>
                        <th class="text-[var(--target-txt)] font-[700] text-[16px]">Сумма сделок за 1ч.</th>
                        <th class="text-[var(--target-txt)] font-[700] text-[16px]">Кол-во сделок за 1ч.</th>
                        <th class="text-[var(--target-txt)] font-[700] text-[16px]">Сумма сделок за 1д.</th>
                        <th class="text-[var(--target-txt)] font-[700] text-[16px]">Кол-во сделок за 1д.</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr class="row-hover duration-[.2s] cursor-pointer" v-for="(item,index) of allcards" :key="item.id">
                        <th>{{ index + 1 }}. <u>{{ item.number }}</u></th>
                        <td class="text-[var(--target-txt)] font-[600]">0.00 руб</td>
                        <td class="text-[var(--target-txt)] font-[600]">0.00 руб</td>
                        <td class="text-[var(--target-txt)] font-[600]">16181.00 руб</td>
                        <td class="text-[var(--target-txt)] font-[600]">1275</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.row-hover:hover{
    background: var(--target-bg) !important;
}
.row-hover:hover td,.row-hover:hover   {
    color: var(--white-text);
}
</style>