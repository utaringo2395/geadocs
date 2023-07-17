<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Sidebars</h1>
            <p class="desc">Componentes</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Los botones de sidebar están compuestos de un ícono y un título breve para indicar una acción.</p>
                        <p>Abarcan el ancho de 4 columnas. El color del fondo y del texto se pueden cambiar con las clases de <RouterLink to="color">color.</RouterLink></p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <a href="#" class="sideBtn bg_base c_blanco">
                                            <span class="iconify "  data-icon="fa6-solid:calendar-days"></span>
                                            <p class="c_blanco">Verificación vehicular</p>
                                        </a>
                                    </div>
                                    <div class="col-md-4">
                                        <!--Componente de sideBtn-->
                                        <a href="#" class="sideBtn bg_2 c_blanco">
                                            <!--Icono-->
                                            <span class="iconify "  data-icon="dashicons:welcome-write-blog"></span>
                                            <!--Text-->
                                            <p class="c_blanco">Inscríbete en el padrón estatal</p>
                                        </a>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="sideBtn bg_6 c_blanco">
                                            <span class="iconify "  data-icon="fa6-solid:calendar-days"></span>
                                            <p class="c_blanco">Verificación vehicular</p>
                                        </a>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Componente de sideBtn--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;sideBtn bg_2 c_blanco&quot;</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Icono--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify &quot;</span>  <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dashicons:welcome-write-blog&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Text--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;c_blanco&quot;</span>&gt;</span>Inscríbete en el padrón estatal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span></code></pre>
                    </div>
                </div>

                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Sidebar Dependencias</p>
                        <p>Los sidebar de las dependencias se compone de una barra de búsqueda y enlaces relacionados.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8"></div>
                                    <div class="col-md-4">
                                        <!--Buscador-->
                                        <div class="buscadorInt">
                                            <p class="titulo">Buscar Trámites</p>
                                            <input class="inputBlanco wIcono" type="text" />
                                            <span class="icono">
                                                <svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.8368 10.9317L9.49991 8.61166C9.39444 8.50694 9.25146 8.44876 9.10145 8.44876H8.71939C9.36631 7.62732 9.75071 6.59411 9.75071 5.47014C9.75071 2.79636 7.56852 0.629883 4.87536 0.629883C2.18219 0.629883 0 2.79636 0 5.47014C0 8.14392 2.18219 10.3104 4.87536 10.3104C6.00747 10.3104 7.04817 9.92877 7.87558 9.2865V9.66581C7.87558 9.81474 7.93417 9.95669 8.03965 10.0614L10.3765 12.3815C10.5969 12.6002 10.9531 12.6002 11.1711 12.3815L11.8345 11.7229C12.0548 11.5042 12.0548 11.1505 11.8368 10.9317ZM4.87536 8.44876C3.2182 8.44876 1.87514 7.11769 1.87514 5.47014C1.87514 3.82492 3.21586 2.49152 4.87536 2.49152C6.53251 2.49152 7.87558 3.82259 7.87558 5.47014C7.87558 7.11537 6.53485 8.44876 4.87536 8.44876Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                        </div>
                                        <!--Enlaces Relacionados, Dependencias-->
                                        <div class="enlacesDependencias">
                                            <h1 class="subtitulo">Enlaces Relacionados</h1>
                                            <ul class="enlaces-list">
                                                <li class="enlaces-item">
                                                    <a href="https://www.aguascalientes.gob.mx/CONTRALORIA/" class="enlaces-link">Contraloría del Estado</a>
                                                </li>
                                                <li class="enlaces-item">
                                                    <a href="https://www.aguascalientes.gob.mx/SAE/" class="enlaces-link">SAE Secretaría de Administración</a>
                                                </li>
                                                <li class="enlaces-item">
                                                    <a href="https://www.aguascalientes.gob.mx/iaju/" class="enlaces-link">IAJU Instituto Aguascalentense de la Juventud</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;container&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;row&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;col-lg-8&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Contenido lateral--&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;col-lg-4&quot;</span>&gt;</span>
            <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Buscador--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;tgea&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
            <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Enlaces Relacionados, Dependencias--&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlacesDependencias&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h1</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;subtitulo&quot;</span>&gt;</span>Enlaces Relacionados<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h1</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-list&quot;</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-item&quot;</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-link&quot;</span>&gt;</span>Contraloría del Estado<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-item&quot;</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-link&quot;</span>&gt;</span>SAE Secretaría de Administración<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-item&quot;</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;enlaces-link&quot;</span>&gt;</span>IAJU Instituto Aguascalentense de la Juventud<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>

                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Sidebar secundaria</p>
                        <p>Las páginas personalizadas, que utilizan la Cabecera Secundaria, también pueden hacer uso de un sidebar para poner enlaces relacionados a la temática de ésta.</p>
                        <p>Cada enlace va a acompañado de un ícono sólido.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8"></div>
                                    <!--Sidebar Secundario-->
                                    <div class="col-md-4">
                                        <div id="#serviciosContenedor">
                                            <p class="tituloDivisor">Servicios</p> 
                                        </div>
                                        <div id="menu_Lateral_2" class="mb-4">
                                            <ul class="ul-lateral">
                                                <li>
                                                    <a href="">
                                                        <span class="iconify" data-inline="false" data-icon="fa-solid:gavel"></span>
                                                        Subastas
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <span class="iconify" data-inline="false"
                                                            data-icon="fa-solid:user-secret"></span>
                                                        Denuncia anónima
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <span class="iconify" data-inline="false" data-icon="bi:file-post-fill"></span>
                                                        Edictos y estrados
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <span class="iconify" data-inline="false" data-icon="mdi:file-search"></span>
                                                        Auditorías
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;container&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;row&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;col-md-8&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Sidebar Secundario--&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;col-md-4&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#serviciosContenedor&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;tituloDivisor&quot;</span>&gt;</span>Servicios<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;menu_Lateral_2&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;mb-4&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;ul-lateral&quot;</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;&quot;</span>&gt;</span>
                            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fa-solid:gavel&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
                            Subastas
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;&quot;</span>&gt;</span>
                            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span>
                                <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fa-solid:user-secret&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
                            Denuncia anónima
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;&quot;</span>&gt;</span>
                            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;bi:file-post-fill&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
                            Edictos y estrados
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;&quot;</span>&gt;</span>
                            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;iconify&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-inline</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-icon</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;mdi:file-search&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
                            Auditorías
                        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>