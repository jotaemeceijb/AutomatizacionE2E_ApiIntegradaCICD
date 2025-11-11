# language: es
Característica: Cierre de sesión exitoso
  Como usuario autenticado en SauceDemo
  Quiero poder cerrar sesión correctamente
  Para asegurar que mi cuenta quede protegida

  Escenario: El usuario cierra sesión exitosamente
    Dado que Jael ha iniciado sesión en SauceDemo
    Cuando hace clic en el menú lateral
    Y selecciona la opción de cerrar sesión
    Entonces debería ser redirigido a la página de inicio de sesión nuevamente
