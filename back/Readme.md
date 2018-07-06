# AvantioApp - Dailytrends
 

Se ha creado este repositorio para la prueba técnica en la empresa Avantio.

  # Importante:
  `Los feeds de los diarios se actualizan cada vez que se lanza el servidor. Y cada cierto tiempo`

### Back
En esta carpeta está el código del servidor.
El servidor está hecho con NodeJS, Express, que conecta a una coleccion en MongoDB.
El servidor es un REST API. Para utilizarlo en local, tendremos que llamar a la siguiente URL http://127.0.0.1:27017/api/%endpoint%

# Para empezar
Para cada carpeta se ha creado un archivo Readme en el que se explica como hacer la instalacion y hacerlo servir
Obviamente, en primer lugar hay que tener NodeJs, MongoDB 
Despues de tener todas las herramientas, tenemos que bajarnos el repositorio:

```sh
$ git clone git@github.com:chef88val/avantioPrueba.git
``` 

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
