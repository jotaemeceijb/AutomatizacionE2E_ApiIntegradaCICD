# Proyecto Automatización E2E + API Integrada

## Descripción del proyecto
Este proyecto valida los flujos de la aplicación **SauceDemo** y la API simulada **DummyJSON** mediante pruebas automatizadas:

- **API Tests:** implementados con **Karate**, para validar endpoints de autenticación y listado de usuarios.
- **E2E Tests:** implementados con **Cucumber + Playwright**, para validar login, flujo de compra y cierre de sesión.

El objetivo es garantizar que tanto la API como la interfaz web funcionen correctamente según los escenarios definidos.

---

## Requisitos previos
Para ejecutar este proyecto se requiere:

- Node.js >= 24
- npm
- Java 8 o superior (para ejecutar Karate)
- Git
- Navegador Chromium (Playwright lo instala automáticamente)

---

## Instalación del proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/jaeldiaz/AutomatizacionE2E_ApiIntegradaCICD.git
cd AutomatizacionE2E_ApiIntegradaCICD


---

- Instalar dependencias de Node.js:
npm ci


- Instalar navegadores para Playwright:
npx playwright install --with-deps


- Verificar instalación de Java para Karate:
java -version

Scripts disponibles

- Ejecutar todos los tests (API + E2E):
npm run test:all


- Ejecutar solo tests E2E (Playwright + Cucumber):
npm run test:e2e


- Ejecutar solo tests API (Karate):
npm run test:api



- Estructura del proyecto
src/
  api-tests/          # Pruebas API (Karate)
    login/
    products/
  e2e-tests/          # Pruebas E2E (Cucumber + Playwright)
    features/
    steps/
    support/
tools/
  karate.jar           # Ejecutable de Karate
package.json
.env                  # Variables de entorno (se genera automáticamente)

- Reportes de pruebas

Karate Reports: target/karate-reports
Playwright Reports: playwright-report
Ambos reportes pueden abrirse en cualquier navegador para revisar los resultados y logs de ejecución.

- Herramientas utilizadas

Node.js
npm
Cucumber
Playwright
Karate
Java
Git y GitHub Actions para CI/CD

- Escenarios cubiertos
-API Tests (Karate)
Login exitoso y fallido en la API DummyJSON
Validación de estructura de usuarios
Listado de usuarios y conteo

-E2E Tests (Cucumber + Playwright)
Login exitoso en SauceDemo
Login fallido con usuario bloqueado
Compra exitosa de un producto
Cierre de sesión exitoso




Nota: Para este proyecto se utilizó Karata.jar, se descargó de la web y se agrego en la carpeta Tools.