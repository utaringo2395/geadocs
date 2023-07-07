<template>
    <div>
      <header class="headerSec_1">
        <h1 class="titulo">Guías</h1>
        <p class="desc">JavaScript</p>
      </header>
  
      <main>
        <div class="container my-5">
            <div class="row mb-4">
                <div class="col-lg-12">
                    <h1 class="subtitulo c_negro">
                        Función iwin.gea
                    </h1>
                    <p>
                        La Función iwin.gea revisa que las librerías se carguen de manera correcta, esto evita que existan errores a la hora de utilizar alguna de ellas, por eso es necesario escribir nuestro código js dentro de esta función.
                    </p>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-12">
                    <p class="titulo">js</p>
                    <div id="notShow">
                        <div class="make-snippet">
                            &lt;script&gt;
                                gea.iwin(function () {
                                <!--Inserta aquí tu código JavaScript-->
                                });
                            &lt;/script&gt;
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-12">
                    <p class="subtitulo c_negro">Ejemplo con jQuery</p>
                    <div id="notShow">
                        <div class="make-snippet">
                            &lt;script&gt;
                                gea.iwin(function () {
                                    $(document).ready(function(e) {
                                        console.log("Se ha activado jquery");});
                                });
                            &lt;/script&gt;
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
      </main>
    </div>
  </template>
  