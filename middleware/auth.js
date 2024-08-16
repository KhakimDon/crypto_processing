export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useAuth(); // метод для проверки аутентификации
  if (!isAuthenticated && (to.path === "/admin" || to.path === "/user")) {
    return navigateTo("/auth");
  }
});

function useAuth(){
  return true
}