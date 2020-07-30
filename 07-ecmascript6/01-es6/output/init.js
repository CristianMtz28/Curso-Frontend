'use strict';
/**EcmaScript 6  

ES6 básicamente es una nueva versión de Javascript, esto significa que con ES6 ahora tenemos nuevas formas de programar Javascript y nos ayudan a que el código sea
más fácil de escribir, en menos líneas de código  y más rápido.
Tiene varias caractérosticas pero entre ellas destaca la posibilidad de separar todo nuestro código javascript en múltiples archivos y después utilizar sólo lo que necesitemos de ellos. Gracias a esto
hay muchos frameworks y librerías que lo utilizan como Angular, React y Vue. Si queremos aprender eso debemos aprender ES6. 
Lo bueno es que es muy fácil aprenderlo ya que se basa en Javascript puro y sin Javascript no podríamos aprender ES6 lo que sí es diferente es que Es6 se tiene que compilar para volverse Javascript y que el
navegador lo entienda, es como SASS que compila y lo vuelve CSS ya que el navegador sólo interpreta HTML, CSS y JavaScript pero tenemos herramientas como SASS y EcmaScript que nos ayudan a ordenar mejor
nuestro código y que sea muchísimo mejor.

-----------------------------------------------NOTA: PARA USAR ES6 ES NECESARIO TENER NODE JS, NPM Y BABEL ----------------------------------------------------------------------
*/
//----------BABEL

/*Babel nos ayuda a compilar nuestro código de ES6 a JS

Para esa sección vamos a tener 2 carpetas, la carpeta src (sources) que será nuestro código ES6 y otra carpeta llamada output que será nuestro código ya compilado

*/
//-------DECLARANDO VAR, LET Y CONST

var nombre = 'Cristian Martínez'; //let es código de ES6 y el navegador lo puede leer ya que tiene soporte en este caso ya hoy en día casi todos lo soportan. Sin embargo hay funciones que 
//los navegadores no soportan como el hecho de separar los archivos. Así que mejor aprendamos a compilar con Babel

console.log('Hola ' + nombre); //------INSTALANDO BABEL

/**

Primero debemos crear el package.json que va en la raíz de la carpeta principal (o sea a lado dle index.html) este package.json nos servirá para node.js, ya que nodejs se encargará de identificar dentro del package todos los comandos que queremos tener disponible para nuestro proyecto así como las dependencias.

Las dependencias como su nombre lo dice, son los archivos del cuál nuestro proyecto depende para funcionar, en este caso será Babel.

Para la instalación de Babel lo haremos por NPM que es mediante la terminal de GIT pero no usaremos la que tenemos en VsCode ya que tenemos que abrirla desde la carpeta donde etsa nuestro package.json entonces usaremos la de "Git Bash Here" dentro de la carpeta de 01-es6. 

Y en la bash ponemos:

npm install --save-dev @babel/core @babel/cli @babel/preset-env     -> ESO SE SACÓ DE LA DOCUMENTACIÓN DE BABEL

Damos enter y esto hará que "mágicamente" nuestro package.json ya tenga las dependencias de BABEL.

Ahora para configurar BABEL debemos ir al archivo package.json y poner los scripts 

a las dependencias creadas le ponemos una coma y ponemos lo siguiente

{
    "devDependencies": {
        "@babel/cli": "^7.10.5",
        "@babel/core": "^7.10.5",
        "@babel/preset-env": "^7.10.4"
    }, -------------------------------------------------------------------SE AÑADIÓ ESTA COMA

    "scripts": { --------------------------------------------------------SE CREÓ ESTA PARTE DE LOS SCRIPTS
        -----------------------------------------------------------------AQUÍ ADENTRO SE VAN A PONER LOS SCRIPTS QUE QUEREMOS QUE SE EJECUTEN CON NODEJS CUANDO EJECUTEMOS UN COMANDO
        "build": "babel src -d output"  ------------------AQUÍ CONSTRUIMOS EL SCRIPT BUILD DICIENDO QUE QUEREMOS QUE EJECUTE BABEL EN LA CARPETA src Y CON EL -d LE DECIMOS A QUE CARPETA QUEREMOS QUE SE COMPILE Y DONDE MANDE ESOS ARCHIVOS QUE EN ESTE CASO ES output
    }
}

Ahora en la bash ponemos "npm run build" sin las comillas e inmediatamente compilará nuestros archivos y nos creeará un archivo .js en la carpeta output con el mismo nombre de este que esta escrito con ES6
Sin embargo BABEl funciona en pasos y lo primero que hace es leer el código, por lo que aún no lo transforma del todo. 

Para eso vamos a crear un nuevo archivo para la configuración de babelen la raíz llamado .babelrc sólo así con todo y punto.

Y ese es el archivo de configuración.

Debtro de ese vamos a colocar un preset que un preset es como un plugin que este va a ser el encargado de transformar de ES6 a Javascript. dentro del archivo ponemos

{
    "presets": ["@babel/preset-env"]
}

Para que al nosotros poner en la bash npm run build (y al build ya le habíamos dicho que lo corriera, transformara y pusiera en la carpeta outpt) lo trasnforme y compile
*/