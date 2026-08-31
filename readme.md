# 🐉 Examen: Buscador y Comparador de Personajes de Dragon Ball con JavaScript

## 📋 Objetivo del Examen

En este examen práctico deberás desarrollar una **aplicación web interactiva para buscar, filtrar y comparar personajes del universo de Dragon Ball**, conectando una interfaz frontend desarrollada con **HTML, CSS y JavaScript Vanilla** a un **servidor backend local en Node.js/Express**.

La aplicación debe permitir:

1. Consultar el listado de personajes y sus transformaciones desde el servidor backend local (`/api/personajes` o `/api/transformaciones`).
2. Filtrar personajes por nombre (búsqueda en tiempo real) y por raza (Saiyan, Humano, Namekuseijin, Androide, etc.).
3. Renderizar las tarjetas de personajes en el DOM con sus atributos clave (nombre, raza, ki, maxKi, imagen).
4. Permitir seleccionar dos guerreros para comparar sus niveles de ki y declarar al ganador.
5. Persistir el historial de combates/duelos en el navegador mediante `localStorage` y permitir su limpieza interactiva.

---

## 📌 Tabla de Entregas / Issues de GitHub

Cada entrega se corresponde con un **issue automático** en tu repositorio de GitHub. Para cerrar cada issue automáticamente, incluye el commit sugerido exacto al subir tu solución a la rama principal (`main`).

| Entrega | Tarea a Realizar                                                                                                | Commit Sugerido                                                       |
| :------ | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **#1**  | Vincular `css/styles.css` y `js/script.js` en `index.html`.                                                     | `feat(html): vincular css y script js al html`                        |
| **#2**  | Consumir la API local (`/api/personajes`) usando `fetch` y `async/await`.                                       | `feat(js): consumir api de personajes con fetch y async await`        |
| **#3**  | Renderizar dinámicamente las tarjetas de personajes y poblar el filtro de razas en el DOM.                      | `feat(js): renderizar tarjetas de personajes y filtros en el dom`     |
| **#4**  | Implementar filtrado en tiempo real y la arena de combate comparando niveles de Ki.                             | `feat(js): implementar filtrado y arena de combate de ki`             |
| **#5**  | Persistir los duelos en `localStorage`, mostrar el historial y permitir su limpieza con `#btnLimpiarHistorial`. | `feat(js): persistir y gestionar historial de duelos en localstorage` |

---

## 🛠️ Especificación Técnica y Requerimientos

### 1. Servidor Backend Local

El servidor Express provisto corre en el puerto `3000` con CORS habilitado:

- **`GET http://localhost:3000/api/personajes`**: Devuelve la lista de guerreros Z y villanos.
- **`GET http://localhost:3000/api/transformaciones`**: Devuelve las transformaciones disponibles.

Para iniciar el servidor backend:

```bash
npm start
```

### 2. Elementos Clave del DOM

- **`#inputBusqueda`**: Input de texto para filtrar por nombre en tiempo real.
- **`#filtroRaza`**: `<select>` para filtrar por raza (Saiyan, Namekiano, Androide, etc.).
- **`#contenedorPersonajes`**: Contenedor donde se renderizan las tarjetas de personajes (`.card-personaje`).
- **`#luchador1`** y **`#luchador2`**: Selectores para elegir los personajes que competirán.
- **`#btnPelear`**: Botón para ejecutar la batalla y determinar el ganador según el Ki numérico.
- **`#resultadoCombate`**: Contenedor donde se muestra el resultado del combate.
- **`#historialLista`**: Lista `<ul>` donde se registran las batallas guardadas.
- **`#btnLimpiarHistorial`**: Botón para vaciar el historial en `localStorage`.

### 3. Almacenamiento Local (`localStorage`)

- **Clave obligatoria**: `'dragonball_combates'`
- **Estructura**: Arreglo de objetos con `{ luchador1, luchador2, ganador, kiGanador, fecha }`.
- Utilizar `JSON.stringify()` para guardar y `JSON.parse()` para leer.

---

## 🧪 Comandos de Prueba y Autoevaluación

Antes de entregar, podés autoevaluar tu trabajo localmente:

```bash
# Ejecutar todas las pruebas automáticas
npm test

# Ejecutar una prueba individual
npm run test:link
npm run test:fetch
npm run test:render
npm run test:events
npm run test:storage

# Validar estilo y calidad de código
npm run lint
npm run format:check
```

---

## 🚀 Instrucciones para la Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor local:
   ```bash
   npm start
   ```
3. Abrir `index.html` en el navegador (usando la extensión **Live Server** de VS Code).
4. Abrir la consola de herramientas de desarrollador (**F12**) para verificar peticiones de red y depurar posibles errores.
