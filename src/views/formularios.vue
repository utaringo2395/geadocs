<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Carruseles</h1>
            <p class="desc">Componentes</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="titulo">Inputs Generales</p>
                        <p>Se usan para:</p>
                        <ul>
                            <li>Formularios de registro</li>
                            <li>Capturación de datos</li>
                            <li>Campo único</li>
                            <li>Búsqueda</li>
                        </ul>
                        <p>Deberá de ir acompañado de un <b>&lt;a&gt;</b> o <b>button</b> con la clase <b>.btn-principal</b> en caso de que solo se requiera hacer una acción. Para formularios más grandes que consistan de varios pasos, usar la clase <b>.btn-form</b></p>
                        <div class="make-snippet" id="notShow">
                            <form>
                                <div class="form-group">
                                    <h2 class="titulo">Recupera tu contraseña</h2> 
                                    <label for="curp">CURP</label> 
                                    <input type="text" id="curp" placeholder="Ingresa los 18 caracteres de tu CURP"> 
                                    <div class="text-end">
                                        <button type="button" class="btn btn-principal">Recuperar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">form</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;form-group&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;titulo&quot;</span>&gt;</span>Recupera tu contraseña<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">label</span> <span style="color:rgb(249, 38, 114); font-weight:400;">for</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;curp&quot;</span>&gt;</span>CURP<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">label</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">input</span> <span style="color:rgb(249, 38, 114); font-weight:400;">type</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;text&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;curp&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">placeholder</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;Ingresa los 18 caracteres de tu CURP&quot;</span> /&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;text-end&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">button</span> <span style="color:rgb(249, 38, 114); font-weight:400;">type</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn btn-principal&quot;</span>&gt;</span>Recuperar<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">button</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">form</span>&gt;</span></code></pre>
                    </div>
                </div>

                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p>Para formularios más grandes que consistan de varios pasos, el botón usa la clase <b>.btn-form</b> . El tamaño del botón puede ser ajustado con la propiedad <b>CSS width</b></p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>