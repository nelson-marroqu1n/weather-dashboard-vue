# 🌤️ Weather Dashboard

Aplicación web para consultar el clima actual de cualquier ciudad del mundo, desarrollada con **Vue 3** y **Vite**. Permite buscar una ciudad y obtener información meteorológica en tiempo real utilizando las APIs gratuitas de **Open-Meteo**, sin necesidad de una API key.

---

## 📋 Descripción

**Weather Dashboard** es una aplicación de clima que consume dos servicios de **Open-Meteo**:

- Un servicio de **geocodificación**, para encontrar las coordenadas de la ciudad buscada.
- Un servicio de **clima**, para obtener las condiciones meteorológicas actuales a partir de esas coordenadas.

> La interfaz completa está en **español** y **no requiere** configuración de credenciales ni claves de API para funcionar.

---

## ✨ Funciones

- 🔍 **Búsqueda de ciudades** y consulta de su clima actual.
- 📊 **Visualización de datos climáticos:**
  - Nombre de la ciudad y país.
  - Temperatura actual.
  - Descripción de las condiciones climáticas.
  - Humedad.
  - Velocidad del viento.
  - Fecha y hora locales.
- 🕘 **Historial de búsquedas:**
  - Volver a consultar ciudades buscadas anteriormente.
  - Eliminar ciudades del historial.
- 🌐 **Interfaz completamente en español.**

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| **Vue 3** | Framework principal |
| **Vite** | Entorno de desarrollo y build |
| **JavaScript** | Lenguaje del proyecto |
| **Pinia** | Manejo de estado |
| **Vue Router** | Enrutamiento |
| **Bootstrap** | Estilos e interfaz |
| **Axios** | Peticiones HTTP |
| **[Open-Meteo API](https://open-meteo.com/)** | Geocodificación y datos del clima |

---

## 🚀 Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/weather-dashboard.git
cd weather-dashboard
```

**2. Instalar las dependencias**

```bash
npm install
```

**3. Ejecutar el proyecto en modo desarrollo**

```bash
npm run dev
```

**4. Abrir la aplicación**

Ir a la dirección que indique la terminal (por defecto `http://localhost:5173`).

---

## 📸 Captura de pantalla

<!-- Agregar aquí una captura de pantalla de la aplicación -->

<img width="937" height="720" alt="screenshots-demo" src="https://github.com/user-attachments/assets/50eb581b-398e-44f5-b6cd-7cc648a54232" />


---

## 🔗 Demo

<!-- Agregar aquí el enlace a la demo publicada, si corresponde -->

**[Ver demo en vivo](https://weather-dashboard-vue-seven.vercel.app)**
