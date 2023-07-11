<template>
  <div>
    <header class="headerSec_1">
      <h1 class="titulo">Plantillas</h1>
      <p class="desc">Guías</p>
    </header>

    <main>
      <div class="container my-5">
        <div class="row mb-4">
          <div class="col-lg-12">
            <h1 class="subtitulo c_negro">
              Guía de la plantilla para las dependencias de gobierno.
            </h1>
            <p>
              Para hacer uso de esta plantilla porfavor descargue el archivo correspondiente en la
              sección "Plantillas"
            </p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">Introducción</p>
            <p>
              La plantilla para las dependencias es la unica plantilla en la que se tiene que
              utilizar la librería de <b>Vue</b> esta librería nos ayuda a poder filtrar de manera
              dinámica la información especifica por entidad.
            </p>
            <p>
              Como en todas las plantillas es necesario cargar el script global de gea que es el
              siguiente:
            </p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;script
                src="https://eservicios2.aguascalientes.gob.mx/portalgea/js/geavue.js"&gt;&lt;/script&gt;
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="row mb-5">
          <div class="col-lg-12">
            <p class="titulo">Atributos data necesarios</p>
            <p>
              Los atributos necesarios dentro de la plantilla en su etiqueta <b>body</b> son los
              siguientes:
            </p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;body data-sigla="siglas de su dependencia" data-css="S" data-vue="S"
                data-folder="js"&gt; &lt;/body&gt;
              </div>
            </div>
            <p class="mt-4">
              jQuery no es necesario, al menos que usted lo necesite puede habilitarlo o importar su
              propia versión de jQuery
            </p>
          </div>
        </div>
        <hr class="my-4" />
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">Estructura de la plantilla</p>
            <br />
            <p class="subtitulo c_negro">Componentes globales</p>

            <p class="mb-2"><b>Barra de navegación general</b></p>
            <p>
              La barra de navegación general es la barra superior de color azul, que nos permite
              navegar a las diferentes categorías del portal, es importante, se identifica por un id
              <b>hgea</b>
            </p>
            <div id="notShow">
              <div class="make-snippet">
                <div id="hgea"></div>
              </div>
            </div>
            <p class="mt-4 mb-2"><b>Footer</b></p>
            <p>
              El footer es la parte inferior del sitio donde se tiene información escencial del
              portal así como los links más visitados, se identifica por un id <b>fgea</b>
            </p>
            <div id="notShow">
              <div class="make-snippet">
                <div id="hgea"></div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="subtitulo c_negro">Componentes Vue</p>
            <p>
              Para la plantilla de las dependencias se crearon componentes especificos en Vue que
              permiten una modificación simple sin necesidad de editar el codigo html.
            </p>
            <br />
            <p><b>Header dependencia</b></p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;gea_cabecera :bg="cabecera.bg" :logo="cabecera.logo"
                :abreviatura="cabecera.abreviatura" :nombre="cabecera.nombre"
                :dtrigger="cabecera.dtrigger" :folder="cabecera.folder" :folderl="cabecera.ruta"
                /&gt;
              </div>
            </div>
            <p class="mt-4">
              Al usar el componente, no es necesario modificar este codigo, para modificar la
              información del header es necesario modificar el archivo <b>config.js</b> de la
              carpeta <b>js</b> en la plantilla
            </p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p><b>Archivo config.js</b></p>
            <pre
              class="hljs"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(39, 40, 34);
                color: rgb(221, 221, 221);
              "
            ><span class="hljs-comment" style="color: rgb(117, 113, 94);">//Carga las rutas locales de la dependencia</span>
import router from <span class="hljs-string" style="color: rgb(166, 226, 46);">"./rutas.js"</span>;

<span class="hljs-comment" style="color: rgb(117, 113, 94);">//Cargar componente dentro de la libreria</span>
<span class="hljs-class">import </span>{ gea_navbar } from <span class="hljs-string" style="color: rgb(166, 226, 46);">"./gea-lib.esm.js"</span>;
<span class="hljs-class">import </span>{ gea_cabecera } from <span class="hljs-string" style="color: rgb(166, 226, 46);">"./gea-lib.esm.js"</span>;
<span class="hljs-class">import </span>{ gea_contacto } from <span class="hljs-string" style="color: rgb(166, 226, 46);">"./gea-lib.esm.js"</span>;

