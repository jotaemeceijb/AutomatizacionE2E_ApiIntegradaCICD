# language: es
Característica: Inicio de sesión fallido en SauceDemo
  Como usuario del sistema SauceDemo
  Quiero intentar iniciar sesión con credenciales incorrectas
  Para verificar que el sistema muestre un mensaje de error apropiado

  Escenario: Intento de inicio de sesión con credenciales inválidas
    Dado que Jael está en la página de inicio de sesión de SauceDemo
    Cuando intenta iniciar sesión con credenciales inválidas
    Entonces debería visualizar un mensaje de error indicando que las credenciales son incorrectas
