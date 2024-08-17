<script setup>
const router = useRouter()

import { useTraderStore } from '~/stores/useTraderStore'
const traderStore = useTraderStore()
</script>

<template>
    <nav :class="{ 'trader-menu-active': traderStore.menu, 'trader-menu-deactivate': !traderStore.menu }"
        class="duration-[.3s] overflow-hidden shadow-xl shadow-[var(--shadows)] bg-[var(--blocks-bg)]">

        <ul class="p-[20px] min-w-[200px] font-[Montserrat] flex flex-col gap-[15px]">
            <li @click="item.isList == false ? router.push('/account'): false" v-for="item of traderStore.links" :key="item.id">
                <button :class="{'active-trader-nav-button': item.isActive && item.isList}" @click="item.isActive = !item.isActive"
                    class="btn bg-[#F6F9FF] text-[var(--target-txt)] border-none hover:text-[var(--white-text)] hover:bg-[var(--target-bg)] w-[100%] flex justify-start">
                    <span v-html="item.svg"></span>
                    {{ item.title }}
                </button>
                <ul :style="`height: ${item.list.length * 40}px;`" :class="{ 'navbar-list-active': !item.isActive}"
                    class="overflow-hidden translate-y-[10px] flex flex-col gap-[2px] items-start pl-[10px] duration-[.3s] h-[0px] w-[100%]"
                    v-if="item.isList">

                    <li @click="router.push(link.link)" class="flex cursor-pointer group font-[500] text-[var(--target-bg)] mb-[15px] items-start text-[14px] gap-[5px]" v-for="link of item.list" :key="link.id">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        <span class="duration-[.3s] group-hover:translate-x-[10px]">{{ link.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>

    </nav>
</template>

<style>
.active-trader-nav-button{
    background: var(--target-bg);
    color: var(--white-text);
}
.navbar-list-active {
    height: 0px !important;
}

.trader-menu-active {
    width: 300px;
}

.trader-menu-deactivate {
    width: 0px;
}
</style>