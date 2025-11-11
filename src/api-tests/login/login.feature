Feature: Validación de autenticación en la API de DummyJSON

Background:
    * url 'https://dummyjson.com'

@login-exitoso
Scenario: Login exitoso con credenciales válidas
    Given path '/auth/login'
    And request { username: 'emilys', password: 'emilyspass' }
    When method POST
    Then status 200
    And match response.firstName == 'Emily'
    And match response.email == 'emily.johnson@x.dummyjson.com'
    And print 'Usuario autenticado:', response.firstName, response.email

@login-fallido
Scenario: Login fallido con credenciales inválidas
    Given path '/auth/login'
    And request { username: 'usuario_invalido', password: 'clave_erronea' }
    When method post
    Then status 400
    And match response.message contains 'Invalid credentials'
    * print 'Mensaje recibido:', response.message
