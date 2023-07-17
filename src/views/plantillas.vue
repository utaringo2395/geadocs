<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Plantillas</h1>
            <p class="desc">Guías</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>Hemos desarrollado plantillas que sirven como ejemplos para facilitar la implementación de las distintas páginas. Las plantillas constan de diferentes estructuras, elementos y patrones.</p>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-12">
                        <table class="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th>Plantilla</th>
                                <th>Versión</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="mb-0">Plantilla Dependencias</p>
                                </td>
                                <td>
                                    <p class="mb-0">1.2</p>
                                </td>
                                <td>
                                    <button v-on:click="downloadDependencia()" class="btn btn-outline-dark mx-2">
                                        Descargar plantilla
                                    </button>
                                    <!-- <button @click="downloadWithVueResource" class="btn btn-outline-dark mx-2">Descargar plantilla</button> -->
                                    <!-- <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantilladependencias.rar" download class="btn btn-outline-dark mx-2">Descargar plantilla
                                    </a> -->
                                    <!-- <a v-bind:href="item.loc" download>Descargar Plat</a> -->
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="mb-0">Plantilla Simple</p>
                                </td>
                                <td>
                                    <p class="mb-0">1.0</p>
                                </td>
                                <td>
                                    <button v-on:click="downloadSimple()" class="btn btn-outline-dark mx-2">
                                        Descargar plantilla
                                    </button>
                                    <!-- <a href="http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantillaSimple.rar" download class="btn btn-outline-dark mx-2">Descargar plantilla
                                    </a> -->
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
        
    </div>
</template>

<script>
export default {
    el: '#app',
    data() {
        return {    
            // url:'http://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantilladependencias.rar'
        }
    },
    
    methods: {
        downloadDependencia(){
            const link = document.createElement('a');
            link.href = 'https://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantilladependencias.rar';
            link.setAttribute('download', 'plantilladependencias.rar'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }, 
        downloadSimple(){
            const link = document.createElement('a');
            link.href = 'https://desarrolloweb.aguascalientes.gob.mx/geaDs/Descargas/plantillaSimple.rar';
            link.setAttribute('download', 'plantillaSimple.rar'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }, 

    }
};
</script>