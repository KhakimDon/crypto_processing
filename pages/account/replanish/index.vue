<script setup>
definePageMeta({
    name: "replenish",
    layout: "account",
    middleware: "auth",
    path: "/account/replenish",
});
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';


const refills = ref([
    {
        id: 19076,
        usdt: 2859.34,
        course: 90.93,
        amount: 260000.0,
        status: true,
        hash: "YE1PR***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 18, 2024, 17:17",
        update: "Авг. 18, 2024, 17:17",
    },
    {
        id: 19073,
        usdt: 3299.24,
        course: 90.93,
        amount: 300000.0,
        status: true,
        hash: "O803V***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 18, 2024, 16:58",
        update: "	Авг. 18, 2024, 16:58",
    },
    {
        id: 19064,
        usdt: 2441.98,
        course: 90.91,
        amount: 222000.0,
        status: false,
        hash: "RJLYJ***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 18, 2024, 15:50",
        update: "	Авг. 18, 2024, 15:50",
    },
    {
        id: 19054,
        usdt: 3295.98,
        course: 91.02,
        amount: 300000.0,
        status: true,
        hash: "5DKNQ***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 18, 2024, 14:48",
        update: "	Авг. 18, 2024, 14:48",
    },
    {
        id: 19028,
        usdt: 7363.45,
        course: 90.99,
        amount: 670000.0,
        status: true,
        hash: "ZV8TW***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 18, 2024, 11:20",
        update: "	Авг. 18, 2024, 11:20",
    },
    {
        id: 18851,
        usdt: 6006.6,
        course: 90.9,
        amount: 546000.0,
        status: true,
        hash: "QZEG2***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 17, 2024, 02:34",
        update: "	Авг. 17, 2024, 02:34",
    },
    {
        id: 18837,
        usdt: 7235.54,
        course: 90.94,
        amount: 658000.0,
        status: true,
        hash: "PVHCM***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 16, 2024, 23:57",
        update: "	Авг. 16, 2024, 23:57",
    },
    {
        id: 18824,
        usdt: 3848.69,
        course: 90.94,
        amount: 350000.0,
        status: true,
        hash: "G2SXL***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 16, 2024, 22:13",
        update: "	Авг. 16, 2024, 22:13",
    },
    {
        id: 18813,
        usdt: 7417.58,
        course: 91.0,
        amount: 675000.0,
        status: true,
        hash: "BNHO9***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 16, 2024, 20:22",
        update: "	Авг. 16, 2024, 20:22",
    },
    {
        id: 18785,
        usdt: 6543.49,
        course: 90.93,
        amount: 595000.0,
        status: true,
        hash: "UMZQE***************",
        market: "Abcex",
        valute: "RUB",
        create: "Авг. 16, 2024, 18:08",
        update: "	Авг. 16, 2024, 18:08",
    },
]);

const eventRefil = ref(false)

const refill = ref({
    id: 19076,
    usdt: 2859.34,
    course: 90.93,
    amount: 260000.0,
    status: true,
    hash: "YE1PR***************",
    market: "Abcex",
    valute: "RUB",
    create: "Авг. 18, 2024, 17:17",
    update: "Авг. 18, 2024, 17:17",
})

function downloadImage() {
    const element = document.querySelector("#capture");
    if (element) {
        domtoimage.toPng(element)
            .then(dataUrl => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'screenshot.png';
                link.click();
            })
            .catch(error => {
                console.error('Error capturing the element:', error);
            });
    } else {
        console.error('Element with id "capture" not found');
    }
}

async function openCheck(item) {
    refill.value = item
    eventRefil.value = !eventRefil.value
}

</script>

