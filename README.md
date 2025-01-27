﻿# Proyecto_Directorio
 

Este es un proyecto web diseñado para ofrecer un directorio de centros de rehabilitación para personas con adicciones. El objetivo es facilitar a los usuarios y sus familias encontrar un centro cercano que se adapte a sus necesidades. Además, permite a los administradores gestionar la base de datos de centros, mientras que los pacientes pueden crear cuentas, gestionar sus datos personales y acceder a información relevante.

## Características

- **Página de inicio pública**: Accesible para cualquier usuario, donde se muestra un directorio de centros de rehabilitación.
- **Sistema de búsqueda**: Los usuarios pueden buscar centros de rehabilitación cercanos o según sus necesidades.
- **Panel de administración**: Los administradores pueden agregar, editar o eliminar centros de rehabilitación.
- **Autenticación de usuarios**: Los pacientes pueden crear cuentas, iniciar sesión y gestionar sus datos personales.
- **Gestión de datos personales**: Los pacientes pueden editar y eliminar su información personal.
- **Historial médico (pendiente)**: Los pacientes podrán gestionar su historial médico y registrar los centros que han visitado en el futuro.

## Tecnologías Utilizadas

- Frontend:
  - HTML
  - CSS
  - React.js (Librería para el desarrollo de la interfaz de usuario)
  
- Backend:
  - Python
  - Django (Framework para desarrollo web en Python)
  - MySQL (Base de datos para almacenar la información de los centros y usuarios)



# Requisitos previos

- Tener Node.js y npm instalados para el frontend.
- Tener Python 3.x y pip instalados para el backend.
- Tener **MySQL** instalado para la base de datos.

# Instrucciones para el Frontend (React):

1. Clona este repositorio a tu máquina local:
    bash
    git clone https://github.com/Naomy25sandi/Proyecto_Directorio.git
  

2. Dirígete a la carpeta del frontend:
    bash
    cd frontend
    

3. Instala las dependencias de Node:
    bash
    npm install
  

4. Inicia el servidor de desarrollo:
    bash
    npm start
    

    El frontend debería estar disponible en http://localhost:3000.



# Página de inicio

- **Acceso público**: Cualquier usuario puede acceder a la página de inicio, donde se muestra un directorio de centros de rehabilitación.
- **Búsqueda y filtrado**: Los usuarios pueden buscar centros cercanos o según sus necesidades específicas.

### Autenticación y gestión de usuarios

- **Registro de pacientes**: Los pacientes pueden crear una cuenta y acceder a su perfil.
- **Gestión de datos personales**: Los pacientes pueden ver y editar su información personal (nombre, dirección, teléfono, etc.).
- **Historial médico** (pendiente): Los pacientes podrán en el futuro subir, editar y eliminar su historial médico y centros que han visitado.

### Panel de administración

- **Gestión de centros de rehabilitación**: Los administradores pueden agregar, editar o eliminar centros desde el panel de administración de Django.
- **Autenticación del administrador**: Los administradores acceden con un superusuario creado previamente.

## Próximos pasos

- Implementar la funcionalidad para que los pacientes puedan gestionar su historial médico y los centros que han visitado.
- Mejorar el sistema de búsqueda con filtros adicionales (por ejemplo, tipo de tratamiento, disponibilidad, etc.).
- Implementar validaciones y seguridad adicional en las operaciones de los usuarios y administradores.

## Contribuciones

Si tienes sugerencias o mejoras para este proyecto, no dudes en hacer un pull request o abrir un issue.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

