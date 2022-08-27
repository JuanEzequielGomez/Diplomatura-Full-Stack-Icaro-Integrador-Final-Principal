## Descripción

## Desarrollo FrontEnd

Se creó un sitio web que permite el envío de memorandos internos de corta longitud (144 caracteres) de una compañía ficticia.
La idea es poder enviar un mensaje oficial a un destinatario que sea parte de la compañía.

Desde las páginas web se dan las siguientes opciones:

Registrarse en la aplicación con un nombre de usuario y una contraseña. Cada usuario debe seleccionar la ciudad y el país donde reside.  
Acceder a la aplicación mediante un nombre de usuario y una contraseña.
Ver la lista de mensajes recibidos. Los mensajes se visualizarán en la misma pantalla de listado.
Ver la lista de mensajes enviados.
Enviar un mensaje a un destinatario
Eliminar un mensaje.

Se cuenta con una API de ejemplo, que responde datos previamente cargados, con el fin de interactuar con una API remota.

Se realiza la implementación de esta API en el módulo de Desarrollo BackEnd, implementando la base de datos.

El proyecto fue creado para la Diplomatura Full Stack de Ícaro, en asociación con la Universidad Nacional de Córdoba.

## Base de Datos

Se creó una estructura de Base de Datos que de soporte al problema planteado en el Trabajo Práctico Integrador.

Por lo que se incluyen las siguientes estructuras:

Estructura de tablas
Implementación de integridad de datos
Procedimientos Almacenados para envío de mensajes y login de usuarios
Consultas SQL para la obtención de mensajes recibidos por cada usuario, especificando usuario remitente y usuario receptor.
Consultas SQL para la obtención de mensajes enviados por cada usuario, especificando usuario remitente y usuario receptor.
Consultas SQL para la obtención de las siguiente estadisticas :

Cantidad de usuarios por país.
Cantidad de mensajes por usuario.
Cantidad de mensajes leídos por usuario
Cantidad de mensajes por fecha.

## Proyecto Backend

Se creó una estructura de servicios que sirva como fuente de datos para el desarrollo realizado e integrando con la base de datos desarrollada.

A tal fin se desarrolló un servicio web que implementa los siguientes endpoints:

POST /login -> Permite el login de usuarios, este devuelve un header que identifica al usuario y la sesión.
GET /api/users -> Obtención de todos los usuarios registrados de la plataforma.
POST /api/users -> Permite la registración de usuarios.
GET /api/users/<username>/messages/inbox -> Mensajes recibidos por X usuario.
GET /api/users/<username>/messages/sent -> Mensajes enviados por X usuario.
POST /api/users/<username>/messages -> Enviar un mensaje a N destinatarios.

## Estructura de archivos

- Api
- src

## Variables de entorno

- PUERTO (PORT)

## Instrumentos

- HTML
- CSS
- JavaScript
- Typercript
- Nodejs
- mysql

Y, ante todo, ¡Muchas gracias!
