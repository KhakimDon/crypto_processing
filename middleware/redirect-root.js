export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/") {
    return navigateTo("/auth"); // Перенаправление на страницу аутентификации
  }
});
