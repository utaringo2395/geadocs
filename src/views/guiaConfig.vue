<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Guías</h1>
            <p class="desc">Configuración</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row mb-4">
                    <div class="col-lg-12">
                        <h1 class="subtitulo c_negro">A continuación se describe algunas de las configuraciones de las plantillas.</h1>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Script GEA</p>
                        <div id="notShow">
                            <div class="make-snippet">
                                &lt;script src="https://eservicios2.aguascalientes.gob.mx/portalgea/js/geavue.js"&gt;&lt;/script&gt;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Script Sistemas</p>
                        <div id="notShow">
                            <div class="make-snippet">
                                &lt;script src="https://eservicios2.aguascalientes.gob.mx/portalgea/js/mainsysgea.js"&gt;&lt;/script&gt;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Atributos DATA</p>
                        <p>Dentro de la etiqueta Body puede encontrar los atributos data-x que configuran diferentes caracteristicas del portal. Para habilitar algunos de estos atributos es necesario colocar la letra <b>S</b> para Si o la letra <b>N</b> para no según sea necesario, a continuación puede ver un ejemplo de su uso y su descripción.</p>
                        <div id="notShow">
                            <div class="make-snippet">
                                &lt;body 
                                data-sigla=""
                                data-css="N"
                                data-vue="S"
                                data-jquery="N"
                                data-folder="js"&gt;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Descripción de atributos</p>
                        <br>
                        <p class="subtitulo c_negro">Data-sigla</p>
                        <p><b>data-sigla="" - </b>Este atributo es necesario para filtrar cierta información y es importante que este presente en las plantillas donde se necesite esta infomación, por ejemplo en la plantilla "Dependencia", donde el atributo sirve para indexar información de contacto, direcciones, logotipos, formularios de contacto etc.. por dependencia.</p>
                        <p><b>Ej. data-sigla="DIF" este ejemplo mostraría información relacionada al DIF en la plantilla</b></p>
                        <hr class="my-4">

                        <p class="subtitulo c_negro">Data-css</p>
                        <p><b>data-css="" - </b>Este atributo es necesario para descargar el nuevo estilo del portal. los valores que puede tener es S o N. Uso en todas las plantillas.</p>
                        <hr class="my-4">

                        <p class="subtitulo c_negro">Data-vue y Data-folder</p>
                        <p><b>data-vue="" - </b>Este atributo es necesario para la plantilla "dependencia" y nos permite hacer uso de Vue y diferentes componentes precargados que vienen en las plantillas. los valores que puede tener es S o N. Su uso es unicamente necesario en las plantillas para dependencias puede no hacer uso de la librería en otras secciones del portal.</p>
                        <p><b>data-folder="" - </b>En caso de utilizar Vue es necesario configurar un folder de donde el sistema cargue los diferentes archivos js necesarios para su funcionamiento. valor por default "js" (hace referencia al folder js dentro de la carpeta de su dependencia.), Uso solamente si esta utilizando Vue.</p>
                        <hr class="my-4">

                        <p class="subtitulo c_negro">Data-jquery</p>
                        <p><b>data-jquery="" - </b>Este Atributo permite el uso de jQuery 3.6.0, si usted necesita otra versión de jQuery deshabilite este parametro e instale la versión que necesita. Valores S o N, Uso sea necesario para el desarrollador.</p>
                        <hr class="my-4">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

