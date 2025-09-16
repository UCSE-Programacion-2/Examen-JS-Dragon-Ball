# Examen JS – Dragon Ball Quiz

## Objetivo
Construir un mini-quiz: "¿Quién es este personaje?" que:
- Obtenga un personaje aleatorio por saga desde la API de Dragon Ball.
- Permita ingresar el nombre y valide si es correcto.
- Gestione puntaje (Poder de Pelea) e historial en `localStorage`.
- Muestre pistas (raza, planeta, transformaciones, etc.).

## Endpoints usados
- `GET https://dragonball-api.com/api/characters` – Lista de personajes
- `GET https://dragonball-api.com/api/characters/{id}` – Datos específicos del personaje
- Documentación: [Dragon Ball API](https://dragonball-api.com/)

## Estructura esperada del proyecto
- `index.html`: maquetado, header con puntaje (Poder de Pelea) y selector de saga, acciones (Nuevo Personaje, Pista, Historial), sección de quiz con imagen, input y feedback, modales de pista e historial.
- `css/styles.css`: estilos base, colores Dragon Ball (naranja/azul/amarillo), tipografía "Orbitron", estados de interacción y modales.
- `js/app.js`: implementación completa de la lógica del examen (sin librerías externas).

## Requisitos funcionales (obligatorios)
1. Al cargar la página se debe mostrar un personaje aleatorio correspondiente a la saga seleccionada.
2. El botón "Nuevo Personaje" debe cargar otro personaje aleatorio de la saga actual.
3. Al confirmar una respuesta:
   - Si el nombre coincide exactamente con el oficial de la API (sin mayúsculas/minúsculas), sumar Poder de Pelea.
   - Si no coincide, restar Poder de Pelea sin que baje de cero.
   - Debe mostrarse un mensaje de feedback con el resultado.
4. Pista debe mostrar: raza, planeta de origen, transformaciones conocidas y primera letra del nombre del personaje actual.
5. Historial debe listar los intentos (fecha/hora, saga, nombre real, si fue correcto y el intento ingresado), persistiendo en `localStorage`.
6. El Poder de Pelea debe persistir en `localStorage` y reflejarse en pantalla en todo momento.
7. Debe manejarse el estado de carga (deshabilitar acciones mientras se hace la petición) y errores de red con mensajes claros.

## Requisitos técnicos
- Usar `fetch` para consumir la API de Dragon Ball.
- No utilizar frameworks ni librerías de JS; sólo JavaScript nativo.
- No modificar la estructura básica de `index.html` (puedes agregar atributos necesarios, pero mantén las secciones y elementos claves).
- Mantener estilos coherentes con la estética Dragon Ball provista.

## Almacenamiento local
- Clave sugerida para Poder de Pelea: `db_power_level` (número entero ≥ 0).
- Clave sugerida para historial: `db_battle_history` (arreglo con objetos de intento con fecha, saga, nombre real, acierto y valor ingresado).
- Límite sugerido del historial: 50 elementos (el más reciente primero).

## Selección por saga
- El selector de saga debe filtrar personajes según su saga correspondiente:
  - Dragon Ball: personajes de la saga original
  - Dragon Ball Z: personajes de la saga Z
  - Dragon Ball GT: personajes de la saga GT
  - Dragon Ball Super: personajes de la saga Super
- Debes manejar casos donde no hay personajes disponibles para una saga específica.

## Validaciones y UX
- Validar entrada vacía antes de chequear la respuesta.
- Comparar insensible a mayúsculas/minúsculas.
- Mantener el input enfocado al cargar un nuevo personaje.
- Proveer mensajes de error entendibles ante fallos de red o datos.
- Deshabilitar botones durante las cargas para prevenir acciones repetidas.
- Mostrar feedback visual diferenciado para respuestas correctas e incorrectas.

## Accesibilidad mínima
- Asegurar que los elementos interactivos sean alcanzables por teclado.
- Proveer texto alternativo en la imagen del personaje con su nombre.
- Usar colores con suficiente contraste para el texto.

## Pasos sugeridos de implementación
1. Preparación del estado: Poder de Pelea actual, personaje actual, bandera de carga.
2. Lectura inicial desde `localStorage` y sincronización del puntaje con la UI.
3. Obtención de la lista de personajes desde la API y filtrado por saga.
4. Selección aleatoria de un personaje del filtro aplicado.
5. Solicitud de datos específicos del personaje seleccionado.
6. Renderizado de la imagen y reseteo del input/feedback.
7. Verificación de la respuesta y actualización de Poder de Pelea/historial.
8. Renderizado del historial en el modal correspondiente.
9. Cálculo y presentación de la pista en el modal correspondiente.
10. Manejo de errores y estados de deshabilitado de botones.

## Criterios de evaluación (rúbrica)
- Correctitud funcional del flujo principal (nuevo personaje, responder, Poder de Pelea, pista, historial).
- Uso adecuado de `fetch` y manejo de errores de red.
- Persistencia correcta en `localStorage` y sincronización con la UI.
- Filtrado correcto de personajes por saga.
- Estructura del código: funciones claras, nombres descriptivos y bajo acoplamiento.
- Accesibilidad y UX básica (focus, mensajes, deshabilitado de acciones durante carga).
- Calidad visual consistente con los estilos Dragon Ball del proyecto.

## Pruebas manuales mínimas
- Cambiar de saga y verificar que los personajes coincidan con la saga esperada.
- Forzar varios "Nuevo Personaje" para validar la aleatoriedad.
- Ingresar respuesta correcta e incorrecta y observar cambios en feedback y Poder de Pelea.
- Refrescar la página y confirmar persistencia del Poder de Pelea e historial.
- Abrir los modales de Pista e Historial y verificar su contenido.
- Probar con sagas que puedan tener pocos personajes disponibles.

## Bonificaciones (opcionales)
- Normalizar entradas del usuario (trimming, manejo de espacios, tolerar variaciones de nombres).
- Modo contrarreloj o límite de intentos por personaje.
- Sonidos o animaciones sutiles al acertar o errar.
- Mostrar información adicional del personaje en las pistas (poder de pelea, técnicas especiales).
- Implementar sistema de niveles de dificultad basado en la rareza del personaje.

## Consideraciones especiales
- La API de Dragon Ball puede tener limitaciones de rate limiting, maneja esto apropiadamente.
- Algunos personajes pueden no tener imagen disponible, implementa un fallback.
- Los nombres de personajes pueden tener variaciones (ej: "Goku" vs "Son Goku"), considera esto en la validación.

## Entrega
- Implementa toda la solución en `js/app.js` sin fragmentos de código en este `readme.md`.
- No se aceptan librerías externas de JS.
- Asegúrate de que el proyecto se abra correctamente en un servidor estático y que la API responda.

---
Créditos: Datos provistos por [Dragon Ball API](https://dragonball-api.com/).
