# AvantioApp - Dailytrends

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Se ha creado este repositorio para la prueba técnica en la empresa Avantio.

  # Importante:
  `Los feeds de los diarios se actualizan cada vez que se lanza el servidor. Y cada cierto tiempo`

Hay 2 unicas carpetas en este proyecto:

### Front
Esta carpeta tiene el código de la aplicación Web hecha con la última versión de Angular, concretamente la 6.0.3.
Para hacer uso de ella, tendremos que ir a la url http://127.0.0.1:4200/

### Back
En esta carpeta está el código del servidor.
El servidor está hecho con NodeJS, Express, que conecta a una coleccion en MongoDB.
El servidor es un REST API. Para utilizarlo en local, tendremos que llamar a la siguiente URL http://127.0.0.1:27017/api/%endpoint%

# Para empezar
Para cada carpeta se ha creado un archivo Readme en el que se explica como hacer la instalacion y hacerlo servir
Obviamente, en primer lugar hay que tener NodeJs, MongoDB, Angular6
Despues de tener todas las herramientas, tenemos que bajarnos el repositorio:

```sh
$ git clone git@github.com:chef88val/avantioPrueba.git
```
 # Front
  Las instrucciones en el terminal seran las siguientes.
 ```sh
$ cd avantioapp/front
$ node i
ng serve
```
La funcionalidad de la applicacion es muy sencilla:
- En la izquierda tenemos un listado con los feeds.
- Tambien hay una barra muy simple de navegación en la que nos dice el número de elementos de la página, los totales, la página actual y las páginas totales. Además hay 4 botones para movernos por las diferentes páginas, estos se desactivan bajo unas condiciones.
- Cada feed tiene 2 botones, el primero es para ver el feed y el otro para editarlo.
- La sintaxis para cada feed es: número de fila, botones, el medio(imagen), titulo del feed.
- Al pulsar sobre el boton verde de visualizar, en la parte derecha de la pantalla se veran los datos en forma de tarjeta
- Al pulsar sobre el boton de editar, iremos al detalle del feed en el que podremos modificar y guardar, o borrar.
- La barra de navegación es básica, ya que tiene el nombre de la web, que al hacer click nos lleva a la home( listado de feeds), y al repositorio.


En futuras versión la aplicación podria contener:
- Logueado de usarios
- Selección de fuentes
- Referesco de noticias

 # Back
 Las instrucciones en el terminal seran las siguientes.
 ```sh
$ cd avantioapp/back
$ node i
node index.js
```

Las rutas disponibles del API son: 
| Endpoint | Method | Return |
| ------ | ------ | ------ |
| Publishers | Get | Devuelve la lista de periodicos que estan registrados en la BD |
| Feeds/:page | Get | Devuelve la lista de feeds registrados en la BD. Se le indica la página  |
| Feed/:_id | Get | Devuelve un feed filtrado por el id. Se utilza para editar y borrar |
| Feed/:_id | Put | Devuelve OK si se han guardado los cambios de la BD. Si no es correcto devuelve 400 y un mensaje |
| Feed/:_id | Delete | Devuelve OK si se ha borrado de la BD. Si no es correcto devuelve 400 y un mensaje |

 En futuras versión la aplicación podria contener:
 - Seguridad
 - No inserción de valores si se han eliminado.
