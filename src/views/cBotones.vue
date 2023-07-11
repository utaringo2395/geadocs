<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Botones</h1>
            <p class="desc">Componentes</p>
        </header>
  
        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Construidos para adaptarse a la cantidad de texto que tenga dentro de él.</p>
                        <p> Cualquiera de los botones debe de llevar la clase <b>.btn</b>, que le otorga las características principales como border-radius, padding, etc. Siguiente de otra clase <b>.btn-*</b> para adaptar a contextos.</p>
                        <p>A pesar de ser elementos llamados "botón", se usa el tag <b>&lt;a&gt;</b>, ya que en su mayoría, lleva a otro enlace interno o externo al portal. En caso de necesitarse para completar una acción, cambiar el tag <b>&lt;a&gt;</b> a <b>&lt;button&gt;</b> junto con el atributo <b>type="button"</b>. Agregar más atributos según sea necesario, para completar la tarea. <br>Revisar documentación para más información.</p>
                        <div class="alert alert-info" role="alert">
                           <span class="iconify me-2" data-inline="true" data-icon="zondicons:information-outline" style="font-size: 20px;"></span>Se recomienda utilizar 1 o pocas palabras para resumir la acción.
                        </div>
                         
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-lg-12">
                        <p class="titulo">Botón principal</p>
                        <p>Usar la clase <b>.btn-principal</b></p>
                        <p>Uso general. <br>
                            <b>Ejemplos: tarjetas, botones de sidebar, inputs independientes.</b>
                        </p>
                        <div class="make-snippet" id="notShow">
                            <a href="" class="btn btn-principal mx-2">Botón Principal</a>
                            <a href="" class="btn btn-principal mx-2">Botón Principal</a>
                            <a href="" class="btn btn-principal mx-2">Botón Principal</a>
                        </div>
                        <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-principal&quot;</span>&gt;</span>Botón Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-principal&quot;</span>&gt;</span>Botón Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-principal&quot;</span>&gt;</span>Botón Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Botón de color</p>
                        <p>Usando las clases para fondos, podemos cambiar los colores de los botones.<br><RouterLink to="color">Ver documentación de colores.</RouterLink></p>
                        <div class="make-snippet">
                            <a href="#" class="btn bg-1 mx-2">Botón Cyan</a>
                            <a href="#" class="btn bg-2 mx-2">Botón Rosa</a>
                            <a href="#" class="btn bg-3 mx-2">Botón Amarillo</a>
                            <a href="#" class="btn bg-4 mx-2">Botón Verde</a>
                        </div>
                        <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn bg-1&quot;</span>&gt;</span>Botón Cyan<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn bg-2&quot;</span>&gt;</span>Botón Rosa<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn bg-3&quot;</span>&gt;</span>Botón Amarillo<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn bg-4&quot;</span>&gt;</span>Botón Verde<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Botones de línea</p>
                        <div class="make-snippet">
                            <a href="#" class="btn btn-ln-default mx-2">Botón Principal</a>
                            <a href="#" class="btn btn-ln-bg1 mx-2">Botón Cyan</a>
                            <a href="#" class="btn btn-ln-bg2 mx-2">Botón Rosa</a>
                            <a href="#" class="btn btn-ln-bg4 mx-2">Botón Verde</a>
                        </div>
                        <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-ln-default&quot;</span>&gt;</span>Botón Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-ln-bg1&quot;</span>&gt;</span>Botón Cyan<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-ln-bg2&quot;</span>&gt;</span>Botón Rosa<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-ln-bg4&quot;</span>&gt;</span>Botón Verde<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Botón con icono (Ejemplo)</p>
                        <p>Usando las clases para fondos, podemos cambiar los colores de los botones.<br><RouterLink to="icIconify">Ver documentación de iconos.</RouterLink></p>
                        <div class="make-snippet">
                            <a href="#" class="btn bg-2">
                                <span class="iconify" data-icon="majesticons:location-marker" data-inline="false"></span>
                                Botón
                            </a>
                        </div>
                        <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;a href=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:700;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn bg-2&quot;</span>&gt;
    &lt;span <span style="color:rgb(249, 38, 114); font-weight:700;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-icon=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;majesticons:location-marker&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:700;">data</span>-<span style="color:rgb(249, 38, 114); font-weight:700;">inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span>&gt;&lt;/span&gt;
    Botón
&lt;/a&gt;</code></pre>
                    </div>
                </div>
                <div class="row mt-3 mb-4">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Botones para formularios</p>
                        <p>Usar la clase <b>.btn-form</b>
                            <br>Uso para formularios o logins/inicio de sesión. Abarca el 95% de su contenedor más inmediato o padre, y centrado verticalmente.</p>
                        <div class="make-snippet">
                            <a href="#" class="btn btn-form">Botón Principal</a>
                        </div>
                        <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-form&quot;</span>&gt;</span>Botón Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>
                
            </div>
        </main>
    </div>
</template>