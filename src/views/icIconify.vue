<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Iconos</h1>
            <p class="desc">Iconify</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Iconify es un plugin que permite incoporar diversas librerías de iconos, como por ejemplo los iconos de Bootstrap, Font Awesome, Material design, feather icons... por mencionar las más conocidas, esto permite tener un mejor control sobre las librerias al mismo tiempo que se dispone de una amplia gama de opciones</p>
                        <p>La sintaxis es un poco diferente al momemento de usar Iconify respecto al uso nativo de las librerias antes mencionadas, a continuación puede ver algunos ejemplos junto con los iconos más utilizados en estas nuevas plantillas.</p>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p>Estos vienen incorporados por default en la plantilla y pude utilizarlos bajo la siguiente forma:<br/>
                        La clase iconify junto con las siguientes propiedades data-icon="Nombre-del-icono" para ver una lista completa con todas la librerías, da click <a href="https://icon-sets.iconify.design/">aquí.</a></p>
                        <div class="make-snippet" id="notShow">
                            <span class="iconify" data-icon="bi:calendar2-date-fill"></span>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">&lt;span <span class="hljs-class"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">class</span></span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"iconify"</span> data-icon=<span class="hljs-string" style="color: rgb(166, 226, 46);">"bi:calendar2-date-fill"</span>&gt;<span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span>&gt;</span></span></pre>
                        <br/>
                        <p>Estos iconos, tienen la propiedad de poder crecer o reducir su tamaño sin perder calidad, al igual que usar cualquier color por ejemplo:</p>
                        <div class="make-snippet" id="notShow">
                            <span class="iconify c_5" data-inline="false" data-icon="bi:calendar2-date-fill" style="font-size:80px;"></span>
                        </div>
                        <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);">&lt;span <span class="hljs-class"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">class</span></span>=<span class="hljs-string" style="color: rgb(166, 226, 46);">"iconify c_5"</span> data-inline=<span class="hljs-string" style="color: rgb(166, 226, 46);">"false"</span> data-icon=<span class="hljs-string" style="color: rgb(166, 226, 46);">"bi:calendar2-date-fill"</span> style=<span class="hljs-string" style="color: rgb(166, 226, 46);">"font-size:80px;"</span>&gt;<span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">span</span>&gt;</span></span></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12 text-center">
                        <img src="../assets/imgs/iconify.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>