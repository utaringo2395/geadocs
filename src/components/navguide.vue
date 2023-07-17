<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-lg-top navbar-dark bg-dark">
            <div class="container-fluid flex-lg-column align-items-start">
                <a class="navbar-brand" href="#">GEA DS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link active">Inicio</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="criterios" class="nav-link">Criterios de diseño</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="librerias" class="nav-link">Librerías</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Guías
                            </a>
                            <ul class="dropdown-menu">
                                <li><RouterLink to="guiaConfig" class="nav-link dropdown-link">Configuración</RouterLink></li>
                                <li><RouterLink to="guiaGA" class="nav-link dropdown-link">Google Analytics</RouterLink></li>
                                <li><RouterLink to="guiaJS" class="nav-link dropdown-link">JavaScript</RouterLink></li>
                                <li><RouterLink to="guiaPlantillas" class="nav-link dropdown-link">Plantillas para dependencias</RouterLink></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="plantillas" class="nav-link">Plantillas</RouterLink>
                        </li>  
                        <li class="nav-item">
                            <RouterLink to="color" class="nav-link">Color</RouterLink>
                        </li>  
                        <li class="nav-item">
                            <RouterLink to="texto" class="nav-link">Texto</RouterLink>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Iconos
                            </a>
                            <ul class="dropdown-menu">
                                <li><RouterLink to="icIconify" class="nav-link dropdown-link">Iconify</RouterLink></li>
                                <li><RouterLink to="icPortal" class="nav-link dropdown-link">Portal GEA</RouterLink></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Componentes
                            </a>
                            <ul class="dropdown-menu">
                                <li><RouterLink to="cAcordion" class="nav-link dropdown-link">Acordiones</RouterLink></li>
                                <!-- <li><RouterLink to="/" class="nav-link dropdown-link">Alertas</RouterLink></li> -->
                                <li><RouterLink to="cBotones" class="nav-link dropdown-link">Botones</RouterLink></li>
                                <!-- <li><RouterLink to="/" class="nav-link dropdown-link">Banners</RouterLink></li> -->
                                <li><RouterLink to="cCartas" class="nav-link dropdown-link">Cartas</RouterLink></li>
                                <li><RouterLink to="cCarruseles" class="nav-link dropdown-link">Carruseles</RouterLink></li>
                                <li><RouterLink to="cHeaders" class="nav-link dropdown-link">Headers</RouterLink></li>
                                <li><RouterLink to="cFooter" class="nav-link dropdown-link">Footer</RouterLink></li>
                                <li><RouterLink to="cNavbars" class="nav-link dropdown-link">Navbars</RouterLink></li>
                                <li><RouterLink to="cSidebar" class="nav-link dropdown-link">Sidebar</RouterLink></li>
                                <!-- <li><RouterLink to="/" class="nav-link dropdown-link">Sidebars</RouterLink></li> -->
                            </ul>
                        </li>
                        <!-- <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Formularios</RouterLink>
                        </li>  -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.navbar-brand {
    font-weight: 700;
}
.nav-item {
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #21c0b0;
    }

    .nav-link {
        color: #fff;
    }

    .nav-link.dropdown-link {
        color: #000;
    }
}

</style>