# Historias Interactivas

## Descripción
Crea una aplicación simple donde los usuarios pueden leer diferentes historias interactivas. Cada historia tendrá opciones para que el usuario elija, lo que afectará el desarrollo de la narrativa.

## Funcionalidades

1. **Pantalla de Selección de Historia:**
   - Muestra una historia inicial con opciones para que el usuario elija qué hacer a continuación.

2. **Opciones Interactivas:**
   - Cada opción lleva a un nuevo fragmento de la historia. Por ejemplo, "Ir al bosque" o "Quedarse en casa".

3. **Uso de Zustand:**
   - Utiliza Zustand para manejar el estado actual de la historia y las elecciones del usuario.

4. **Narrativa Dinámica:**
   - Las elecciones del usuario impactan el desarrollo de la historia, creando una experiencia única en cada jugada.

5. **Finales Múltiples:**
   - Cada historia puede tener diferentes finales según las decisiones tomadas por el usuario.

## Estructura del Proyecto

- **src/**
  - **components/**: Componentes para mostrar la historia y las opciones.
  - **stores/**: Store de Zustand para manejar el estado de la historia.

## Ejemplo de Flujo

1. El usuario abre la aplicación y ve la historia inicial con opciones.
2. Al hacer clic en una opción, se actualiza la historia y se presentan nuevas opciones.
3. El usuario continúa eligiendo hasta llegar a un final de la historia.
4. Se puede reiniciar la historia o seleccionar otra para explorar diferentes narrativas.
