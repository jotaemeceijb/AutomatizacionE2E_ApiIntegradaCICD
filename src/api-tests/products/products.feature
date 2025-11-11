Feature: Validación del endpoint de usuarios en DummyJSON

Background:
    * url 'https://dummyjson.com'

  @usuarios
 Scenario: Obtener listado de usuarios
    Given path '/users'
    When method GET
    Then status 200
    * def count = response.users.length
    * assert count > 0
    And print 'Cantidad de usuarios encontrados:', count

  @estructura
  Scenario: Validar estructura del primer usuario
    Given path 'users/1'
    When method get
    Then status 200
    And match response contains { id: 1, firstName: '#string', email: '#string' }
    * print 'Primer usuario:', response.firstName + ' (' + response.email + ')'
