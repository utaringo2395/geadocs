<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Cartas</h1>
            <p class="desc">Componentes</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>La carta Blue Border puede ser usada para separar un listado de temas con descripciones.</p>
                        <p>Se compone de una cabecera con un ícono de 58px de ancho y el alto total en automático, para redimensionar la imagen que se utilice, y un texto descriptivo de la carta con la clase <b>.subtitulo-sm</b></p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <!--Componente de carta-->
                                        <div class="blue-border-card">
                                            <!--Cabecera-->
                                            <div class="cabecera d-inline-flex align-items-center mb-3">
                                                <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_copiacertificada.svg" alt="icono" class="img-fluid" /> 
                                                <h2 class="subtitulo mb-0">Título carta</h2>
                                            </div>
                                            <!--Contenido-->
                                            <div class="contenido">
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam nascetur blandit, proin turpis curae erat cum. Scelerisque duis rutrum dis sociis gravida iaculis, libero dui laoreet magna facilisi cum, volutpat velit ornare imperdiet curabitur.</p>
                                                <p>Velit facilisi cursus odio ridiculus pellentesque habitant eleifend morbi nascetur ante dapibus vivamus, platea rutrum conubia fermentum nibh tellus netus litora pulvinar hac.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <!--Componente de carta-->
                                        <div class="blue-border-card">
                                            <!--Cabecera-->
                                            <div class="cabecera d-inline-flex align-items-center mb-3">
                                                <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_mujer.svg" alt="icono" class="img-fluid" /> 
                                                <h2 class="subtitulo mb-0">Título carta</h2>
                                            </div>
                                            <!--Contenido-->
                                            <div class="contenido">
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam nascetur blandit, proin turpis curae erat cum. Scelerisque duis rutrum dis sociis gravida iaculis, libero dui laoreet magna facilisi cum, volutpat velit ornare imperdiet curabitur.</p>
                                                <p>Velit facilisi cursus odio ridiculus pellentesque habitant eleifend morbi nascetur ante dapibus vivamus, platea rutrum conubia fermentum nibh tellus netus litora pulvinar hac.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Componente de carta--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;blue-border-card&quot;</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Cabecera--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera d-inline-flex align-items-center mb-3&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">img</span> <span style="color:rgb(249, 38, 114); font-weight:400;">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_copiacertificada.svg&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">alt</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;icono&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;img-fluid&quot;</span> /&gt;</span> 
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;subtitulo mb-0&quot;</span>&gt;</span>Título carta<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Contenido--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;contenido&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam
        nascetur blandit, proin turpis curae erat cum. Scelerisque duis rutrum dis
        sociis gravida iaculis, libero dui laoreet magna facilisi cum, volutpat
        velit ornare imperdiet curabitur.<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>Velit facilisi cursus odio ridiculus pellentesque habitant eleifend
        morbi nascetur ante dapibus vivamus, platea rutrum conubia fermentum nibh
        tellus netus litora pulvinar hac.<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p>Se puede eliminar la imagen en caso de ser necesario.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <!--Componente de carta-->
                                        <div class="blue-border-card">
                                            <!--Cabecera-->
                                            <div class="cabecera d-inline-flex align-items-center mb-3">
                                                <h2 class="subtitulo mb-0">Título carta</h2>
                                            </div>
                                            <!--Contenido-->
                                            <div class="contenido">
                                                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam nascetur blandit, proin turpis curae erat cum. Scelerisque duis rutrum dis sociis gravida iaculis, libero dui laoreet magna facilisi cum, volutpat velit ornare imperdiet curabitur.</p>
                                                <p>Velit facilisi cursus odio ridiculus pellentesque habitant eleifend morbi nascetur ante dapibus vivamus, platea rutrum conubia fermentum nibh tellus netus litora pulvinar hac.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Componente de carta--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;blue-border-card&quot;</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Cabecera--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cabecera d-inline-flex align-items-center mb-3&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;subtitulo mb-0&quot;</span>&gt;</span>Título carta<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Contenido--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;contenido&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam
        nascetur blandit, proin turpis curae erat cum. Scelerisque duis rutrum dis
        sociis gravida iaculis, libero dui laoreet magna facilisi cum, volutpat
        velit ornare imperdiet curabitur.<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>Velit facilisi cursus odio ridiculus pellentesque habitant eleifend
        morbi nascetur ante dapibus vivamus, platea rutrum conubia fermentum nibh
        tellus netus litora pulvinar hac.<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Informativas minis</p>
                        <p>Carta de información, estructura <b>Icono - Título - Descripción</b></p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <div class="stCard cartaInfo">
                                            <img
                                                src="https://eservicios2.aguascalientes.gob.mx/portalGea/iconos/i_avaluo.svg"
                                                alt="icono"
                                                class="icono"
                                            />
                                            <p class="titulo">Título Carta Informativa</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam nascetur blandit, proin turpis curae erat cum. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Carta informativa mini--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;stCard cartaInfo&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">img</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://eservicios2.aguascalientes.gob.mx/portalGea/iconos/i_avaluo.svg&quot;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">alt</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;icono&quot;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;icono&quot;</span>
    /&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;titulo&quot;</span>&gt;</span>Título Carta Informativa<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;descripcion&quot;</span>&gt;</span>
        Lorem ipsum dolor sit amet consectetur adipiscing, elit ligula aliquam nascetur blandit, proin turpis curae erat cum. 
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Icono animado</p>
                        <p>La carta Ícono Animado, es un contenedor para representar varias secciones y que cumplan como un enlace hacia otra página o sección. El ícono que esté dentro tiene una animación y debe de cumplir con las características de estilo del nuevo diseño de portal.</p>
                        <p>Se envuelve de un tag de <b>&lt;a&gt;</b> para usarse como un enlace hacia otra sección u enlace externo.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <a href="#" class="cartaBorde">
                                            <img src="http://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_taller.svg">
                                            <p>Título corto</p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <a href="#" class="cartaBorde">
                                            <img src="http://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_electricidadv2.svg">
                                            <p>Título corto</p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <a href="#" class="cartaBorde">
                                            <img src="http://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_justicia.svg">
                                            <p>Título corto</p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mb-3">
                                        <a href="#" class="cartaBorde">
                                            <img src="http://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_huesos.svg">
                                            <p>Título corto</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;">&lt;a href=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:700;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cartaBorde&quot;</span>&gt;
    <span style="color:rgb(221, 221, 221); font-weight:400;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;http://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_taller.svg&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span class="hljs-name">p</span>&gt;</span>Título corto<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span class="hljs-name">a</span>&gt;</span></span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Pills</p>
                        <p>Los <b>Pill</b>, son un componente pequeño para representar una serie de objetos, servicios, etc., que necesiten algún tipo de ícono descriptivo, son un más complejas que las listas normales, ya que al tener un ícono, éste debe de cumplir con la guía de estilo.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <div class="pill-card">
                                            <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_mujer.svg" alt="icono" class="img-fluid" />
                                            <div>
                                                Esto es un pill informativo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <div class="pill-card">
                                            <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_flores.svg" alt="icono" class="img-fluid" />
                                            <div>
                                                Esto es un pill informativo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <div class="pill-card">
                                            <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_llaves.svg" alt="icono" class="img-fluid" />
                                            <div>
                                                Esto es un pill informativo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <div class="pill-card">
                                            <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_planta.svg" alt="icono" class="img-fluid" />
                                            <div>
                                                Esto es un pill informativo
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Componente pill--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;pill-card&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">img</span> <span style="color:rgb(249, 38, 114); font-weight:400;">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_mujer.svg&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">alt</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;icono&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;img-fluid&quot;</span> /&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        Esto es un pill informativo
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Pills como enlaces/links</p>
                        <p>En caso de requerir un link para este componente, debe de abrazarse con un tag <b>&lt;a&gt;</b> y la clase <b>.pillLink</b> 
                            <br>Cambiar la ruta del <b>href=""</b>, el ícono a utilizar y el texto descriptivo.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="#" class="pillLink">
                                            <div class="pill-card">
                                                <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_hombre.svg" alt="icono" class="img-fluid" />
                                                <div>
                                                    Esto es un pill con enlace
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;pillLink&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;pill-card&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">img</span> <span style="color:rgb(249, 38, 114); font-weight:400;">src</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;https://eservicios2.aguascalientes.gob.mx/portalgea/iconos/i_hombre.svg&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">alt</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;icono&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;img-fluid&quot;</span> /&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
            Título pill-carta
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>

                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo c_negro">Carta para citas</p>
                        <p>En caso de requerir un link para este componente, debe de abrazarse con un tag <b>&lt;a&gt;</b> y la clase <b>.pillLink</b> 
                            <br>Cambiar la ruta del <b>href=""</b>, el ícono a utilizar y el texto descriptivo.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="cartaCitasWeb">
                                            <h2 class="titulo">Cambio de Propietario de Vehículo</h2>
                                            <p class="fecha">jueves 25 de enero 2021</p>
                                            <p class="horario">8:35 hrs</p>
                                            <p class="dependencia">Secretaría de Finanzas</p>
                                            <p class="direccion">Av. Convención 1914 102, Col del Trabajo, 20180 Aguascalientes, Ags.</p>

                                            <div class="links">
                                                <div class="text-center">
                                                    <button class="btn-form btn-form-descarga">
                                                        <span class="iconify me-2" data-inline="true" data-icon="material-symbols:download"></span>Descargar Formato
                                                    </button>
                                                </div>
                                                <div class="text-center">
                                                    <a href="#modal-cancelarCita" data-toggle="modal" class="link-cancelar">Cancelar Cita</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cartaCitasWeb&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;titulo-cita&quot;</span>&gt;</span>Cambio de Propietario de Vehículo<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fecha-cita&quot;</span>&gt;</span>jueves 25 de enero 2021<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;horario-cita&quot;</span>&gt;</span>8:35 hrs<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dependencia-cita&quot;</span>&gt;</span>Secretaría de Finanzas<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;direccion-cita&quot;</span>&gt;</span>Av. Convención 1914 102, Col del Trabajo, 20180 Aguascalientes, Ags.<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
    
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;links-cita&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;text-center&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">button</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;btn-form btn-form-descarga&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify me-2&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;true&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;material-symbols:download&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>Descargar Formato
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">button</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;text-center&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#modal-cancelarCita&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;modal&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;link-cancelar-cita&quot;</span>&gt;</span>Cancelar Cita<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>

                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo c_negro">Carta Gabinete</p>
                        <p>Su uso es exclusivo para los miembros del gabinete estatal, en la sección de <a href="https://www.aguascalientes.gob.mx/GOBIERNO/gabinete/gabinete.html">Gobernadora y Gabinete</a> del portal del Estado de Aguascalientes.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <div class="cardFuncionario">
                                            <div class="header">
                                                <div class="foto" style="background-image: url('https://www.aguascalientes.gob.mx/GOBIERNO/gabinete/img/CGG.jpeg');"></div>
                                                <div class="funcionario">
                                                    <p class="puesto">Coordinador General de Gabinete</p>
                                                    <p class="nombre">Alfredo Rivadeneyra Hernández</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="info">
                                                <div class="contacto mb-2">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-place"></span> 
                                                    <p> Palacio de Gobierno - Planta Baja, Plaza de la Patria s/n</p>
                                                </div>
                                                <div class="contacto">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-phone"></span> 
                                                    <p> (449) 910 2109 ext. 3214</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <div class="cardFuncionario">
                                            <div class="header">
                                                <div class="foto" style="background-image: url('https://www.aguascalientes.gob.mx/GOBIERNO/gabinete/img/CGG.jpeg');"></div>
                                                <div class="funcionario">
                                                    <p class="puesto">Coordinador General de Gabinete</p>
                                                    <p class="nombre">Alfredo Rivadeneyra Hernández</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="info">
                                                <div class="contacto mb-2">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-place"></span> 
                                                    <p> Palacio de Gobierno - Planta Baja, Plaza de la Patria s/n</p>
                                                </div>
                                                <div class="contacto">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-phone"></span> 
                                                    <p> (449) 910 2109 ext. 3214</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-3">
                                        <div class="cardFuncionario">
                                            <div class="header">
                                                <div class="foto" style="background-image: url('https://www.aguascalientes.gob.mx/GOBIERNO/gabinete/img/CGG.jpeg');"></div>
                                                <div class="funcionario">
                                                    <p class="puesto">Coordinador General de Gabinete</p>
                                                    <p class="nombre">Alfredo Rivadeneyra Hernández</p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="info">
                                                <div class="contacto mb-2">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-place"></span> 
                                                    <p> Palacio de Gobierno - Planta Baja, Plaza de la Patria s/n</p>
                                                </div>
                                                <div class="contacto">
                                                    <span class="iconify me-2" data-inline="true" data-icon="ic:sharp-phone"></span> 
                                                    <p> (449) 910 2109 ext. 3214</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;cardFuncionario&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;header&quot;</span>&gt;</span>
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Sustituir link de fotografía--&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;foto&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">style</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;background-image: url(&#x27;https://www.aguascalientes.gob.mx/GOBIERNO/gabinete/img/CGG.jpeg&#x27;);&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;funcionario&quot;</span>&gt;</span>
            <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Puesto--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;puesto&quot;</span>&gt;</span>Puesto del titular<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
            <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Nombre Completo--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nombre&quot;</span>&gt;</span>Nombre(s) Apellido Apellido<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">hr</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;info&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;contacto mb-2&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify me-2&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;true&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;ic:sharp-place&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span> 
            
            <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Dirección--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span> Palacio de Gobierno - Planta Baja, Plaza de la Patria s/n<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;contacto&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify me-2&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;true&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;ic:sharp-phone&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span> 
            
             <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Teléfono--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span> (449) 910 2109 ext. 3214<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        </code></pre>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

