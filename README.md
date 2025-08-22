# E-commerce Products Dashboard (Angular 16+)

Este proyecto corresponde a una **prueba técnica frontend** desarrollada con **Angular 16+, TypeScript y SCSS**.  
Permite listar, agregar y eliminar productos consumiendo una API REST simulada con **json-server**.

---

## 🚀 Tecnologías usadas
- Angular 16+
- TypeScript
- RxJS (Observables)
- SCSS (responsive design con Grid y Flexbox)
- NgBootstrap (modal)
- json-server (API fake)

---

## 📂 Estructura principal

```text
src/
 └── app/
     ├── app.component.ts
     ├── app.component.html
     ├── app.component.scss
     ├── app-routing.module.ts
     ├── app.module.ts
     ├── components/
     │   └── product-dashboard/
     │       ├── product-dashboard.component.ts
     │       ├── product-dashboard.component.html
     │       └── product-dashboard.component.scss
     ├── models/
     │   └── product.model.ts
     └── services/
         └── product.service.ts
db.json
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio o descargar el zip:
   ```bash
   git clone https://github.com/bberland/angular-ecommerce.git
   cd ecommerce-products
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar json-server (API fake):
   ```bash
   npx json-server --watch db.json --port 3000
   ```
   Endpoint disponible en:
   - `http://localhost:3000/products`

4. Levantar la aplicación Angular:
   ```bash
   ng serve -o
   ```
   La app abrirá en `http://localhost:4200` y redirigirá automáticamente a `/products`.

---

## ✅ Funcionalidades

- **Listado de productos** en tabla responsiva.  
- **Agregar producto** mediante formulario modal con validaciones:  
  - Nombre obligatorio  
  - Precio mayor a 0  
  - Stock >= 0  
- **Eliminar producto** con actualización en tiempo real.  
- **Flujo reactivo** usando RxJS `BehaviorSubject` para mantener el estado.  
- **Diseño responsivo** con CSS Grid y Flexbox.  

---

## 📸 Vista previa (ejemplo)

- **Desktop** → Tabla con cabeceras.  
- **Móvil** → Cada producto se adapta a tarjetas verticales con etiquetas.  

---

## 🧑‍💻 Autor

Prueba técnica desarrollada por:  
**Bryan Berland**
