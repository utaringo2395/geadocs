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
                            <button v-on:click="downloadVisby()" class="btn btn-outline-dark mx-2">
                                Descargar Visby CF
                            </button>
                            <!-- <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/visbycf.rar" download class="btn btn-outline-dark mx-2">Descargar Visby CF</a> -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="subtitulo c_negro">Secundaria: Nunito Sans</p>
                        <p>Fuente secundaria, se emplea en pocas secciones como párrafos de texto. </p>
                        <div class="text-center">
                            <img src="@/assets/imgs/nunitosans.png" alt="" class="img-fluid">
                        </div>
                        <div class="text-end mt-3 mb-5">
                            <button v-on:click="downloadNunitosans()" class="btn btn-outline-dark mx-2">
                                Descargar Nunito Sans
                            </button>
                            <!-- <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/nunitosans.rar" download class="btn btn-outline-dark mx-2">Descargar Nunito Sans</a> -->
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
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;subtitulo&quot;</span>&gt;</span>Este es un subtítulo<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span></code></pre>
                        <br>
                        <p class="mb-2"><b>Subtítulos</b></p>
                        <p>Añadir al tag seleccionado la clase <b>.subtitulo</b> , para usar el estilo de subtitulo.</p>
                        <div class="make-snippet" id="notShow">
                            <h2 class="subtitulo">Esto es un subtítulo</h2>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;subtitulo&quot;</span>&gt;</span>Este es un subtítulo<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span></code></pre>
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
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;p&gt;</span>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/p&gt;</span></code></pre>
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
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;a href=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;Este es un <span style="color:rgb(166, 226, 46); font-weight:400;">link</span>&lt;/a&gt;</code></pre>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    el: '#app',
    data() {
        return {    
            // url:'http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantilladependencias.rar'
        }
    },
    
    methods: {
        downloadVisby(){
            const link = document.createElement('a');
            link.href = 'https://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/visbycf.rar';
            link.setAttribute('download', 'visbycf.rar'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }, 
        downloadNunitosans(){
            const link = document.createElement('a');
            link.href = 'https://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/nunitosans.rar';
            link.setAttribute('download', 'nunitosans.rar'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }, 

    }
};
</script>