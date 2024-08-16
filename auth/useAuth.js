import { useState } from "#app";

export function useAuth() {
  // Используем useState для хранения состояния аутентификации и роли
  const role = useState("role", () => 'trader'); // Роль пользователя (null, 'trader', 'admin')

  // Функция для аутентификации пользователя
  function login(password) {
    if (password === "trader-password") {
      role.value = "trader";
      return true;
    } else if (password === "admin-password") {
      role.value = "admin";
      return true;
    } else {
      role.value = null;
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
