import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      [class]="scrolled() ? 'bg-white shadow-md' : 'bg-transparent'"
    >
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Logo -->
          <a href="#" class="flex items-center gap-2 flex-shrink-0">
            <span class="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-5 h-5 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 21h18M9 3h6l2 6H7L9 3zM5 21V9h14v12M9 13h6M9 17h6" />
              </svg>
            </span>
            <span
              class="text-lg font-bold tracking-tight transition-colors duration-300"
              [class]="scrolled() ? 'text-gray-900' : 'text-white'"
            >
              Ing. Civil
            </span>
          </a>

          <!-- Desktop links -->
          <div class="hidden md:flex items-center gap-8">
            @for (link of navLinks; track link.href) {
              <a
                [href]="link.href"
                class="text-sm font-medium transition-colors duration-200 hover:text-amber-500"
                [class]="scrolled() ? 'text-gray-600' : 'text-gray-200'"
              >
                {{ link.label }}
              </a>
            }
          </div>

          <!-- Desktop CTA WhatsApp -->
          <div class="hidden md:flex">
            <a
              href="https://wa.me/51999999999?text=Hola,%20quisiera%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
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
              WhatsApp
            </a>
          </div>

          <!-- Mobile hamburger -->
          <button
            class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors"
            [class]="scrolled() ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
            (click)="toggleMenu()"
            aria-label="Abrir menú"
          >
            <span
              class="block w-6 h-0.5 transition-all duration-300 origin-center bg-current"
              [class]="menuOpen() ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 transition-all duration-300 bg-current"
              [class]="menuOpen() ? 'opacity-0 scale-x-0' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 transition-all duration-300 origin-center bg-current"
              [class]="menuOpen() ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </button>
        </div>

        <!-- Mobile menu -->
        <div
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          [class]="menuOpen() ? 'max-h-80 pb-4' : 'max-h-0'"
        >
          <div class="bg-white rounded-xl shadow-lg mt-2 p-4 flex flex-col gap-1">
            @for (link of navLinks; track link.href) {
              <a
                [href]="link.href"
                class="text-gray-700 hover:text-amber-500 hover:bg-amber-50 font-medium text-sm px-4 py-3 rounded-lg transition-colors duration-200"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            }
            <div class="border-t border-gray-100 mt-2 pt-3">
              <a
                href="https://wa.me/51999999999?text=Hola,%20quisiera%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-3 rounded-lg transition-colors duration-200"
                (click)="closeMenu()"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
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
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  readonly navLinks = [
    { label: 'Servicios',  href: '#servicios'  },
    { label: 'Proyectos',  href: '#proyectos'  },
    { label: 'Contacto',   href: '#contacto'   },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
