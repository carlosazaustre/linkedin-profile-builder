# LinkedIn Profile Generator

Aplicación web construida con Next.js y TailwindCSS que genera una versión personalizada de la sección "Acerca de" para perfiles de LinkedIn utilizando inteligencia artificial.

## Características

- Interfaz de usuario moderna y responsiva con TailwindCSS
- Validación de formularios con React Hook Form y Zod
- Generación de perfiles profesionales con OpenAI
- Soporte multilingüe (Español e Inglés)
- Personalización del tono de voz (profesional, formal, inspiracional, cercano, creativo)
- Copiado rápido al portapapeles de los perfiles generados

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/) - Framework de React
- [TailwindCSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [React Hook Form](https://react-hook-form.com/) - Manejo de formularios
- [Zod](https://zod.dev/) - Validación de esquemas
- [OpenAI API](https://openai.com/) - Generación de contenido con IA

## Configuración

1. Clona este repositorio
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env.local` con tu clave API de OpenAI:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=tu_clave_de_api_de_openai
   ```
4. Inicia el servidor de desarrollo: `npm run dev`
5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Despliegue

Esta aplicación puede ser fácilmente desplegada en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftu-usuario%2Flinkedin-profile-generator)

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
