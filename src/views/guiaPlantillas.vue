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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">script</span> <span style="color:rgb(249, 38, 114); font-weight:400;">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://eservicios2.aguascalientes.gob.mx/portalgea/js/geavue.js&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">script</span>&gt;</span></code></pre>
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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;body 
    <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-sigla=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;siglas de su dependencia&quot;</span> 
    <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-css=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;S&quot;</span> 
    <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-vue=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;S&quot;</span> 
    <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-folder=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;js&quot;</span>
&gt;
    
&lt;/body&gt;</code></pre>
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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;div <span style="color:rgb(166, 226, 46); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;hgea&quot;</span>&gt;&lt;/div&gt;</code></pre>
            <p class="mt-4 mb-2"><b>Footer</b></p>
            <p>
              El footer es la parte inferior del sitio donde se tiene información escencial del
              portal así como los links más visitados, se identifica por un id <b>fgea</b>
            </p>
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;div <span style="color:rgb(166, 226, 46); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fgea&quot;</span>&gt;&lt;/div&gt;</code></pre>
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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;gea_cabecera
    <span style="color:rgb(191, 121, 219); font-weight:400;">:bg=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.bg&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:logo=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.logo&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:abreviatura=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.abreviatura&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:nombre=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.nombre&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:dtrigger=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.dtrigger&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:folder=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.folder&quot;</span></span>
    <span style="color:rgb(191, 121, 219); font-weight:400;">:folderl=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera.ruta&quot;</span></span>
/&gt;</code></pre>
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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">//Carga las rutas locales de la dependencia</span>
<span style="color:rgb(249, 38, 114); font-weight:700;">import</span> router <span style="color:rgb(249, 38, 114); font-weight:700;">from</span> <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;./rutas.js&quot;</span>;

<span style="color:rgb(117, 113, 94); font-weight:400;">//Cargar componente dentro de la libreria</span>
<span style="color:rgb(249, 38, 114); font-weight:700;">import</span> { gea_navbar } <span style="color:rgb(249, 38, 114); font-weight:700;">from</span> <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;./gea-lib.esm.js&quot;</span>;
<span style="color:rgb(249, 38, 114); font-weight:700;">import</span> { gea_cabecera } <span style="color:rgb(249, 38, 114); font-weight:700;">from</span> <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;./gea-lib.esm.js&quot;</span>;
<span style="color:rgb(249, 38, 114); font-weight:700;">import</span> { gea_contacto } <span style="color:rgb(249, 38, 114); font-weight:700;">from</span> <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;./gea-lib.esm.js&quot;</span>;

<span style="color:rgb(117, 113, 94); font-weight:400;">//Inicializa la librería de Vue</span>
<span style="color:rgb(249, 38, 114); font-weight:700;">new</span> <span class="hljs-title class_">Vue</span>({
    <span style="color:rgb(221, 221, 221); font-weight:400;">el</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#appAgs&quot;</span>,
    router,
    <span style="color:rgb(221, 221, 221); font-weight:400;">components</span>: {
        gea_navbar,
        gea_cabecera,
        gea_contacto,
    },
    <span class="hljs-title function_">data</span>(<span style="color:rgb(221, 221, 221); font-weight:400;"></span>) {
        <span style="color:rgb(249, 38, 114); font-weight:700;">return</span> {
            <span style="color:rgb(221, 221, 221); font-weight:400;">cabecera</span>: {
                <span style="color:rgb(117, 113, 94); font-weight:400;">//todas las imagenes deben de seguir la siguiente ruta: /img/dependencias/nombre de la dependencia</span>
                <span style="color:rgb(117, 113, 94); font-weight:400;">//medida minima de fondo 1110px x 540px</span>
                <span style="color:rgb(221, 221, 221); font-weight:400;">bg</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://via.placeholder.com/1110x540?text=fondo 1110x540&quot;</span>,
                <span style="color:rgb(117, 113, 94); font-weight:400;">//medida minima de logotipo 320px x 110px</span>
                <span style="color:rgb(221, 221, 221); font-weight:400;">logo</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://via.placeholder.com/320x110?text=logo 320x110&quot;</span>,
                <span style="color:rgb(221, 221, 221); font-weight:400;">abreviatura</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;Abreviatura&quot;</span>,
                <span style="color:rgb(221, 221, 221); font-weight:400;">nombre</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;Nombre de Dependencia&quot;</span>,

                <span style="color:rgb(117, 113, 94); font-weight:400;">//Migajas Folder = al nombre del padre del sitio (no mover)</span>
                <span style="color:rgb(221, 221, 221); font-weight:400;">folder</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;Dependencias&quot;</span>,
                <span style="color:rgb(221, 221, 221); font-weight:400;">ruta</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/gobierno/dependencias.html&quot;</span>,
            },
        };
    },
});</code></pre>

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
            <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter</span>
<span style="color:rgb(117, 113, 94); font-weight:400;">// and then call `Vue.use(VueRouter)`.</span>

<span style="color:rgb(117, 113, 94); font-weight:400;">// 1. Importar la seccion (Componente)</span>
<span style="color:rgb(117, 113, 94); font-weight:400;">// Este se compone por un import + nombre de la seccion + from + la ruta de la seccion (Por default  &quot;./secciones/nombre-de-archivo.js&quot;)</span>
<span style="color:rgb(249, 38, 114); font-weight:700;">import</span> principal <span style="color:rgb(249, 38, 114); font-weight:700;">from</span> <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;../secciones/principal.js&quot;</span>;

<span style="color:rgb(117, 113, 94); font-weight:400;">// 2. Definir las rutas</span>
<span style="color:rgb(117, 113, 94); font-weight:400;">// Cada ruta debe de estar ligada a una sección</span>
<span style="color:rgb(117, 113, 94); font-weight:400;">// Esta se compone por { + path + nombre de la seccion + , + component : nombre de la seccion (Componente)}</span>
<span style="color:rgb(117, 113, 94); font-weight:400;">// Estas rutas son las que se pondran como un router link de la barra de navegación secundaría</span>

<span style="color:rgb(249, 38, 114); font-weight:700;">const</span> routes = [
  { <span style="color:rgb(221, 221, 221); font-weight:400;">path</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>, <span style="color:rgb(221, 221, 221); font-weight:400;">component</span>: principal }, 
];


<span style="color:rgb(117, 113, 94); font-weight:400;">//3. esto no se tiene que mover :D</span>
<span style="color:rgb(249, 38, 114); font-weight:700;">const</span> router = <span style="color:rgb(249, 38, 114); font-weight:700;">new</span> <span class="hljs-title class_">VueRouter</span>({
  routes, <span style="color:rgb(117, 113, 94); font-weight:400;">// short for `routes: routes`</span>
});

<span style="color:rgb(249, 38, 114); font-weight:700;">export</span> <span style="color:rgb(249, 38, 114); font-weight:700;">default</span> router;</code></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
