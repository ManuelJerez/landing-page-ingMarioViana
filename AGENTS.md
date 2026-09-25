# AGENTS.md — Landing Page Ingeniero Civil (SPA)

## Contexto
SPA en Angular 19 para captación de clientes en ingeniería civil (cálculo estructural y supervisión de obras).

## Technical Stack
- **Framework:** Angular 19 (Standalone Components ONLY).
- **Language:** TypeScript (Strict Mode).
- **Control Flow:** Modern syntax (`@if`, `@for`, `@switch`).
- **State Management:** Angular Signals (`signal()`, `computed()`).
- **Styling:** Tailwind CSS (Mobile-First, sin librerías UI externas).

## Estructura de Archivos
- `src/app/components/`: Componentes UI reutilizables (Header, Hero, Services, Portfolio, Contact, Footer).
- `src/app/pages/`: Vista principal (Landing Page).
- `src/assets/` & `public/`: Assets estáticos e íconos.

## Reglas Estrictas (MUST NOT)
- ❌ **NO** utilizar `NgModule` ni componentes con `declarations`.
- ❌ **NO** usar directivas estructurales antiguas (`*ngIf`, `*ngFor`).
- ❌ **NO** instalar paquetes adicionales de UI/CSS salvo autorización implícita.
- ❌ **NO** inventar datos o configuraciones si existe duda >20%; preguntar primero.

## Reglas de Ejecución (MUST)
- Mantener diseño totalmente **Mobile-First**.
- Usar imágenes reales/provisionales de Unsplash con URLs directas.
- Proponer plan breve previo para tareas complejas.
- Ejecutar **1 tarea a la vez** y reportar archivos modificados.

## Comandos Útiles
- Dev: `npx ng serve`
- Build: `npx ng build`