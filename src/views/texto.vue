<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Texto</h1>
            <p class="desc">SISTEMA DE DISEÑO DEL GOBIERNO DEL ESTADO DE AGUASCALIENTES</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="titulo">Fuentes</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="subtitulo c_negro">Principal: Visby CF</p>
                        <p>Fuente principal, se emplea en la mayoría de los títulos, subtítulos y links.</p>
                        <div class="text-center">
                            <img src="@/assets/imgs/visby.png" alt="" class="img-fluid">
                        </div>
                        <div class="text-end mt-3 mb-5">
                            <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/visbycf.rar" download class="btn btn-outline-dark mx-2">Descargar Visby CF</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="subtitulo c_negro">Secundaria: Nunito Sans</p>
                        <p>Fuente secundaria, se emplea en pocas secciones como párrafos de texto. </p>
                        <div class="text-center">
                            <img src="@/assets/imgs/nunitosans.png" alt="" class="img-fluid">
                        </div>
                        <div class="text-end mt-3 mb-5">
                            <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/nunitosans.rar" download class="btn btn-outline-dark mx-2">Descargar Nunito Sans</a>
                        </div>
                    </div>
                </div>
                <hr class="my-4">
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo c_negro">Títulos</p>
                        <p class="mb-2"><b>Títulos principales</b></p>
                        <p>Añadir al tag seleccionado la clase <b>.titulo</b> , para usar el estilo de título principal.</p>
                        <div class="make-snippet" id="notShow">
                            <h1 class="titulo">Esto es un título</h1>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">&lt;h1 <span class="hljs-class"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">class</span></span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"titulo"</span>&gt;<span class="hljs-type" style="color: rgb(166, 226, 46); font-weight: 700;">Este</span> es un título&lt;/h1&gt;</pre>
                        <br>
                        <p class="mb-2"><b>Subtítulos</b></p>
                        <p>Añadir al tag seleccionado la clase <b>.subtitulo</b> , para usar el estilo de subtitulo.</p>
                        <div class="make-snippet" id="notShow">
                            <h2 class="subtitulo">Esto es un subtítulo</h2>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">&lt;h2 <span class="hljs-class"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">class</span></span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"subtitulo"</span>&gt;<span class="hljs-type" style="color: rgb(166, 226, 46); font-weight: 700;">Este</span> es un subtítulo&lt;/h2&gt;</pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo c_negro">Texto corrido</p>
                        <p>La etiqueta <b>&lt;p&gt;</b> ya lleva las características generales para usarse, con un tamaño base de 16px para texto, siendo el mínimo ideal para uso digital y cubrir aspectos de accesibilidad.</p>
                        <p>Si se necesita modificar el estilo, se deberá agregar una clase y basarse en el estilo y colores que se dan para el nuevo portal.</p>
                        <div class="make-snippet" id="notShow">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Eget felis eget nunc lobortis mattis aliquam faucibus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis enim ut tellus elementum sagittis vitae. Vitae nunc sed velit dignissim sodales ut eu.</p>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);"> <span class="hljs-attribute" style="color: rgb(191, 121, 219);">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Eget felis eget nunc lobortis mattis aliquam faucibus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis enim ut tellus elementum sagittis vitae. Vitae nunc sed velit dignissim sodales ut eu.<span class="hljs-attribute" style="color: rgb(191, 121, 219);">&lt;/p&gt;</span></pre>
                        <br>
                        
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo c_negro">Links</p>
                        <p>La etiqueta <b>&lt;p&gt;</b> ya lleva las características generales para usarse, con un tamaño base de 16px para texto, siendo el mínimo ideal para uso digital y cubrir aspectos de accesibilidad.</p>
                        <p>Si se necesita modificar el estilo, se deberá agregar una clase y basarse en el estilo y colores que se dan para el nuevo portal.</p>
                        <div class="make-snippet" id="notShow">
                           <a href="#">Este es un link</a>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);"><span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"#"</span>&gt;</span>Este es un link<span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">a</span>&gt;</span></span></pre>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>