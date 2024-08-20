<script setup>
definePageMeta({
  layout: 'account',
  middleware: 'auth' // Подключаем middleware 'auth'
})
</script>

<template>
  <div>
    <div class="flex gap-[20px] font-[Montserrat]">

      <div class="h-[150px] p-[20px] bg-[var(--blocks-bg)] shadow-lg shadow-[var(--shadows)] rounded-[5px] flex-1">
        <div>
          <span class="text-[var(--target-txt)] font-[600]">Заявок</span> |
          <span class="text-[var(--target-txt)] font-[400] opacity-[50%]">Сегодня</span>
        </div>

        <div class="mt-[15px]">
          <div class="flex gap-[20px]">
            <div class="rounded-[50%] h-[60px] flex items-center justify-center w-[60px] bg-[#F6F6FE]">
              <svg fill="#4154F1" width="40px" height="40px" viewBox="0 -64 640 640">
                    <path
                        d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg>
            </div>
            <div>
              <span class="text-[22px] font-[700] text-[var(--target-txt)]">740</span>
              <p class="text-[14px]">Профит: <span class="text-[#198964] font-[700]">60%</span></p>
            </div>
          </div>
        </div>

      </div>

      <div class="h-[150px] p-[20px] bg-[var(--blocks-bg)] shadow-lg shadow-[var(--shadows)] rounded-[5px] flex-1">
        <div>
          <span class="text-[var(--target-txt)] font-[600]">Баланс </span> |
          <span class="text-[var(--target-txt)] font-[400] opacity-[50%]">Активный</span>
        </div>
        <div class="mt-[15px]">
          <div class="flex gap-[20px]">
            <div class="rounded-[50%] h-[60px] flex items-center justify-center w-[60px] bg-[#E0F8E9]">
              <svg  fill="#2ECA6A" width="40px" height="40px" viewBox="0 0 256 256"
                    id="Flat">
                    <path
                        d="M148,156a64,64,0,0,0,0-128H88A12.0006,12.0006,0,0,0,76,40v92H56a12,12,0,0,0,0,24H76v16H56a12,12,0,0,0,0,24H76v20a12,12,0,0,0,24,0V196h44a12,12,0,0,0,0-24H100V156ZM100,52h48a40,40,0,0,1,0,80H100Z" />
                </svg>
            </div>
            <div>
              <span class="text-[22px] font-[700] text-[var(--target-txt)]">41838.08₽</span>
              <p class="text-[14px]">Профит: <span class="text-[#198964] font-[700]">42%</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[150px] p-[20px] bg-[var(--blocks-bg)] shadow-lg shadow-[var(--shadows)] rounded-[5px] flex-1">
        <div>
          <span class="text-[var(--target-txt)] font-[600]">Заявок </span> |
          <span class="text-[var(--target-txt)] font-[400] opacity-[50%]">Сегодня</span>
        </div>
        <div class="mt-[15px]">
          <div class="flex gap-[20px]">
            <div class="rounded-[50%] h-[60px] flex items-center justify-center w-[60px] bg-[#FFECDF]">
              <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none">
                <path d="M7 16L9 16C11.2091 16 13 14.2091 13 12L13 7" stroke="#FF771D" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 10L13 7L10 10" stroke="#FF771D" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <span class="text-[22px] font-[700] text-[var(--target-txt)]">1052446.93₽</span>
              <p class="text-[14px]">Профит: <span class="text-[#198964] font-[700]">49.96%</span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="dashboard p-[20px] h-[400px] w-[100%] shadow-lg shadow-[var(--shadows)] mt-[20px] bg-[var(--blocks-bg)]">
      дашборд
    </div>
  </div>
</template>