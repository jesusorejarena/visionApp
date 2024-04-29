# Getting Started

## Descripción del Proyecto

Este proyecto ha sido desarrollado utilizando **React Native** con la base de **react-native-vision-camera**. Se ha integrado el paquete **@react-native-camera-roll/camera-roll** para el almacenamiento y la lectura de imágenes. Para una gestión eficiente de la galería de imágenes, se ha incorporado el paquete **react-native-awesome-gallery**.

En cuanto a los estilos, se ha utilizado **nativewind**, una herramienta que facilita la implementación de **Tailwind CSS** en aplicaciones React Native. Los iconos y las animaciones se han diseñado con **lottie-react-native**, **react-native-svg**, y **react-native-vector-icons**.

El proyecto también aprovecha diversas librerías para el manejo de gestos y animaciones, como **react-native-reanimated** y **react-native-gesture-handler**. Para la navegación entre pantallas, se ha empleado **@react-navigation**.

## Instalación del proyecto

Antes de ejecutar el proyecto es necesario ejecutar este comando:

Ejecutar con procesadores Apple Silicon

```bash
npm run install-all
```

Ejecutar con procesadores Intel (Experimental) ya que no poseo dicho procesador

```bash
npm run install-all-intel
```

Este comando está configurado para realizar una serie de acciones internas:

1. `npm i`: Instala los paquetes necesarios.
2. `npm run pods-intel`: Instala los Pods necesarios para el proyecto (solo para iOS) Ejecutar con procesadores **Intel**.
3. `npm run m-clean`: Limpia el caché del proyecto.

## Ejecución del Proyecto

Para ejecutar el proyecto, se proporciona la opción de utilizar el comando.

```bash
npm run ios
```

## Características y Funcionalidades

- **Splashscreen:** El proyecto cuenta con un splashscreen que muestra la versión, nombre y una animación de carga.
- **Permisos:** Verifica y solicita permisos de la cámara al iniciar. En caso de rechazo, redirecciona a la pantalla de permisos en la configuración del teléfono (si no se aceptan los permisos **permanecera en esta pantall** o de lo contrario pasara a la **pantalla camara**).
- **Cámara:**
  - Posibilidad de tomar fotos y videos.
  - Zoom y gran angular.
  - Cámara frontal y trasera.
  - Preview de imágenes anteriores.
  - Posibilidad de grabar videos con cambio de cámara.
  - Configuraciones en fotos y videos para resolución, HDR, FPS y activación de micrófono/flash.
- **Galería:**
  - Menú de navegación para regresar a la pantalla de cámara.
  - Vista previa de hasta 200 imágenes.
- **Visualización de la Imagen:**
  - Zoom con doble toque.
  - Deslizar miniaturas con el carrusel.
  - Selección de miniatura para cambiar la imagen principal.
  - Cambio de imagen deslizando la imagen principal.
  - Ocultar mini carrusel y cantidad de imágenes con un toque.
  - Salir con gesto de swipe hacia abajo o pellizco.

## Limitaciones y Fallas

Es importante tener en cuenta que este proyecto no es compatible con dispositivos Android debido a problemas de compatibilidad con la librería **react-native-vision-camera**. Esta versión de la libreria a ser relativamente nueva, ha presentado dificultades para compilar en entornos Android.

También, la implementación de una mejor interfaz de visualización de videos quedó pendiente debido a restricciones de tiempo.

# Contacto

Este README proporciona una descripción detallada del proyecto, así como instrucciones claras para su ejecución. Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en contactarme.

- [LinkedIn](https://www.linkedin.com/in/jesusorejarena/)
- [Upwork](https://www.upwork.com/freelancers/~0186f09c7907b56b50)
- [Portfolio](https://www.jesusorejarena.dev/)
- [GitHub](https://github.com/jesusorejarena)
