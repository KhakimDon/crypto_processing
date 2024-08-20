<script setup>
const router = useRouter()

import { useAdminStore } from '~/stores/useAdminStore'
const adminStore = useAdminStore()


</script>

<template>
    <header
        class="h-[70px] shadow-md shadow-[var(--shadows)] justify-between sticky top-0 font-[Montserrat] bg-[var(--blocks-bg)] w-[100%] px-[20px] flex items-center">
        <div class="flex gap-[10px] items-center">
            <div class="h-[30px] w-[30px] bg-[transparent] border-[5px] border-[var(--target-bg)]"></div>
            <h2 class="text-[var(--target-txt)] text-[20px] font-[700]">Payment System</h2>
            <menu-icon @click="adminStore.menu = !adminStore.menu" class="ml-[30px]" />
        </div>
        <div class="flex gap-[30px] items-center">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn m-1 text-[var(--target-txt)]">
                    <profile-icon />
                    admin name
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <a>
                            <label class="flex cursor-pointer gap-2">
                                <span class="label-text">День</span>
                                <input type="checkbox" value="synthwave" class="toggle theme-controller" />
                                <span class="label-text">Ночь</span>
                            </label>
                        </a>
                    </li>
                    <li @click="router.push('/')"><a class="text-[16px] font-[500] text-[red]">Выйти <close-icon /></a></li>
                </ul>
            </div>
        </div>
    </header>
</template>