<script setup>
import { useAuth } from '~/auth/useAuth';
import { useState } from "#app";

definePageMeta({
  layout: 'auth',
})

const { login, isAuthenticated, role } = useAuth();
const router = useRouter()


const username = ref('')
const password = ref('')
const error = ref(false)
const error_text = ref('')

async function check() {
  if (username.value.length == 0 || password.value.length == 0) {
    check_error('Логин или Пароль Пустой')
  } else {
    await login(username.value, password.value) == false
    if (!isAuthenticated()) {
      check_error("Логин или пароль неверный")
    } else {
      router.push('/' + role.value == 'trader' ? "account" : "admin")
    }
  }
}

function check_error(text) {
  error_text.value = text
  error.value = true
  setTimeout(() => {
    error.value = false
  }, 3000);
}

</script>

<template>
  <div class="h-[100vh] bg-[var(--main-bg)] flex items-center justify-center">

    <div v-if="error" role="alert" class="alert absolute top-[20px] max-w-[500px] right-[20px] alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span>{{ error_text }}</span>
    </div>

    <div class="w-[350px] gap-[35px] flex flex-col items-center min-h-[100px]">
      <div class="flex items-center gap-[20px]">
        <div class="h-[50px] w-[50px] bg-[transparent] border-[5px] border-[var(--target-bg)]"></div>
        <h1 class="font-[Montserrat] font-[700] text-[26px]">Payment System</h1>
      </div>
      <form :class="{ 'error-anim': error }" @submit.prevent="check()"
        class="w-[100%] shadow-xl shadow-[var(--shadows)] p-[20px] flex font-[Montserrat] flex-col items-center bg-[var(--blocks-bg)] rounded-[10px]">
        <h2 class="font-[600] text-[var(--target-txt)] text-[22px]">Авторизация</h2>
        <div class="flex flex-col gap-[3px] w-[100%] mt-[20px]">
          <label :class="{ 'text-[red]': error }" for="username">Имя пользователя:</label>
            <label :class="{ 'border-[red]': error }" class="input  border-[1px] border-[#acacac] input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input id="username" placeholder="Введите логин" v-model="username" type="text" class="grow  font-[500]"  />
          </label>

        </div>
        <div class="flex flex-col gap-[3px] w-[100%] mt-[20px]">
          <label :class="{ 'text-[red]': error }" for="password">Пароль:</label>
          <label :class="{ 'border-[red]': error }"
            class="input input-bordered flex items-center gap-2  border-[1px] border-[#acacac]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input v-model="password" placeholder="Введите пароль" type="password" id="password" class="grow " />
          </label>

        </div>
        <button class="btn bg-[var(--target-bg)] text-[var(--white-text)] w-[100%] mt-[20px] text-[16px]">Вход</button>
      </form>
    </div>
  </div>
</template>


<style>
.error-anim {
  animation: shake 0.5s ease;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  75% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>