<template>
  <div>
    <header class="headerSec_1">
      <h1 class="titulo">Acordión</h1>
      <p class="desc">Componentes</p>
    </header>

    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-12">
            <p>Acordión de la librería de Bootstrap 5.</p>
            <p>
              Se agregó la clase <b>.subtitulo</b> en el tag de <b>&lt;button&gt;</b> , para
              modificar el estilo de texto en la cabecera del acordión.
            </p>
            <div class="make-snippet" id="notShow">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button subtitulo-sm mb-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion1"
                      aria-expanded="false"
                      aria-controls="accordion1"
                    >
                      Acordión 1
                    </button>
                  </h2>
                  <div
                    id="accordion1"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc
                        aliquet bibendum enim facilisis gravida neque convallis.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button subtitulo-sm mb-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion2"
                      aria-expanded="false"
                      aria-controls="accordion2"
                    >
                      Acordión 2
                    </button>
                  </h2>
                  <div
                    id="accordion2"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc
                        aliquet bibendum enim facilisis gravida neque convallis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <pre>
 <code id="htmlViewer" style="color:rgb(221, 221, 221); font-weight:400;background-color:rgb(39, 40, 34);background:rgb(39, 40, 34);display:block;padding: .5em;"><span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordionExample&quot;</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-item&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-header&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;headingOne&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">button</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-button subtitulo-sm mb-0 collapsed&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">type</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;collapse&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-target</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#accordion1&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">aria-controls</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion1&quot;</span>&gt;</span>
              Acordión 1
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">button</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion1&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-collapse collapse&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-labelledby</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;headingOne&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-parent</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#accordionExample&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-body&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc
                    aliquet bibendum enim facilisis gravida neque convallis.
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>

    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-item&quot;</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-header&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;headingTwo&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">button</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-button subtitulo-sm mb-0 collapsed&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">type</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;button&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-toggle</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;collapse&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-target</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#accordion1&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">aria-expanded</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;false&quot;</span> 
            <span style="color:rgb(249, 38, 114); font-weight:400;">aria-controls</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion2&quot;</span>&gt;</span>
              Acordión 1
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">button</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">h2</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">id</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion2&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-collapse collapse&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">aria-labelledby</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;headingTwo&quot;</span> <span style="color:rgb(249, 38, 114); font-weight:400;">data-bs-parent</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;#accordionExample&quot;</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">div</span> <span style="color:rgb(249, 38, 114); font-weight:400;">class</span>=<span style="color:rgb(166, 226, 46); font-weight:400;">&quot;accordion-body&quot;</span>&gt;</span>
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc
                    aliquet bibendum enim facilisis gravida neque convallis.
                <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">p</span>&gt;</span>
            <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
        <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
    <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span>
  <span style="color:rgb(249, 38, 114); font-weight:400;">&lt;/<span style="color:rgb(249, 38, 114); font-weight:400;">div</span>&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