<span class="hljs-comment" style="color: rgb(117, 113, 94);">//Inicializa la librería de Vue</span>
new Vue({
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">    el:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"#appAgs"</span>,
    router,
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">    components:</span> {
        gea_navbar,
        gea_cabecera,
        gea_contacto,
    },
    data() {
        <span class="hljs-class">return </span>{
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">            cabecera:</span> {
                <span class="hljs-comment" style="color: rgb(117, 113, 94);">//todas las imagenes deben de seguir la siguiente ruta: /img/dependencias/nombre de la dependencia</span>
                <span class="hljs-comment" style="color: rgb(117, 113, 94);">//medida minima de fondo 1110px x 540px</span>
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                bg:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"https://via.placeholder.com/1110x540?text=fondo 1110x540"</span>,
                <span class="hljs-comment" style="color: rgb(117, 113, 94);">//medida minima de logotipo 320px x 110px</span>
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                logo:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"https://via.placeholder.com/320x110?text=logo 320x110"</span>,
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                abreviatura:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"Abreviatura"</span>,
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                nombre:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"Nombre de Dependencia"</span>,

                <span class="hljs-comment" style="color: rgb(117, 113, 94);">//Migajas Folder = al nombre del padre del sitio (no mover)</span>
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                folder:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"Dependencias"</span>,
<span class="hljs-symbol" style="color: rgb(191, 121, 219);">                ruta:</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"/gobierno/dependencias.html"</span>,
            },
        };
    },
});</pre>

            <p class="mt-4">
              Dentro del apartado <b>data()</b> esta un objeto llamado <b>cabecera:{}</b> dentro de
              este vienen parametros que pueden ser editados con la información de su dependencia.
            </p>
            <p>
              <b>bg -</b> La ruta de su imagen de fondo para la cabecera <br />
              <b>logo -</b> Ruta del archivo del logotipo de su dependencia <br />
              <b>abreviatura -</b> Abreviatura de su dependncia (ej. SAE)<br />
              <b>nombre -</b> Nombre de la dependencia (ej. Secretaría de Administración)<br />
            </p>
            <p>El resto no se modifica</p>
          </div>
        </div>
        <div class="row mt-4 mb-3">
          <div class="col-lg-12">
            <p><b>Archivo rutas.js</b></p>

            <p>
              Este archivo es el que nos ayuda a que nuestras diferentes secciones, creadas en la
              carpeta <b>secciones</b> se pueda visualizar. El archivo rutas se encuentra dentro de
              la carpeta <b>js</b>, es el siguiente:
            </p>
            <pre
              class="hljs"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(39, 40, 34);
                color: rgb(221, 221, 221);
              "
            ><span class="hljs-comment" style="color: rgb(117, 113, 94);">// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter</span>
<span class="hljs-comment" style="color: rgb(117, 113, 94);">// and then call `Vue.use(VueRouter)`.</span>

<span class="hljs-comment" style="color: rgb(117, 113, 94);">// 1. Importar la seccion (Componente)</span>
<span class="hljs-comment" style="color: rgb(117, 113, 94);">// Este se compone por un import + nombre de la seccion + from + la ruta de la seccion (Por default  "./secciones/nombre-de-archivo.js")</span>
<span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">import</span> principal <span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">from</span> <span class="hljs-string" style="color: rgb(166, 226, 46);">"../secciones/principal.js"</span>;

<span class="hljs-comment" style="color: rgb(117, 113, 94);">// 2. Definir las rutas</span>
<span class="hljs-comment" style="color: rgb(117, 113, 94);">// Cada ruta debe de estar ligada a una sección</span>
<span class="hljs-comment" style="color: rgb(117, 113, 94);">// Esta se compone por { + path + nombre de la seccion + , + component : nombre de la seccion (Componente)}</span>
<span class="hljs-comment" style="color: rgb(117, 113, 94);">// Estas rutas son las que se pondran como un router link de la barra de navegación secundaría</span>

<span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">const</span> routes = [
  { path: <span class="hljs-string" style="color: rgb(166, 226, 46);">"/"</span>, component: principal }, 
];


<span class="hljs-comment" style="color: rgb(117, 113, 94);">//3. esto no se tiene que mover :D</span>
<span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">const</span> router = <span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">new</span> VueRouter({
  routes, <span class="hljs-comment" style="color: rgb(117, 113, 94);">// short for `routes: routes`</span>
});

<span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">export</span> <span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">default</span> router;</pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
