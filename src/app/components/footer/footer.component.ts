import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="w-full bg-gray-950 border-t border-gray-800">

      <!-- Main footer body -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <!-- ── Col 1: Brand ── -->
          <div class="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <a href="#" class="flex items-center gap-2 w-fit">
              <span class="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 21h18M9 3h6l2 6H7L9 3zM5 21V9h14v12M9 13h6M9 17h6" />
                </svg>
              </span>
              <span class="text-white font-bold text-lg tracking-tight">Ing. Civil</span>
            </a>

            <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialista en cálculo estructural y supervisión de obras bajo el
              Reglamento Nacional de Edificaciones. Potosí, Bolivia.
            </p>

            <!-- WhatsApp pill -->
            <a
              href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 w-fit bg-green-500/10 hover:bg-green-500/20
                     border border-green-500/30 text-green-400 text-sm font-semibold
                     px-4 py-2 rounded-full transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
                  -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
                  -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
                  .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
                  -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
                  -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
                  5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085
                  1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.529 5.845L.057 23.571
                  a.75.75 0 00.922.922l5.726-1.472A11.95 11.95 0 0012 24c6.627 0 12-5.373
                  12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.492-5.21-1.355l-.374-.214
                  -3.996 1.027 1.027-3.996-.214-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12
                  2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              +591 99 999 999
            </a>
          </div>

          <!-- ── Col 2: Services ── -->
          <div class="flex flex-col gap-4">
            <h4 class="text-white font-bold text-sm uppercase tracking-widest">Servicios</h4>
            <ul class="flex flex-col gap-2.5">
              @for (svc of services; track svc) {
                <li class="text-gray-400 text-sm flex items-center gap-2">
                  <span class="w-1 h-1 rounded-full bg-amber-500/60 flex-shrink-0"></span>
                  {{ svc }}
                </li>
              }
            </ul>
          </div>

          <!-- ── Col 3: Quick nav ── -->
          <div class="flex flex-col gap-4">
            <h4 class="text-white font-bold text-sm uppercase tracking-widest">Navegación</h4>
            <ul class="flex flex-col gap-2.5">
              @for (link of navLinks; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-gray-400 hover:text-amber-400 text-sm
                           transition-colors duration-200 flex items-center gap-2"
                  >
                    <span class="w-1 h-1 rounded-full bg-amber-500/60 flex-shrink-0"></span>
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- ── Col 4: Contact info ── -->
          <div class="flex flex-col gap-4">
            <h4 class="text-white font-bold text-sm uppercase tracking-widest">Contacto</h4>
            <ul class="flex flex-col gap-3">
              @for (item of contactItems; track item.id) {
                <li class="flex items-start gap-2.5">
                  @switch (item.id) {
                    @case ('phone') {
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-amber-500/70 flex-shrink-0 mt-0.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21
                             l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502
                             l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                    @case ('email') {
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-amber-500/70 flex-shrink-0 mt-0.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7
                             a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    @case ('location') {
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-amber-500/70 flex-shrink-0 mt-0.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243
                             a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                  }
                  <span class="text-gray-400 text-sm leading-relaxed">{{ item.text }}</span>
                </li>
              }
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                    flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-gray-500 text-xs text-center sm:text-left">
            &copy; {{ currentYear }} Ing. Civil — Todos los derechos reservados.
          </p>
          <p class="text-gray-600 text-xs text-center sm:text-right max-w-sm leading-relaxed">
            Proyectos ejecutados bajo la
            <span class="text-gray-500">Norma Boliviana del Hormigón Armado (NB 1225001)</span>
            y normas del
            <span class="text-gray-500">Colegio de Ingenieros de Bolivia (CIB)</span>.
          </p>
        </div>
      </div>

    </footer>
  `
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly services = [
    'Cálculo y Diseño Estructural',
    'Supervisión y Control de Obras',
    'Modelado BIM / Planos',
    'Consultoría / Peritajes Técnicos',
  ];

  readonly navLinks = [
    { label: 'Inicio',    href: '#'          },
    { label: 'Servicios', href: '#servicios'  },
    { label: 'Proyectos', href: '#proyectos'  },
    { label: 'Contacto',  href: '#contacto'   },
  ];

  readonly contactItems = [
    { id: 'phone',    text: '+591 99 999 999'                  },
    { id: 'email',    text: 'marioraulviana@gmail.com'             },
    { id: 'location', text: 'Potosí, Bolivia — Atención nacional'   },
  ];
}
