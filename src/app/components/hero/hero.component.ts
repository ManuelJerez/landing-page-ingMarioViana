import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80');"
        role="img"
        aria-label="Obra de construcción estructural"
      ></div>

      <!-- Dark gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-amber-950/60"></div>

      <!-- Subtle grid texture -->
      <div
        class="absolute inset-0 opacity-10"
        style="background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
               background-size: 40px 40px;"
      ></div>

      <!-- Content -->
      <div class="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        <!-- Eyebrow badge -->
        <div class="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30
                    text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-widest
                    px-4 py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Ingeniero Civil Certificado — Potosí - Bolivia
        </div>

        <!-- Main heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white
                   leading-tight tracking-tight mb-6 sm:mb-8">
          Cálculo Estructural
          <span class="block text-amber-400">y Supervisión</span>
          <span class="block">de Obras</span>
        </h1>

        <!-- Subtitle -->
        <p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 sm:mb-12">
          Diseño y verificación de estructuras seguras, eficientes y normadas bajo
          la <strong class="text-white font-semibold">Norma Boliviana del Hormigón Armado (NB 1225001)</strong>.
          Supervisión técnica en campo para garantizar calidad y plazos en tu proyecto.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <!-- Primary CTA -->
          <a
            href="#contacto"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2
                   bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold
                   text-base px-8 py-4 rounded-xl shadow-lg shadow-amber-500/30
                   transition-all duration-200 hover:shadow-amber-400/40 hover:scale-105
                   active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-5 h-5 flex-shrink-0" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586
                   a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Solicitar Cotización
          </a>

          <!-- Secondary CTA -->
          <a
            href="#proyectos"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2
                   bg-white/10 hover:bg-white/20 text-white font-semibold
                   text-base px-8 py-4 rounded-xl border border-white/25
                   backdrop-blur-sm transition-all duration-200 hover:scale-105
                   active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-5 h-5 flex-shrink-0" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586
                   a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6
                   a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Ver Proyectos
          </a>
        </div>

        <!-- Trust indicators -->
        <div class="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center
                    gap-6 sm:gap-10 text-gray-400 text-sm">
          @for (stat of stats; track stat.label) {
            <div class="flex flex-col items-center gap-1">
              <span class="text-2xl sm:text-3xl font-extrabold text-white">{{ stat.value }}</span>
              <span class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{{ stat.label }}</span>
            </div>
            @if (!$last) {
              <div class="hidden sm:block w-px h-10 bg-white/15"></div>
            }
          }
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
        <span class="text-xs uppercase tracking-widest">Explorar</span>
        <div class="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-1.5">
          <div class="w-1 h-2.5 bg-amber-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  readonly stats = [
    { value: '+50',   label: 'Proyectos Entregados' },
    { value: '+10',   label: 'Años de Experiencia'  },
    { value: '100%',  label: 'Clientes Satisfechos' },
  ];
}
