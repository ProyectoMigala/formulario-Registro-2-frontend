# Migala Registro

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app). Para una explicación detallada sobre como funciona revisa su [documentación](https://github.com/facebook/create-react-app).

## Como empezar

Vas a necesitar tener instalados **NodeJS & Yarn** en tu computadora.

Una vez listo deberás correr `yarn` para descargar las depencias del proyecto.

## Scripts disponibles

En la raíz del proyecto puedes correr:

### `yarn start`

Corre el sitio en modo desarollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `yarn run build`

Contruye la app en modo producción dentro de la carpeta `build`.\
Construye correctamente React en modo poducción y lo optimiza para mayor rendimiento.

El aplicación construida es minificada y los nombres de los archivos incluyen hashes.

La aplicación está lista para ser lanzada!

Revisa esta sección sobre [lanzamiento](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## docker

Puedes usar [Docker](https://docs.docker.com/get-docker/) y/o [docker-compose](https://docs.docker.com/compose/install/) para correr el proyecto.

### Desarrollo con docker compose

Con `docker-compose` (docker-compose es una herramienta dependiente de Docker). En la raíz del proyecto puedes correr:

```sh
docker-compose up
```

con Docker. En la raíz del proyecto puedes correr:

```sh
docker build -t migala-form -f Dockerfile.dev .
```

```sh
docker run -p 3000:3000 migala-form
```

### Builds para producción

Es necesario tener un archivo `.env.production` con las variables de ambiente definidas en `.env.example`.

El siguiente comando construirá una imágen de contenedor con una versión
productiva del proyecto:

```sh
docker build -t migala-form-prod .
```

Para correr el contenedor:

```sh
docker run -e PORT=3000 -p 3000:3000 migala-form-prod
```

La variable de entorno `PORT` indica el el puerto de nginx. El nombre de la 
variable se puede cambiar desde los archivos de template de nginx.


## Aprende más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React revisa la [documentación de React](https://reactjs.org/).
