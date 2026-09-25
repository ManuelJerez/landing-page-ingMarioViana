import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
    <section id="servicios" class="w-full bg-gray-950 py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-14">
          <span class="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            ¿Qué ofrezco?
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Servicios de Ingeniería
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Soluciones técnicas especializadas para cada etapa de tu proyecto,
            desde el diseño hasta la entrega final de obra.
          </p>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (service of services; track service.id) {
            <div
              class="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6
                     hover:border-amber-500/50 hover:bg-gray-800/80
                     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                     hover:shadow-amber-500/10 cursor-default"
            >
              <!-- Icon wrapper -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                       bg-amber-500/10 border border-amber-500/20
                       group-hover:bg-amber-500/20 group-hover:border-amber-500/40
                       transition-all duration-300"
              >
                @switch (service.id) {
                  @case ('estructural') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-amber-400"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 21h18M9 3h6l2 6H7L9 3zM5 21V9h14v12M9 13h6M9 17h6" />
                    </svg>
                  }
                  @case ('supervision') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-amber-400"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
                           M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2
                           m-6 9l2 2 4-4" />
                    </svg>
                  }
                  @case ('bim') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-amber-400"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586
                           a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  @case ('consultoria') {
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-amber-400"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                    </svg>
                  }
                }
              </div>

              <!-- Title -->
              <h3 class="text-white font-bold text-base sm:text-lg leading-snug mb-2
                         group-hover:text-amber-300 transition-colors duration-200">
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300
                        transition-colors duration-200">
                {{ service.description }}
              </p>

              <!-- Bottom accent line -->
              <div
                class="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent
                       via-amber-500/0 to-transparent group-hover:via-amber-500/60
                       transition-all duration-300 rounded-full"
              ></div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  readonly services = [
    {
      id: 'estructural',
      title: 'Cálculo y Diseño Estructural',
      description:
        'Modelamiento y análisis sísmico de estructuras de concreto armado, acero y madera bajo la Norma E.030 y E.060 del RNE.',
    },
    {
      id: 'supervision',
      title: 'Supervisión y Control de Obras',
      description:
        'Control técnico en campo, gestión de calidad, revisión de partidas y conformidad de materiales durante la ejecución.',
    },
    {
      id: 'bim',
      title: 'Modelado BIM / Planos',
      description:
        'Elaboración de expedientes técnicos, planos estructurales, memorias descriptivas y modelos 3D en Revit y AutoCAD.',
    },
    {
      id: 'consultoria',
      title: 'Consultoría / Peritajes Técnicos',
      description:
        'Evaluación de daños estructurales, dictámenes periciales, revisión de proyectos existentes y asesoría ante entidades públicas.',
    },
  ];
}
