<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Footer</h1>
            <p class="desc">Componentes</p>
        </header>   

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Este <b>footer</b> siempre está presente en nuestras plantillas para todas las páginas que se encuentren en <b>aguascalientes.gob.mx</b></p>
                        <p>En nuestra <RouterLink to="plantillas">Plantilla para dependencias</RouterLink> siempre se va a encontrar como: </p>
                    </div>
                </div>
                <div class="make-snippet" id="notShow">
                    <footer>
                        <div class="container">
                            <div class="row justify-content-between text-left">
                                <div class="col-lg-3  pb-md-3 pb-sm-5 footer">
                                    <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/images/logo_GEA_blanco.png" alt="logo-gobierno" class="align-self-start logogob-footer">
                                </div> 
                                <div class="col-lg-3  pr-3 pb-md-3 pb-sm-5 seccion-footer">
                                    <h6 class="footer-title">AGUASCALIENTES</h6> 
                                    <hr class="hr-ags text-left"> 
                                    <ul class="footer-list">
                                        <li class="footer-item">Búscanos en las redes sociales del Estado de Aguascalientes</li>
                                    </ul> 
                                    <div class="d-flex flex-row justify-content-start mb-3">
                                        <a href="#" target="_blank" class="footer-icons-media">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24" data-icon="jam:facebook-square" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                                                <g fill="currentColor">
                                                    <path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z"></path>
                                                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                                                </g>
                                            </svg>
                                        </a> 
                                        <a href="#" target="_blank" class="footer-icons-media">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24" data-icon="jam:instagram" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                                                <g fill="currentColor">
                                                    <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
                                                    <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164a5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31a3.155 3.155 0 0 1 0 6.31z"></path>
                                                    <circle cx="15.156" cy="4.858" r="1.237"></circle>
                                                </g>
                                            </svg>
                                        </a> 
                                        <a href="#" target="_blank" class="footer-icons-media">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24" data-icon="jam:twitter-square" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                                                <g fill="currentColor">
                                                    <path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947z"></path>
                                                    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </div> 
                                    <ul class="footer-list">
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Enlaces Federales</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Enlaces Estatales</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Enlaces Municipales</a>
                                        </li>
                                    </ul>
                                </div> 
                                <div class="col-lg-3 pr-3 seccion-footer">
                                    <h6 class="footer-title">MAPA DE SITIO</h6> <hr class="hr-mapa"> 
                                    <ul class="footer-list">
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Trámites y Servicios</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Gobierno</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Atención Ciudadana</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Estado</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Marco Normativo</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Transparencia</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Sala de Prensa</a>
                                        </li>
                                    </ul>
                                </div> 
                                <div class="col-lg-3 pr-3 seccion-footer mt-md-3 mt-lg-0">
                                    <h6 class="footer-title">CONTACTO</h6> 
                                    <hr class="hr-contacto"> 
                                    <ul class="footer-list">
                                        <li class="footer-item">Oficinas de Gobierno</li> 
                                        <li class="footer-item">800 900 2002</li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">buzon.portal@aguascalientes.gob.mx</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Directorio Gubernamental</a>
                                        </li> 
                                        <li class="footer-item">
                                            <a href="#" class="footer-link">Estadísticas e Indicadores</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                            <div class="d-flex flex-row justify-content-center mt-5">
                                <p class="footer-item p-2">Gobierno del Estado de Aguascalientes 2022 - 2027</p> 
                                <a href="#" target="_blank" class="footer-link">
                                    <p class="p-2">Responsable del Portal</p>
                                </a> 
                                <a href="#" target="_blank" class="footer-link">
                                    <p class="p-2">Aviso de Privacidad</p>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
                <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">body</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-sigla</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;SIGOD&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-css</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;N&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-vue</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;S&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-jquery</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;N&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-folder</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;SIGOD/js&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;appAgs&quot;</span>&gt;</span>
        
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;hgea&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- Footer --&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fgea&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">body</span>&gt;</span></code></pre>
            </div>
        </main>
    </div>
</template>