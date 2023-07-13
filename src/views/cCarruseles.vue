<template>
    <div>
        <header class="headerSec_1">
            <h1 class="titulo">Carruseles</h1>
            <p class="desc">Componentes</p>
        </header>

        <main>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-12">
                        <p>La librería utilizada para generar los carruseles es Swiper, el uso de esa librería es relativamente sencilla, y se pueden incorporar diferentes elementos, como video, imágenes y contenido html (Se actualizara a la versión 6.8.1)</p>
                        <p>Swiper ya viene preinstalando en el servicio del portal (GEA.js)</p>
                        <div class="make-snippet" id="notShow">
                            <swiper
                            :pagination="true"
                            :navigation="true" 
                            :modules="modules" 
                            class="mySwiper"
                        >
                            <swiper-slide>Slide 1</swiper-slide>
                            <swiper-slide>Slide 2</swiper-slide>
                            <swiper-slide>Slide 3</swiper-slide>
                        </swiper>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Estructura de Carrusel</p>
                        <p>La estructura se compone por el siguiente codigo Html:</p>
                        <p><b>.swiper-container : </b>es el identificador de nuestro slider, puede cambiar de nombre sobre todo si hay mas de un slider en nuestro archivo.</p>
                        <p><b>.swiper-wrapper : </b>es el envolvente de nuestras slides.</p>
                        <p><b>.swiper-slide : </b>es cada página de nuestro carrusel.</p>
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"> <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- contenedor principal --&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-container sliderGea&quot;</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- un envolvente necesario para identificar el contendio del carrusel--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-wrapper&quot;</span>&gt;</span>
        <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- Slides --&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-slide&quot;</span>&gt;</span>Slide 1<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-slide&quot;</span>&gt;</span>Slide 2<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-slide&quot;</span>&gt;</span>Slide 3<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- Paginación--&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-pagination&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- botones de navegacion --&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-button-prev&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-button-next&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    
    <span style="color:rgb(117, 113, 94); font-weight:400;">&lt;!-- scrollbar --&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;swiper-scrollbar&quot;</span>&gt;</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
                    </div>
                </div>
                <div class="row mt-4 mb-3">
                    <div class="col-lg-12">
                        <p class="titulo">Javascript</p>
                        <p>Nuestro código HTML no funciona por si solo, hay que hacer un par de configuraciones extra en nuesto documento, esta configución iría dentro de una etiqueta <b>script</b> dentro de nuestro <b>index.html</b></p>
                        <p>const <b>swiper</b> el nombre de nuestra "const" puede ser cualquiera en caso de tener otro slider es necesario que el nombre sea unico por cada slider.</p>
                        <p>La clase <b>.swiper-container</b> es el nombre de nuestro slider (el identificador de nuestro html)</p>
                        <p><b>Direction : </b>direccion de nuestro slider puede ser horizontal o vertical.</p>
                        <p><b>Loop : </b>si queremos que se repita la primer slide al llegar al finar los valores son true para si o false para no.</p>
                        <p><b>Pagination, navigation, scrollbar : </b>si queremos desplegar una paginación, flechas de navegación o un scrollbar ponemos la clase que identifique este elemento dentro de nuesto HTML.</p>    
                        <pre><code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">script</span>&gt;</span><span style="color:rgb(221, 221, 221); font-weight:400;">
<span style="color:rgb(117, 113, 94); font-weight:400;">// Usamos la configuración de gea.iwin</span>
gea.<span class="hljs-title function_">iwin</span>(<span style="color:rgb(249, 38, 114); font-weight:700;">function</span> (<span style="color:rgb(221, 221, 221); font-weight:400;"></span>) {
    <span style="color:rgb(117, 113, 94); font-weight:400;">// Y colocamos nuestra configuración de swiper</span>
    <span style="color:rgb(249, 38, 114); font-weight:700;">const</span> swiper = <span style="color:rgb(249, 38, 114); font-weight:700;">new</span> <span class="hljs-title class_">Swiper</span>(<span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;.swiper-container&#x27;</span>, {
        <span style="color:rgb(117, 113, 94); font-weight:400;">// Parámetros opcionales</span>
        <span style="color:rgb(221, 221, 221); font-weight:400;">direction</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;horizontal&#x27;</span>,
        <span style="color:rgb(221, 221, 221); font-weight:400;">loop</span>: <span style="color:rgb(249, 38, 114); font-weight:700;">true</span>,
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">// Si necesitamos paginación</span>
        <span style="color:rgb(221, 221, 221); font-weight:400;">pagination</span>: {
            <span style="color:rgb(221, 221, 221); font-weight:400;">el</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;.swiper-pagination&#x27;</span>,
        },
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">// Flechas de navegación</span>
        <span style="color:rgb(221, 221, 221); font-weight:400;">navigation</span>: {
            <span style="color:rgb(221, 221, 221); font-weight:400;">nextEl</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;.swiper-button-next&#x27;</span>,
            <span style="color:rgb(221, 221, 221); font-weight:400;">prevEl</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;.swiper-button-prev&#x27;</span>,
        },
        
        <span style="color:rgb(117, 113, 94); font-weight:400;">// Y si necesitamos un scrollbar</span>
        <span style="color:rgb(221, 221, 221); font-weight:400;">scrollbar</span>: {
            <span style="color:rgb(221, 221, 221); font-weight:400;">el</span>: <span style="color:rgb(166, 226, 46); font-weight:400;">&#x27;.swiper-scrollbar&#x27;</span>,
        },
    });
});
</span><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">script</span>&gt;</span></code></pre>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination],
      };
    },
  };
</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;

    .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
            background: #EDE8FB;
            color: #2F328A;
            font-size: 2rem;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>

