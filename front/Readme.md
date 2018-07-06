# AvantioApp - Dailytrends

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Se ha creado este repositorio para la prueba técnica en la empresa Avantio.

  # Importante:
  `Los feeds de los diarios se actualizan cada vez que se lanza el servidor. Y cada cierto tiempo`

Hay 2 unicas carpetas en este proyecto:

### Front
Esta carpeta tiene el código de la aplicación Web hecha con la última versión de Angular, concretamente la 6.0.3.
Para hacer uso de ella, tendremos que ir a la url http://127.0.0.1:4200/
 
# Para empezar
Para cada carpeta se ha creado un archivo Readme en el que se explica como hacer la instalacion y hacerlo servir
Obviamente, en primer lugar hay que tener   Angular6
Despues de tener todas las herramientas, tenemos que bajarnos el repositorio:
 
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
