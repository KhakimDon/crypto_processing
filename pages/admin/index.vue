<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth' // Подключаем middleware 'auth'
})

const buttons = ref("card")

const arrays = ref({
    card: [
        {
            title: "Details issuance",
            text: "85.53%",
            sub: '65/76'
        },
        {
            title: "Conversion ",
            text: "27.69%",
            sub: '18/65'
        },
        {
            title: "Details aviable",
            text: 7,
            sub: ''
        },
        {
            title: "Teams aviable",
            text: 4,
            sub: ''
        },
        {
            title: "Balance",
            text: "3.920 USDT",
            sub: '0 USDT'
        },
        {
            title: "Limit",
            text: "-500 USDT",
            sub: ''
        },
        {
            title: "Pending count",
            text: "20 pay in",
            sub: '0 pay out'
        },
    ],

    phone: [
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },
        {
            title: "Some info",
            text: "Numbers",
            sub: 'sub text'
        },

    ],

    account: [
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },
        {
            title: "Lorem ipsum",
            text: "Account infos",
            sub: 'info'
        },


    ]
})

const teams = ref([
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 3.539,
        limit: 0,
        details: 2,
        conv: 20.59,
        _conv: "7/34"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 2.456,
        limit: 0,
        details: 4,
        conv: 27.78,
        _conv: "5/18"
    },
    {
        me: "",
        in: 100,
        out: false,
        aviable: true,
        balance: 1.837,
        limit: 0,
        details: 7,
        conv: 32.82,
        _conv: "7/17"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: false,
        balance: 3.467,
        limit: 0,
        details: 6,
        conv: 12.54,
        _conv: "7/25"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 3.539,
        limit: 0,
        details: 2,
        conv: 20.59,
        _conv: "7/34"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 2.456,
        limit: 0,
        details: 4,
        conv: 27.78,
        _conv: "5/18"
    },
    {
        me: "",
        in: 100,
        out: false,
        aviable: true,
        balance: 1.837,
        limit: 0,
        details: 7,
        conv: 32.82,
        _conv: "7/17"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: false,
        balance: 3.467,
        limit: 0,
        details: 6,
        conv: 12.54,
        _conv: "7/25"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 3.539,
        limit: 0,
        details: 2,
        conv: 20.59,
        _conv: "7/34"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: true,
        balance: 2.456,
        limit: 0,
        details: 4,
        conv: 27.78,
        _conv: "5/18"
    },
    {
        me: "",
        in: 100,
        out: false,
        aviable: true,
        balance: 1.837,
        limit: 0,
        details: 7,
        conv: 32.82,
        _conv: "7/17"
    },
    {
        me: "",
        in: 100,
        out: true,
        aviable: false,
        balance: 3.467,
        limit: 0,
        details: 6,
        conv: 12.54,
        _conv: "7/25"
    },
])

</script>

