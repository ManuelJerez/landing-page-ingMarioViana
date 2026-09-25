import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <section id="proyectos" class="w-full bg-gray-900 py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-14 sm:mb-18">
          <span class="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Portafolio
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proyectos Destacados
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Obras ejecutadas y en curso que reflejan el rigor técnico
            y la calidad de cada entrega.
          </p>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <div
              class="group relative rounded-2xl overflow-hidden bg-gray-800
                     border border-gray-700/50 hover:border-amber-500/40
                     shadow-lg hover:shadow-amber-500/10 hover:shadow-2xl
                     transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Image with overlay -->
              <div class="relative h-52 sm:h-56 overflow-hidden">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover transition-transform duration-500
                         group-hover:scale-105"
                  loading="lazy"
                />
                <!-- Dark gradient overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/90
                         via-gray-900/30 to-transparent"
                ></div>

                <!-- Status badge -->
                <span
                  class="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider
                         px-3 py-1 rounded-full border backdrop-blur-sm"
                  [class]="project.status === 'Finalizado'
                    ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                    : 'bg-amber-500/20 border-amber-400/40 text-amber-300'"
                >
                  @if (project.status === 'Finalizado') {
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 align-middle"></span>
                  } @else {
                    <span class="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse mr-1.5 align-middle"></span>
                  }
                  {{ project.status }}
                </span>

                <!-- Category chip -->
                <span
                  class="absolute top-3 left-3 text-xs font-semibold
                         px-2.5 py-1 rounded-lg bg-gray-950/60 text-gray-300
                         border border-gray-700/60 backdrop-blur-sm"
                >
                  {{ project.category }}
                </span>
              </div>

              <!-- Card body -->
              <div class="p-5">
                <h3 class="text-white font-bold text-base sm:text-lg leading-snug
                           group-hover:text-amber-300 transition-colors duration-200 mb-1">
                  {{ project.title }}
                </h3>

                <!-- Location -->
                <div class="flex items-center gap-1.5 text-gray-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 flex-shrink-0 text-amber-500/70"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243
                         a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{{ project.location }}</span>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class PortfolioComponent {
  readonly projects = [
    {
      title: 'Edificio Multifamiliar 8 Pisos',
      location: 'Cercado, Cochabamba',
      category: 'Residencial',
      status: 'Finalizado',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75',
    },
    {
      title: 'Puente Vehicular Estructural',
      location: 'Potosí',
      category: 'Infraestructura',
      status: 'Finalizado',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75',
    },
    {
      title: 'Nave Industrial — Planta Logística',
      location: 'Santa Cruz',
      category: 'Industrial',
      status: 'En ejecución',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75',
    },
    {
      title: 'Centro Comercial 3 Niveles',
      location: 'Tupiza, Potosí',
      category: 'Comercial',
      status: 'Finalizado',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=75',
    },
    {
      title: 'Edificio de Oficinas Corporativas',
      location: 'La Paz',
      category: 'Oficinas',
      status: 'En ejecución',
      image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&q=75',
    },
    {
      title: 'Planta de Tratamiento e Infraestructuras',
      location: 'Quillacollo, Cochabamba',
      category: 'Infraestructura',
      status: 'Finalizado',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=75',
    },
  ];
}
