<template>
  <div>
    <header class="headerSec_1">
      <h1 class="titulo">Guías</h1>
      <p class="desc">Google Analytics</p>
    </header>

    <main>
      <div class="container my-5">
        <div class="row mb-4">
          <div class="col-lg-12">
            <h1 class="subtitulo c_negro">
              Scripts para medir las analiticas dentro de los sitios web
            </h1>
            <p>
              Google Analytics sirve para medir diferentes estadísticas dentro del portal y de los
              diferentes aplicativos que tengan a su cargo, en caso de ya tenerlo revisar que sea el
              código que le corresponde.
            </p>
            <hr class="my-4" />
            <p>Se aplica a nivel pagemaster:</p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">www</p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;script async
                src="https://www.googletagmanager.com/gtag/js?id=UA-102112885-1"&gt;&lt;/script&gt;
                &lt;script&gt;
                window.dataLayer = window.dataLayer || []; function
                gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
                'UA-102112885-1'); &lt;/script&gt;
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">Egobierno2</p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;script async src="https://www.googletagmanager.com/gtag/js?id=UA-102112885-2"&gt;&lt;/script&gt;
                &lt;script&gt;
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-102112885-2'); &lt;/script&gt;
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">Eservicios2</p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;script async src="https://www.googletagmanager.com/gtag/js?id=UA-116517396-1"&gt;&lt;/script&gt;
                &lt;script&gt;  
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-116517396-1'); &lt;/script&gt;
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <p class="titulo">ICA</p>
            <div id="notShow">
              <div class="make-snippet">
                &lt;script async src="https://www.googletagmanager.com/gtag/js?id=UA-102112885-2"&gt;&lt;/script&gt;
                &lt;script&gt;  
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-102112885-2');&lt;/script&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