<template>
    <div>
        <h1 class="font-[Montserrat] text-[var(--target-txt)] font-[600] text-[28px]">Traffic</h1>
        <div class="p-[10px] mt-[20px] border-[2px]  rounded-[10px]">
            <div class="flex gap-[10px] font-[Montserrat]">
                <button :class="{ 'activebutton': buttons == 'card' }" @click="buttons = 'card'"
                    class="btn bg-[#c0c0c098] text-white flex-1">Card</button>
                <button :class="{ 'activebutton': buttons == 'phone' }" @click="buttons = 'phone'"
                    class="btn bg-[#c0c0c098] text-white flex-1">Phone</button>
                <button :class="{ 'activebutton': buttons == 'account' }" @click="buttons = 'account'"
                    class="btn bg-[#c0c0c098] text-white flex-1">Account</button>
            </div>
            <div class="flex gap-[1px] bg-[#c0c0c0b3] mt-[15px]">
                <div class="font-[500] cursor-pointer group hover:bg-[var(--target-bg)] duration-[.2s] bg-[white] text-[18px] p-[15px] font-[Montserrat] flex-1"
                    v-for="item of arrays[buttons]" :key="item.id">
                    <p class="text-[var(--target-txt)] group-hover:text-[#ffffffa2]">{{ item.title }}</p>
                    <p class="text-[var(--target-bg)] group-hover:text-[white] mt-[20px] font-[600]">{{ item.text }}</p>
                    <p class="text-[silver] font-[400]">{{ item.sub }}</p>
                </div>
            </div>
        </div>
        <form @submit.prevent class="border-[2px] rounded-[10px] mt-[20px] p-[25px] pb-[30px]">
            <h2 class="font-[Montserrat] text-[var(--target-txt)] font-[600] text-[20px]">Add a Team</h2>
            <div class="mt-[40px] flex gap-[20px] items-center">
                <select
                    class="select w-[350px] text-[17px] font-[Montserrat] select-bordered text-[var(--target-txt)] font-[500]">
                    <option class="text-[22px]" hidden selected>Select team</option>
                    <option class="text-[17px]">Team number 1</option>
                    <option class="text-[17px]">Team number 2</option>
                    <option class="text-[17px]">Team number 3</option>
                    <option class="text-[17px]">Team number 4</option>
                    <option class="text-[17px]">Team number 5</option>
                </select>
                <input value="In"
                    class="input input-bordered text-[red] w-[350px] text-[17px] font-[Montserrat] text-[var(--target-txt)] font-[500]"
                    type="text">
                <label class="flex cursor-pointer gap-2">
                    <span class="label-text font-[Montserrat] font-[600]">Out</span>
                    <input type="checkbox" value="Current" class="toggle checked:bg-[var(--target-bg)] text-[silver]" />
                </label>
                <div class="flex justify-end flex-1">
                    <button
                        class="btn bg-[var(--target-bg)] w-[350px] text-[white] font-[Montserrat] text-[16px] font-[600]">Add
                        Team</button>
                </div>
            </div>
        </form>
        <div class="border-[2px] rounded-[10px] mt-[20px] p-[25px] pb-[30px]">
            <div class="max-w-[600px]">
                <label class="input input-bordered flex items-center gap-2">
                    <input type="text" class="grow font-[Montserrat] text-[17px] text-[var(--target-txt)] font-[500]"
                        placeholder="Поиск" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                        class="h-4 w-4 opacity-70">
                        <path fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </label>
            </div>

            <div class="overflow-x-auto mt-[22px]">
                <table class="table table-zebra">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Me <up-down class="text-[silver]"/></div> </th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">In.% <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Out</div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Aviable <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Balance <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Limit <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Details count <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"><div class="flex gap-[5px] cursor-pointer">Conversion 1H <up-down class="text-[silver]"/></div></th>
                            <th class="text-[17px] font-[Montserrat] text-[var(--target-txt)] max-w-[100px]"></th>
                        </tr>
                    </thead>
                    <tbody class="zebra-table-admin">
                        <tr class="duration-[.2s]" v-for="item of teams" :key="item.id">
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">{{ item.me }}</td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">{{ item.in }}</td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">
                                <input :checked="item.out" type="checkbox"  class="toggle checked:bg-[var(--target-bg)]" />
                            </td>
                            <td class="text-[17px] pl-[40px] font-[Montserrat] text-[var(--target-txt)]">
                                <div style="box-shadow: 0 0 10px #00A96E;" v-if="item.aviable" class="h-[15px] w-[15px] rounded-[50%] bg-success"></div>
                                <div style="box-shadow: 0 0 10px silver;" v-else class="h-[15px] w-[15px] rounded-[50%] bg-[silver]"></div>
                            </td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">{{ item.balance }}</td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">{{ item.limit }}</td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">{{ item.details }}</td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]"> <span>{{ item.conv }}</span> <span>{{ item.me }}</span></td>
                            <td class="text-[17px] font-[Montserrat] text-[var(--target-txt)]">
                                <button class="btn text-error">
                                    <delete-svg/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<style scoped>
.activebutton {
    background: var(--target-bg);
}
.zebra-table-admin tr:hover{
    background: var(--target-bg);
}
.zebra-table-admin tr:hover td {
    color: white;
}
</style>