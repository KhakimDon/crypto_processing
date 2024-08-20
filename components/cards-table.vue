<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useTraderStore } from '~/stores/useTraderStore'
import powerSvg from './power-svg.vue';

const props = defineProps({
    card: Object,
    index: Number
});

let height = ref(80)
const traderStore = useTraderStore();

watch(
  () => props.card.isActive,
  (newVal) => {
    updateHeight();
  },
  { immediate: true }
)

onMounted(() => {
    updateHeight();
})

function open_cards() {
    traderStore.cards_activate(props.index, !props.card.isActive);
    updateHeight();
}

function updateHeight() {
    nextTick(() => {
        height.value = props.card.isActive 
            ? document.querySelectorAll('#cardgroup')[props.index].getBoundingClientRect().height + 80 
            : 80;
    });
}
</script>

<template>
    <div :style="{ height: height + 'px' }"
        class="rounded-[10px] group overflow-hidden shadow-md mt-[20px] shadow-[var(--shadows)] bg-[var(--blocks-bg)] duration-[.3s]">
        <div @click="open_cards()"
            class="flex items-center group-hover:bg-[#e0e0e0] h-[80px] cursor-pointer px-[20px] justify-between font-[Montserrat] font-[500] text-[18px] text-[var(--target-txt)]">
            <div class="max-w-[300px] w-[100%]">{{ index + 1 }}. {{ card.title }}</div>
            <div class="flex-1 ">
                <div class="badge  badge-warning gap-2 min-w-[50px]">{{ card.cards.length }}</div>
            </div>
            <div class="flex-1">128.570.01 руб</div>
            <div class="flex-1">
                <span class="text-[var(--target-bg)]">1635</span>
                /
                <span class="text-[#f96363]">0</span>
            </div>
            <div class="flex-1">Авг. 17, 04:21</div>
            <div class="flex-1">
                <button @click.stop class="btn btn-success text-white"> <power-svg/> Активировать группу</button>
            </div>
        </div>
        <div id="cardgroup" class="py-[10px] px-[30px]">
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Карта</th>
                            <th>Банк</th>
                            <th>Устройство</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>SMS</th>
                            <th>Время</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in card.cards" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.number }}</td>
                            <td>{{ item.bank }}</td>
                            <td>
                                <div class="badge badge-warning gap-2">Не активен</div>
                            </td>
                            <td>6716.55</td>
                            <td>
                                <div class="badge badge-warning gap-2">В работе</div>
                            </td>
                            <td>
                                <div>
                                    <span class="text-[var(--target-bg)]">1635</span>
                                    /
                                    <span class="text-[#f96363]">0</span>
                                </div>
                            </td>
                            <td>Авг. 17, 04:21</td>
                            <td>
                                <button class="btn btn-success text-white">
                                    <power-svg/>  Активировать
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
