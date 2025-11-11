# language: es
Característica: Funcionalidad de compra exitosa
  Como usuario del sistema SauceDemo
  Quiero iniciar sesión, agregar un producto al carrito y completar la compra
  Para confirmar que el flujo de compra funciona correctamente

  Escenario: Realizar el flujo hasta la compra de un producto exitosamente
    Dado que Jael está en la página principal de SauceDemo
    Cuando inicia sesión
    Y agrega un producto al carrito
    Y completa el proceso de compra
    Entonces debería visualizar el mensaje de confirmación de compra exitosa
