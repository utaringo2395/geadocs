<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Color</h1>
            <p class="desc">SISTEMA DE DISEÑO DEL GOBIERNO DEL ESTADO DE AGUASCALIENTES</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="titulo">Introducción</p>
                        <p>Existen algunos colores que por sus caracteristicas tuvieron que ser modificados para poder funcionar correctamente en pantalla, el color en web es diferente a un sistema de color para imprenta, no solo se usan para resaltar elementos o hacer el sitio más atractivo los colores pueden cambiar al reaccionar con un elemento para comunicarse con el usuario e indicarle que el elemento es interactivo.</p>

                        <p>Es por esto que se definio en base a los colores oficiales un sistema de colores para el portal del estado de Aguascalientes que cumpla cuando menos a la regla <b>AA de contraste</b>, basado en los lineamientos de la <a href="https://www.w3.org/WAI/standards-guidelines/wcag/es">WCAG</a></p>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Funcionamiento del color</p>
                        <p>El color en el sistema de diseño GEA cuenta con diferentes clases que facilitan su uso la clase <b>.bg_xx</b> para fondos y la clase <b>.c_xx</b> para color, xx = color que se desee utilizar.</p>
                        <p class="subtitulo c_negro">Lighten y Darken</p>
                        <p>Para usar estas propiedades se generaron prefijos que tienen que añadirse despues de la clase del color elegido <b>".bg_xx"</b>, estos prefijos son <b>-light, -light-2</b> y <b>-darken, -darken-2</b>.</p>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="titulo">Base</p>
                        <p class="subtitulo c_negro">Principal</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBoxLined"></div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBoxLined"></div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_base"></div>
                                <p class="fw-bold mb-2">
                                    .bg_base <br/>
                                    .c_base
                                </p>
                                <p class="c_gris mb-2">
                                    $color-base
                                </p>
                                <p class="c_gris">
                                    #2F328A
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_base-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_base-light <br/>
                                    .c_base-light
                                </p>
                                <p class="c_gris">
                                    #464AC0
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_base-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_base-light-2 <br/>
                                    .c_base-light-2
                                </p>
                                <p class="c_gris">
                                    #7F81D3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Cyan</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_1-darken-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_1-darken-2 <br/>
                                    .c_1-darken-2
                                </p>
                                <p class="c_gris">
                                    #136B8F
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_1-darken"></div>
                                <p class="fw-bold mb-2">
                                    .bg_1-darken <br/>
                                    .c_1-darken
                                </p>
                                <p class="c_gris">
                                    #198CBC
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_1"></div>
                                <p class="fw-bold mb-2">
                                    .bg_1 <br/>
                                    .c_1
                                </p>
                                <p class="c_gris mb-2">
                                    $color-1
                                </p>
                                <p class="c_gris">
                                    #21B4E9
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_1-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_1-light <br/>
                                    .c_1-light
                                </p>
                                <p class="c_gris">
                                    #96D7F1
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_1-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_1-light-2 <br/>
                                    .c_1-light-2
                                </p>
                                <p class="c_gris">
                                    #F0F9FD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Rosa</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_2-darken-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_2-darken-2 <br/>
                                    .c_2-darken-2
                                </p>
                                <p class="c_gris">
                                    #6B0B3F
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_2-darken"></div>
                                <p class="fw-bold mb-2">
                                    .bg_2-darken <br/>
                                    .c_2-darken
                                </p>
                                <p class="c_gris">
                                    #990F5A
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_2 <br/>
                                    .c_2
                                </p>
                                <p class="c_gris mb-2">
                                    $color-2
                                </p>
                                <p class="c_gris">
                                    #DF1683
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_2-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_2-light <br/>
                                    .c_2-light
                                </p>
                                <p class="c_gris">
                                    #F06BB3
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_2-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_2-light-2 <br/>
                                    .c_2-light-2
                                </p>
                                <p class="c_gris">
                                    #FAC7E3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Amarillo</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_3-darken-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_3-darken-2 <br/>
                                    .c_3-darken-2
                                </p>
                                <p class="c_gris">
                                    #665200
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_3-darken"></div>
                                <p class="fw-bold mb-2">
                                    .bg_3-darken <br/>
                                    .c_3-darken
                                </p>
                                <p class="c_gris">
                                    #B39000
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_3"></div>
                                <p class="fw-bold mb-2">
                                    .bg_3 <br/>
                                    .c_3
                                </p>
                                <p class="c_gris mb-2">
                                    $color-3
                                </p>
                                <p class="c_gris">
                                    #FFCD00
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_3-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_3-light <br/>
                                    .c_3-light
                                </p>
                                <p class="c_gris">
                                    #FFDC4D
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_3-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_3-light-2 <br/>
                                    .c_3-light-2
                                </p>
                                <p class="c_gris">
                                    #FFEB99
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Verde</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_4-darken-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_4-darken-2 <br/>
                                    .c_4-darken-2
                                </p>
                                <p class="c_gris">
                                    #665200
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_4-darken"></div>
                                <p class="fw-bold mb-2">
                                    .bg_4-darken <br/>
                                    .c_4-darken
                                </p>
                                <p class="c_gris">
                                    #B39000
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_4"></div>
                                <p class="fw-bold mb-2">
                                    .bg_4 <br/>
                                    .c_4
                                </p>
                                <p class="c_gris mb-2">
                                    $color-4
                                </p>
                                <p class="c_gris">
                                    #FFCD00
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_4-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_4-light <br/>
                                    .c_4-light
                                </p>
                                <p class="c_gris">
                                    #FFDC4D
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_4-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_4-light-2 <br/>
                                    .c_4-light-2
                                </p>
                                <p class="c_gris">
                                    #FFEB99
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="subtitulo c_negro">Morado</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_6-darken-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_6-darken-2 <br/>
                                    .c_6-darken-2
                                </p>
                                <p class="c_gris">
                                    #420C8E
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_6-darken"></div>
                                <p class="fw-bold mb-2">
                                    .bg_6-darken <br/>
                                    .c_6-darken
                                </p>
                                <p class="c_gris">
                                    #6312D4
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_6"></div>
                                <p class="fw-bold mb-2">
                                    .bg_6 <br/>
                                    .c_6
                                </p>
                                <p class="c_gris mb-2">
                                    $color-6
                                </p>
                                <p class="c_gris">
                                    #8B44EF
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_6-light"></div>
                                <p class="fw-bold mb-2">
                                    .bg_6-light <br/>
                                    .c_6-light
                                </p>
                                <p class="c_gris">
                                    #B78AF5
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_6-light-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_6-light-2 <br/>
                                    .c_6-light-2
                                </p>
                                <p class="c_gris">
                                    #E2D1FB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="titulo">Fondos</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_morado"></div>
                                <p class="fw-bold mb-2">
                                    .bg_morado <br/>
                                </p>
                                <p class="c_gris mb-2">
                                    $bg-morado
                                </p>
                                <p class="c_gris">
                                    #EDE8FB
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_cyan"></div>
                                <p class="fw-bold mb-2">
                                    .bg_cyan <br/>
                                </p>
                                <p class="c_gris mb-2">
                                    $bg-cyan
                                </p>
                                <p class="c_gris">
                                    #D3F2FF
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_rosa"></div>
                                <p class="fw-bold mb-2">
                                    .bg_rosa <br/>
                                </p>
                                <p class="c_gris mb-2">
                                    $bg-rosa
                                </p>
                                <p class="c_gris">
                                    #FFEBF6
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_verde"></div>
                                <p class="fw-bold mb-2">
                                    .bg_verde <br/>
                                </p>
                                <p class="c_gris mb-2">
                                    $bg-verde
                                </p>
                                <p class="c_gris">
                                    #EEFDDB
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <br>
                <div class="row mt-2 mb-2">
                    <div class="col-lg-12">
                        <p class="titulo">Degradados</p>
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-1"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-1 <br/>
                                </p>
                                <p class="c_gris">
                                    #425AD3 - #B2DDF3
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-2"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-2 <br/>
                                </p>
                                <p class="c_gris">
                                    #75D5F4 - #B8E6F5
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-3"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-3 <br/>
                                </p>
                                <p class="c_gris">
                                    #293F9A - #16B4E9
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-4"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-4 <br/>
                                </p>
                                <p class="c_gris">
                                    #006586 - #16B5E9
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-5"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-5 <br/>
                                </p>
                                <p class="c_gris">
                                    #445CD4 - #BBC5F9
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-6"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-6 <br/>
                                </p>
                                <p class="c_gris">
                                    #A40361 - #F053AF
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-7"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-7 <br/>
                                </p>
                                <p class="c_gris">
                                    #F36800 - #F6B604
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-8"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-8 <br/>
                                </p>
                                <p class="c_gris">
                                    #779C01 - #C3EC45
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-9"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-9 <br/>
                                </p>
                                <p class="c_gris">
                                    #6B53FF - #C9D1FF
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-10"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-10 <br/>
                                </p>
                                <p class="c_gris">
                                    #F1F8FF - #A3D1FF
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-4 col-6 mb-3">
                                <div class="cBox bg_dg-11"></div>
                                <p class="fw-bold mb-2">
                                    .bg_dg-11 <br/>
                                </p>
                                <p class="c_gris">
                                    #5AC2A5 - #B1E9DA
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>