<template>
    <main>
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">ID</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">USDT</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Курс</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Сумма</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Статус</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Хэш транзакции</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Маркет</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Способ</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Дата создания</th>
                    <th class="text-[var(--target-txt)] font-[700] text-[16px]">Дата обновления</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr @click="openCheck(item)" :class="{ error: !item.status }"
                    class="cursor-pointer hover:scale-[1.01] balance-replenish-table" v-for="item of refills"
                    :key="item.id">
                    <th>{{ item.id }}</th>
                    <th>{{ item.usdt }}</th>
                    <th>{{ item.course }}</th>
                    <th>{{ item.amount }} руб</th>
                    <th>
                        <div v-if="item.status" class="badge badge-success text-[var(--white-text)]">Успешно</div>
                        <div v-else class="badge badge-error text-[var(--white-text)]">Ошибка</div>
                    </th>
                    <th>{{ item.hash }}</th>
                    <th>{{ item.market }}</th>
                    <th>{{ item.valute }}</th>
                    <th>{{ item.create }}</th>
                    <th>{{ item.update }}</th>
                </tr>

            </tbody>
        </table>
        <div class="h-[600px]">
            <div :class="{ eventRefilActive: eventRefil == true }"
                class="fixed bg-[#00000073] top-0 pointer-events-none opacity-0 left-0 z-[999] w-[100%] h-[100vh] flex items-center justify-center">
                <div id="capture"
                    class="eventRefilActiveWrapper  w-[100%] duration-[.3s] scale-[0.1] max-w-[600px] bg-[white] rounded-[20px] p-[20px]">
                    <h2 class="font-[Montserrat] font-[800] text-[20px] pl-[10px] mb-[10px] border-b-[1px] pb-[10px] ">
                        Чек</h2>
                    <table v-if="eventRefil" class="table">
                        <tr class="zebra-table">
                            <td class="font-[Montserrat] text-[var(--target-txt)] font-[700]">Номер</td>
                            <td class="font-[Montserrat] text-[black] font-[700]">{{ refill.id }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td class="font-[Montserrat] text-[var(--target-txt)] font-[700]">Сумма в USDT
                            </td>
                            <td>{{ refill.usdt }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td class="font-[Montserrat] text-[var(--target-txt)] font-[700]">Курс</td>
                            <td>{{ refill.course }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Валюта</td>
                            <td>{{ refill.valute }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Сумма</td>
                            <td>{{ refill.amount }} руб</td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Подтверждено</td>
                            <td>
                                <input :checked="refill.status" type="checkbox"
                                    class="checkbox checkbox-success pointer-events-none text-[white]"
                                    id="my-checkbox" />
                            </td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Статус</td>
                            <td>
                                <div v-if="refill.status" class="badge badge-success text-[var(--white-text)]">Успешно</div>
                                <div v-else class="badge badge-error text-[var(--white-text)]">Ошибка</div>
                            </td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Хэш транзакции </td>
                            <td>{{ refill.hash }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Дата создания</td>
                            <td>{{ refill.create }}</td>
                        </tr>
                        <tr class="zebra-table">
                            <td>Дата обновления</td>
                            <td>{{ refill.update }}</td>
                        </tr>
                    </table>
                    <div class="flex font-[Montserrat] mt-[20px] gap-[20px]">
                        <button id="download-refil-screenshot" @click="downloadImage()"
                            class="btn flex-1 text-[var(--target-txt)] border-[var(--target-txt)]">Сохранить
                            скриншот</button>
                        <button @click="eventRefil = !eventRefil"
                            class="btn flex-1 bg-[var(--target-bg)] text-[var(--white-text)]">Закрыть</button>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>
<style scoped>
.eventRefilActive {
    opacity: 1;
    pointer-events: all;
}

.eventRefilActive .eventRefilActiveWrapper {
    transform: scale(1);
}

.balance-replenish-table {
    background: #D1E7DD;
}

.balance-replenish-table:nth-child(2n) {
    background: #bcd5ca;
}

.error {
    background: rgb(252, 136, 136);
}
.zebra-table{
    color: var(--target-txt);
    font-family: Montserrat;
    font-weight: 800;
}
.zebra-table:nth-child(2n){
    background-color: #d7d7d7a2;
}
</style>
