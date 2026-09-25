import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contacto" class="w-full bg-gray-950 py-20 sm:py-28">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-14">
          <span class="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            Hablemos
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Solicita tu Cotización
          </h2>
          <p class="mt-4 max-w-xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed">
            Cuéntame tu proyecto y te respondo en menos de 24 horas
            con una propuesta técnica y económica.
          </p>
        </div>

        <!-- 2-column layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          <!-- ── LEFT COLUMN: Direct info ── -->
          <div class="flex flex-col gap-8">

            <!-- Info items -->
            <div class="flex flex-col gap-5">
              @for (item of contactInfo; track item.id) {
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20
                              flex items-center justify-center">
                    @switch (item.id) {
                      @case ('phone') {
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21
                               l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502
                               l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      }
                      @case ('email') {
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7
                               a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      }
                      @case ('location') {
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243
                               a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      }
                      @case ('clock') {
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                    }
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      {{ item.label }}
                    </p>
                    <p class="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {{ item.value }}
                    </p>
                  </div>
                </div>
              }
            </div>

            <!-- Divider -->
            <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            <!-- WhatsApp CTA -->
            <div>
              <p class="text-gray-400 text-sm mb-4">
                ¿Prefieres una respuesta inmediata? Escríbeme directamente:
              </p>
              <a
                href="https://wa.me/591XXXXXXXX?text=Hola,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-3 w-full sm:w-auto
                       bg-green-500 hover:bg-green-400 text-white font-bold text-base
                       px-7 py-4 rounded-xl shadow-lg shadow-green-500/20
                       transition-all duration-200 hover:shadow-green-400/30 hover:scale-105
                       active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0"
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
                Chatear por WhatsApp
              </a>
            </div>

          </div>

          <!-- ── RIGHT COLUMN: Contact form ── -->
          <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <h3 class="text-white font-bold text-lg mb-6">Envíame un mensaje</h3>

            <form class="flex flex-col gap-5" (ngSubmit)="onSubmit()">

              <!-- Name + Email row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                  <label class="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Nombre completo <span class="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    [(ngModel)]="form.name"
                    placeholder="Juan Pérez"
                    required
                    class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                           transition-colors duration-200"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Correo electrónico <span class="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    [(ngModel)]="form.email"
                    placeholder="juan@correo.com"
                    required
                    class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                           transition-colors duration-200"
                  />
                </div>
              </div>

              <!-- Phone + Service row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                  <label class="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    [(ngModel)]="form.phone"
                    placeholder="+591 99 999 999"
                    class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                           transition-colors duration-200"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    Tipo de servicio <span class="text-amber-500">*</span>
                  </label>
                  <select
                    name="service"
                    [(ngModel)]="form.service"
                    required
                    class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3
                           text-sm appearance-none cursor-pointer
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                           transition-colors duration-200"
                    [class]="form.service ? 'text-white' : 'text-gray-500'"
                  >
                    <option value="" disabled selected class="text-gray-500 bg-gray-800">
                      Seleccionar...
                    </option>
                    @for (svc of serviceOptions; track svc) {
                      <option [value]="svc" class="text-white bg-gray-800">{{ svc }}</option>
                    }
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-1.5">
                <label class="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  Mensaje <span class="text-amber-500">*</span>
                </label>
                <textarea
                  name="message"
                  [(ngModel)]="form.message"
                  placeholder="Cuéntame brevemente tu proyecto: tipo de obra, área aproximada, ubicación..."
                  rows="4"
                  required
                  class="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3
                         text-white text-sm placeholder-gray-500 resize-none
                         focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50
                         transition-colors duration-200"
                ></textarea>
              </div>

              <!-- Submit -->
              <button
                type="submit"
                [disabled]="submitted()"
                class="w-full inline-flex items-center justify-center gap-2
                       bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-base
                       px-6 py-4 rounded-xl shadow-lg shadow-amber-500/20
                       transition-all duration-200 hover:shadow-amber-400/30 hover:scale-[1.02]
                       active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                       disabled:hover:scale-100"
              >
                @if (submitted()) {
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mensaje enviado
                } @else {
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar mensaje
                }
              </button>

              @if (submitted()) {
                <p class="text-center text-emerald-400 text-sm font-medium">
                  ¡Gracias! Me pondré en contacto contigo muy pronto.
                </p>
              }

            </form>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  submitted = signal(false);

  form = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  readonly serviceOptions = [
    'Cálculo y Diseño Estructural',
    'Supervisión y Control de Obras',
    'Modelado BIM / Planos',
    'Consultoría / Peritaje Técnico',
    'Otro',
  ];

  readonly contactInfo = [
    {
      id: 'phone',
      label: 'Teléfono / WhatsApp',
      value: '+591 99 999 999',
    },
    {
      id: 'email',
      label: 'Correo electrónico',
      value: 'marioraulviana@gmail.com',
    },
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Potosí, Bolivia — Atención a nivel nacional',
    },
    {
      id: 'clock',
      label: 'Horarios de atención',
      value: 'Lun – Vie: 8:00 am – 6:00 pm\nSábados: 9:00 am – 1:00 pm',
    },
  ];

  onSubmit(): void {
  this.submitted.set(true);
  
  const telefono = '59160482585'; 
  const texto = `Hola, mi nombre es *${this.form.name}*.%0A` +
                `Correo: ${this.form.email}%0A` +
                `Teléfono: ${this.form.phone}%0A` +
                `Servicio: *${this.form.service}*%0A` +
                `Mensaje: ${this.form.message}`;

  window.open(`https://wa.me/${telefono}?text=${texto}`, '_blank');
}
}
