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
});
