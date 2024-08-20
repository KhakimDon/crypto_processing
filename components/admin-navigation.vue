<script setup>
import { useAdminStore } from '~/stores/useAdminStore'
const adminStore = useAdminStore()
const router = useRouter()

async function link(item){
    await router.push(item.link)
    adminStore.active_link(router)
}

link(adminStore.links[0])

</script> 

<template>
    <nav :class="{ 'trader-menu-active': adminStore.menu, 'trader-menu-deactivate': !adminStore.menu }"
        class="duration-[.3s] overflow-hidden shadow-xl shadow-[var(--shadows)] bg-[var(--blocks-bg)]">

        <ul class="p-[20px] min-w-[200px]  font-[Montserrat] flex flex-col gap-[15px]">
            <li @click="link(item)" v-for="item of adminStore.links" :key="item.id">
                <button :class="{ 'link-active': item.isActive }"
                    class="btn bg-[#F6F9FF]  text-[var(--target-txt)] border-none hover:text-[var(--white-text)] hover:bg-[var(--target-bg)] w-[100%] flex justify-start">
                    <span v-html="item.svg"></span>
                    {{ item.title }}
                </button>
            </li>
        </ul>

    </nav>
</template>

<style scoped>
.link-active {
    background: var(--target-bg);
    color: white;
}

.trader-menu-active {
    width: 300px;
}

.trader-menu-deactivate {
    width: 0px;
}
</style>