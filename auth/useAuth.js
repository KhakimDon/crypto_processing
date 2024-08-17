import { useState, useCookie } from "#app";

export function useAuth() {
  const myCookie = useCookie("my-cookie-name");

  // Используем useState для хранения состояния аутентификации и роли
  const role = useState("role", () => {
    if(myCookie == null){
      return null
    }else{
      return myCookie.value
    }
  });

  function login(login, password) {
    if (password === "trader1234" && login === "trader1") {
      role.value = "trader";
      myCookie.value = "trader"
      return true;
    } else if (password === "admin1234" && login === "admin1") {
      role.value = "admin";
      myCookie.value = "admin"
      return true;
    } else {
      role.value = null;
      myCookie.value = null
      return false;
    }
  }

  // Функция для выхода
  function logout() {
    role.value = null;
  }

  // Функция для проверки роли
  function isAuthenticated() {
    return role.value !== null;
  }

  // Возвращаем методы и текущее состояние роли
  return {
    role,
    login,
    logout,
    isAuthenticated,
  };
}
