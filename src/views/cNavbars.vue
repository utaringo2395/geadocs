<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Barra de navegación</h1>
            <p class="desc">Componentes</p>
        </header>   

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="titulo">Barra de navegación principal</p>
                        <p>Esta barra de navegación siempre está presente en nuestras plantillas para todas las páginas que se encuentren en <b>aguascalientes.gob.mx</b></p>
                        <p>En nuestra <RouterLink to="plantillas">Plantilla para dependencias</RouterLink> siempre se va a encontrar como: </p>
                        <div class="make-snippet" id="notShow">
                            <nav class="sae navbar navbar-expand-lg navbar-dark">
                                <div class="container topNav">
                                    <div class="wrapperTop">
                                        <a href="#" target="_blank">
                                            <img src="https://eservicios2.aguascalientes.gob.mx/portalgea/images/logo.svg" alt="">
                                        </a>
                                    </div>
                                    <div class="linkstop">
                                        <div class="portalinks">
                                            <a href="#">
                                                <i aria-hidden="true" class="fas fa-phone mr-2 cc_pointer"></i>
                                                Directorio
                                            </a>
                                        </div> 
                                        <div class="social">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="bx:bxl-facebook" class="iconify" style="transform: rotate(360deg);">
                                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor"></path>
                                                </svg>
                                            </a> 
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="akar-icons:twitter-fill" class="iconify" style="transform: rotate(360deg);">
                                                    <path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"></path>
                                                </svg>
                                            </a> 
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="akar-icons:instagram-fill" class="iconify" style="transform: rotate(360deg);">
                                                    <path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clip-rule="evenodd"></path>
                                                </svg>
                                            </a> 
                                            <a href="#" class="d-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-inline="false" data-icon="ant-design:youtube-filled" class="iconify" style="transform: rotate(360deg);">
                                                    <path fill="currentColor" d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z"></path>
                                                </svg>
                                            </a>
                                        </div> 
                                        <div class="buscador">
                                            <input id="txtgeasearch" type="text" placeholder="BUSCAR" onkeyup="gea.isearch(this, 'txtgeasearch', 'dvgeasearch', 'mdlgeasearch', 1);" class="inputBlanco wIcono topSearch">
                                        </div> 
                                        <div id="spgeasearch" onclick="gea.isearch(this, 'txtgeasearch', 'dvgeasearch', 'mdlgeasearch', 1)" class="social" style="padding-left: 20px;">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="fa-solid:search" data-inline="false" class="iconify searchIcon" style="font-size: 20px; transform: rotate(360deg);">
                                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div> 
                                <div class="container">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target="#geaNav" aria-controls="geaNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler ms-auto">
                                        <span class="navbar-toggler-icon"></span>
                                    </button> 
                                    <div id="geaNav" class="collapse navbar-collapse">
                                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Trámites y servicios
                                                </a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Bolsa de trabajo</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">CURP</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Hoy se Compra/Proveedores</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Padrón de Inspectores y Visitadores</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Pago de impuestos</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Trámite de actas</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Ventanilla Única de Trámites</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Ventanilla Única Nacional</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Subastas</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Ver más...</a>
                                                    </li>
                                                </ul>
                                            </li> 
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Gobierno</a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Dependencias y Entidades</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Desarrollo Cívico</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Gobernadora y Gabinete</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Normateca</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Organigrama</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Periódico Oficial</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Plan Estatal de Desarrollo</a>
                                                    </li>
                                                </ul>
                                            </li> 
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Atención ciudadana</a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Buzón de Quejas y Sugerencias</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Directorio Telefónico</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Módulos Cajeros de Servicios de Gobierno</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Reportes y Denuncias</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Teléfonos de Emergencia</a>
                                                    </li>
                                                </ul>
                                            </li> 
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Estado</a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Acerca de Aguascalientes</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Archivo Histórico</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Historia de Aguascalientes</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Lugares Turísticos del Estado</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Mapas de Transporte Público</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Municipios</a>
                                                    </li>
                                                </ul>
                                            </li> 
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Temas de Interés</a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Campo</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Cultura</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Deportes</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Desarrollo Integral de la Familia</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Desarrollo Social</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Educación</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Mapas</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Medio Ambiente</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Radio y TV</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Salud</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Seguridad Pública</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Turismo</a>
                                                    </li>
                                                </ul>
                                            </li> 
                                            <li class="nav-item dropdown">
                                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="nav-link dropdown-toggle">Transparencia</a> 
                                                <ul aria-labelledby="navbarDropdown" class="dropdown-menu">
                                                    <li>
                                                        <a href="#" class="dropdown-item">Consejo de Armonización Contable</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Contabilidad Gubernamental</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Información Financiera</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Obligaciones Públicas de Información</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Obligaciones Públicas de Información (a partir del 2021)</a>
                                                    </li> 
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Solicitudes de Información (SISAI)</a>
                                                    </li> 
                                                    <li>
                                                        <a href="#" class="dropdown-item">Portal de Transparencia</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">body</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-sigla</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;SIGOD&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-css</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;N&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-vue</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;S&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-jquery</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;N&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-folder</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;SIGOD/js&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;appAgs&quot;</span>&gt;</span>
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- Barra de navegación --&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;hgea&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        
        
        
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;fgea&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">body</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Barra de navegación secundaria para dependencias</p>
                        <p>Esta barra de navegación se usa en las plantillas para las dependencias, que cuentan con secciones propias.</p>
                        <div class="make-snippet" id="notShow">
                            <div class="routerWrapper">
                                <router-link to="#">Principal </router-link>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ¿Quiénes somos?
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li>
                                        <a href="">Misión, Visión y Valores</a>
                                    </li>
                                    <li>
                                        <a href="">Organigrama</a>
                                    </li> 
                                    </ul>
                                </div>
                                <a href="">Sección</a>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                        <li>
                                            <a href="">Sección</a>
                                        </li>
                                        <li>
                                            <a href="">Sección</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Barra de navegación secundaria Dependencias--&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;routerWrapper&quot;</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Link hacia una sección interna de nuestra propia dependencia--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span> <span style="color:rgb(249, 38, 114); font-weight:400;">to</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>&gt;</span>Principal<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span>&gt;</span>
    
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Elemento con dropdown--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-toggle&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">role</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdownMenuLink1&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown&quot;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span>&gt;</span>
        ¿Quiénes somos?
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>

        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-menu&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-labelledby</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdownMenuLink1&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Link hacia una sección interna de nuestra propia dependencia--&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span> <span style="color:rgb(249, 38, 114); font-weight:400;">to</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>&gt;</span>Misión, Visión y Valores<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Hacia un link externo--&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;</span>Organigrama<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span> 
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Link hacia una sección interna de nuestra propia dependencia--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span> <span style="color:rgb(249, 38, 114); font-weight:400;">to</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>&gt;</span>Sección<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
    
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Elemento con dropdown--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-toggle&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">role</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdownMenuLink1&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown&quot;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span>&gt;</span>
        Dropdown
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-menu&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-labelledby</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdownMenuLink1&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Link hacia una sección interna de nuestra propia dependencia--&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span> <span style="color:rgb(249, 38, 114); font-weight:400;">to</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>&gt;</span>Sección<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!--Link hacia una sección interna de nuestra propia dependencia--&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">router-link</span> <span style="color:rgb(249, 38, 114); font-weight:400;">to</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;/&quot;</span>&gt;</span>Sección<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                        <p class="mt-5">Cuando empieza a haber más elementos de los que se pueden leer en primera instancia, así como dispositivos móviles, la barra de navegación comienza a tener un scroll horizontal</p>
                        <div class="make-snippet" id="notShow">
                            <div class="routerWrapper">
                                <router-link to="#">Principal </router-link>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ¿Quiénes somos?
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li>
                                        <a href="">Misión, Visión y Valores</a>
                                    </li>
                                    <li>
                                        <a href="">Organigrama</a>
                                    </li> 
                                    </ul>
                                </div>
                                <a href="">Sección 1</a>
                                <a href="">Sección 2 </a>
                                <a href="">Sección 3</a>
                                <a href="">Sección 4</a>
                                <a href="">Sección 5</a>
                                <a href="">Sección 6</a>
                                <a href="">Sección 7</a>
                                <a href="">Sección 8</a>
                                <a href="">Sección 9</a>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                        <li>
                                            <a href="">Sección</a>
                                        </li>
                                        <li>
                                            <a href="">Sección</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="alert alert-warning" role="alert">
                           <span class="iconify me-2" data-inline="true" data-icon="uiw:warning" style="font-size: 20px;"></span>Se recomienda tener nombres cortos para las secciones, y utilizar los elementos de <b>dropdown</b> para optimizar la organización de la barra de navegación.
                        </div>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Barra de navegación sistemas</p>
                        <p>Esta cabecera se usa exclusivamente para las páginas de las dependencias.</p>
                        <div class="make-snippet" id="notShow">
                            <nav class="navbar navbarSistemas navbar-expand-lg bg-dark-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand nav-titulo" href="#">Nombre del Sistema</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                                            <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#">Link 1</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">Link 2</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">
                                            dropdown
                                            </a>
                                                <ul class="dropdown-menu" aria-labelledby="dropdown04">
                                                    <li>
                                                        <a class="dropdown-item" href="#">Link Dropdown</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">nav</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbar navbarSistemas navbar-expand-lg bg-dark-light&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;container-fluid&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbar-brand nav-titulo&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;</span>Nombre del Sistema<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">button</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbar-toggler&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">type</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;collapse&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-target</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#navbarTogglerDemo02&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-controls</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbarTogglerDemo02&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-label</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;Toggle navigation&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">span</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbar-toggler-icon&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">span</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">button</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;collapse navbar-collapse&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbarTogglerDemo02&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;navbar-nav ms-auto mb-2 mb-md-0&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-item&quot;</span>&gt;</span>
                   <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-link&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-current</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;page&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;</span>Link 1<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-item&quot;</span>&gt;</span>
                   <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-link&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;</span>Link 2<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-item dropdown&quot;</span>&gt;</span>
                   <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;nav-link dropdown-toggle&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown04&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span>&gt;</span>
                   dropdown
                   <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-menu&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-labelledby</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown04&quot;</span>&gt;</span>
                         <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">a</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;dropdown-item&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">href</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#&quot;</span>&gt;</span>Link Dropdown<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">a</span>&gt;</span>
                         <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
                    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">ul</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">nav</span>&gt;</span></code></pre>
                    </div>
                </div>
            </div>
        </main>


    </div>
</template>