import { useAuth } from "~/auth/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated()) {
    return navigateTo("/auth"); // Перенаправление на страницу аутентификации, если не аутентифицирован
  }

  if (to.path === "/admin" && role.value !== "admin") {
    return navigateTo("/account"); // Перенаправление на страницу пользователя, если роль не 'admin'
  }

  if (to.path === "/account" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/allcards" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/create-cards" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/balance-cards" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/replenish" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/replenish-usdt" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/replenish-garantex" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }
  
  if (to.path === "/account/replenish-abcex" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/replenish-cash" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/view-devices" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/report" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

  if (to.path === "/account/appeals" && role.value !== "trader") {
    return navigateTo("/admin"); // Перенаправление на страницу админа, если роль не 'trader'
  }

});
