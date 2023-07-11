<template>
    <div>
      <header class="headerSec_1">
        <h1 class="titulo">JavaScript</h1>
        <p class="desc">Guías</p>
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
                    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);"><span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">script</span>&gt;</span><span class="actionscript">
    gea.iwin(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">function</span> <span class="hljs-params">()</span> </span>{
            <span class="hljs-comment" style="color: rgb(117, 113, 94);">/* ********* Inserta tu codigo javasctipt ********** */</span>
       
            <span class="hljs-comment" style="color: rgb(117, 113, 94);">/* **************************************************** */</span>
     });
</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">script</span>&gt;</span></span></pre>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-12">
                    <p class="subtitulo c_negro">Ejemplo con jQuery</p>
                    <pre class="hljs" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(39, 40, 34); color: rgb(221, 221, 221);"><span class="xml"><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;<span class="hljs-name" style="color: rgb(249, 38, 114);">script</span>&gt;</span><span class="javascript">
    gea.iwin(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">function</span>(<span class="hljs-params"></span>) </span>{
      
        $(<span class="hljs-built_in" style="color: rgb(166, 226, 46);">document</span>).ready(<span class="hljs-function"><span class="hljs-keyword" style="color: rgb(249, 38, 114); font-weight: 700;">function</span>(<span class="hljs-params">e</span>) </span>{
            <span class="hljs-built_in" style="color: rgb(166, 226, 46);">console</span>.log(<span class="hljs-string" style="color: rgb(166, 226, 46);">"Se ha activado jquery"</span>);
        });
       
    });
</span><span class="hljs-tag" style="color: rgb(249, 38, 114);">&lt;/<span class="hljs-name" style="color: rgb(249, 38, 114);">script</span>&gt;</span></span></pre>
                </div>
            </div>
          
        </div>
      </main>
    </div>
  </template>
  

