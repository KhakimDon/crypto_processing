<script setup>
definePageMeta({
    name: "appeals",
    layout: 'account',
    middleware: 'auth',
    path: "/account/appeals"
})

const appeals = ref([
    {
        id: "30086",
        numberOfOrder: 6862192,
        amount: 300.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/61763f3e-f0ce-4b1e-8b3a-043357a01270.pdf",
        status: "new",
        card: "2200152904411207", 
        timeOfSubmission: "Авг. 19, 2024, 23:17",
        fullname: "Бахтовари Салимзода",
        trader: "mendeleev"
    },
    {
        id: "29957",
        numberOfOrder: 6771833,
        amount: 501.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/2a5c10a7-f7a0-4022-ad27-bb963b67098e",
        status: "new",
        card: "2200152967191902", 
        timeOfSubmission: "Авг. 19, 2024, 15:06",
        fullname: "Нурбек Куванычбек уулу",
        trader: "mendeleev"
    },
    {
        id: "30086",
        numberOfOrder: 6862192,
        amount: 300.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/61763f3e-f0ce-4b1e-8b3a-043357a01270.pdf",
        status: "new",
        card: "2200152904411207", 
        timeOfSubmission: "Авг. 19, 2024, 23:17",
        fullname: "Бахтовари Салимзода",
        trader: "mendeleev"
    },
    {
        id: "29957",
        numberOfOrder: 6771833,
        amount: 501.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/2a5c10a7-f7a0-4022-ad27-bb963b67098e",
        status: "new",
        card: "2200152967191902", 
        timeOfSubmission: "Авг. 19, 2024, 15:06",
        fullname: "Нурбек Куванычбек уулу",
        trader: "mendeleev"
    },
    {
        id: "30086",
        numberOfOrder: 6862192,
        amount: 300.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/61763f3e-f0ce-4b1e-8b3a-043357a01270.pdf",
        status: "new",
        card: "2200152904411207", 
        timeOfSubmission: "Авг. 19, 2024, 23:17",
        fullname: "Бахтовари Салимзода",
        trader: "mendeleev"
    },
    {
        id: "29957",
        numberOfOrder: 6771833,
        amount: 501.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/2a5c10a7-f7a0-4022-ad27-bb963b67098e",
        status: "new",
        card: "2200152967191902", 
        timeOfSubmission: "Авг. 19, 2024, 15:06",
        fullname: "Нурбек Куванычбек уулу",
        trader: "mendeleev"
    },
    {
        id: "30086",
        numberOfOrder: 6862192,
        amount: 300.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/61763f3e-f0ce-4b1e-8b3a-043357a01270.pdf",
        status: "new",
        card: "2200152904411207", 
        timeOfSubmission: "Авг. 19, 2024, 23:17",
        fullname: "Бахтовари Салимзода",
        trader: "mendeleev"
    },
    {
        id: "29957",
        numberOfOrder: 6771833,
        amount: 501.00,
        check: "https://rf-static.ams3.digitaloceanspaces.com/production/ams3/2024-08-19/appeals/receipts/2a5c10a7-f7a0-4022-ad27-bb963b67098e",
        status: "new",
        card: "2200152967191902", 
        timeOfSubmission: "Авг. 19, 2024, 15:06",
        fullname: "Нурбек Куванычбек уулу",
        trader: "mendeleev"
    },
])

</script>

<template>
    <main>
        <div class=" mx-auto">
            <h2 class="font-[Montserrat] text-[27px] font-[600] text-[var(--target-txt)]">Обращения </h2>
            <div class="overflow-x-auto mt-[16px]">
                <table class="table table-zebra sumbission-table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">ID</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Номер платежа	</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Сумма</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Чек</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Статус</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Карта</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Время подачи</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">ФИО</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]">Трейдер</th>
                            <th class="font-[Montserrat] text-[var(--target-txt)] text-[16px]"></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="item of appeals" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.numberOfOrder}}</td>
                            <td>{{item.amount}}</td>
                            <td><a class="text-[var(--target-bg)] underline" :href="item.check">Чек</a></td>
                            <td>
                                <div class="badge text-white bg-[var(--target-bg)]">
                                    {{ item.status }}
                                </div>
                            </td>
                            <td>{{item.card}}</td>
                            <td>{{item.timeOfSubmission}}</td>
                            <td>{{item.fullname}}</td>
                            <td>{{item.trader}}</td>
                            <td>
                                <button class="btn bg-[var(--target-bg)] text-[var(--white-text)]">Привязать</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<style scoped>
.sumbission-table tbody{
    color: black;
    font-size: 16px;
    font-weight: 500;
    font-family: Montserrat;
}
.sumbission-table tbody tr:hover{
    background: rgba(0, 0, 0, 0.19);
}
</style>