<script setup>
definePageMeta({
    name: "View devices",
    layout: 'account',
    middleware: 'auth',
    path: "/account/view-devices"
})

const devices = ref([
    {
        id: 9041,
        androidId: "a468e18bd15a02ef",
        battary: 88,
        number: "79175739344",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9029,
        androidId: "6a536eb7f54c7a99",
        battary: 55,
        number: "79175736018",
        type: "sms",
        active_date: "	Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9025,
        androidId: "2744ada8fa62a2b5",
        battary: 36,
        number: "79175789437",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:22",
        isActive: false,
    },
    {
        id: 9041,
        androidId: "a468e18bd15a02ef",
        battary: 88,
        number: "79175739344",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9029,
        androidId: "6a536eb7f54c7a99",
        battary: 76,
        number: "79175736018",
        type: "sms",
        active_date: "	Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9025,
        androidId: "2744ada8fa62a2b5",
        battary: 57,
        number: "79175789437",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:22",
        isActive: false,
    },
    {
        id: 9041,
        androidId: "a468e18bd15a02ef",
        battary: 88,
        number: "79175739344",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9029,
        androidId: "6a536eb7f54c7a99",
        battary: 100,
        number: "79175736018",
        type: "sms",
        active_date: "	Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9025,
        androidId: "2744ada8fa62a2b5",
        battary: 36,
        number: "79175789437",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:22",
        isActive: false,
    },
    {
        id: 9041,
        androidId: "a468e18bd15a02ef",
        battary: 88,
        number: "79175739344",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9029,
        androidId: "6a536eb7f54c7a99",
        battary: 100,
        number: "79175736018",
        type: "sms",
        active_date: "	Авг. 19, 2024, 22:21",
        isActive: true,
    },
    {
        id: 9025,
        androidId: "2744ada8fa62a2b5",
        battary: 36,
        number: "79175789437",
        type: "sms",
        active_date: "Авг. 19, 2024, 22:22",
        isActive: false,
    },
])

</script>

<template>
    <main>
        <div class="flex max-w-[1200px] mx-auto gap-[10px]">
            <input type="text" placeholder="Поиск"
                class="input input-bordered flex-1 font-[600] text-[var(--target-txt)] text-[15px]" />
            <button class="btn btn-outline btn-success w-[150px]">Найти <search-svg/> </button>
        </div>
        <div class="max-w-[1200px] mx-auto mt-[16px] overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">ID <adndroid-icon /> </div>
                        </th>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">Андроид ID <android-id /></div>
                        </th>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">Батарея <full-battery /></div>
                        </th>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">Номер <sim-card /></div>
                        </th>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">Тип <message-svg /></div>
                        </th>
                        <th class="font-[Montserrat] font-[600] text-[16px] text-[var(--target-txt)]">
                            <div class="flex items-center gap-[5px]">Активность <date-svg /></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="item of devices" :key="item.id" class="group table-devices duration-[.3s]">
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">{{ item.id }}</td>
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">{{ item.androidId }}
                        </td>
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">
                            <div :class="{'text-success': item.battary > 60,'text-warning': item.battary >= 45 && item.battary < 60, 'text-error': item.battary < 45}" class="flex gap-[5px]">
                                {{ item.battary }}
                                <full-battery class="text-success" v-if="item.battary > 60" />
                                <middle-battery class="text-warning" v-else-if="item.battary >= 45 && item.battary < 60" />
                                <lowbattery v-else class="text-error" />
                            </div>
                        </td>
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">+{{ item.number }} </td>
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">{{ item.type }}</td>
                        <td class="font-[Montserrat] group-hover:text-[--white-text] font-[600]">{{ item.active_date }}
                        </td>
                        <td>
                            <button v-if="item.isActive"
                                class="btn font-[Montserrat] btn-error text-[--white-text] max-w-[200px] w-[100%]"> <power-svg/> Деактивировать</button>
                            <button v-else
                                class="btn btn-success font-[Montserrat] text-[--white-text] max-w-[200px] w-[100%]"> <power-svg/>  Активировать</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<style scoped>
.table-devices:hover {
    background: var(--target-bg);
}
</style>