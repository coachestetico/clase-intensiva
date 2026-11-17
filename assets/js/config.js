/* Todo lo que se cambia está acá. Los demás archivos no hace falta tocarlos.
   Lo marcado con PRUEBA o FALTA se completa cuando esté el video definitivo. */
const CONFIG = {
  clase: {
    titulo: "La mancha no es el diagnóstico: qué tienes que entender antes de despigmentar",
    bajada: "Cómo se forma una mancha, qué mitos frenan tus resultados y cómo pasar de un protocolo a un tratamiento que despigmente de verdad.",
    docente: "Dianela Draganov",
    duracionMin: 120               // el video, desde inicioSegundo hasta el final, dura casi 2 h
  },

  /* Banner de la clase: ya trae el título y la foto. La parte derecha tiene que quedar libre para el formulario. */
  banner: "assets/img/banner-clase-manchas.jpg",
  fotoDocente: "assets/img/dianela.png",
  logoBootcamp: "assets/img/logo-bootcamp.png", // vacío = logo armado con texto

  horarios: {
    cadaMinutos: 10,              // siempre hay una clase que empieza en menos de 10–13 minutos
    anticipacionMin: 3,           // si falta menos que esto, se ofrece la siguiente
    fijos: ["10:00", "16:00", "20:00", "22:00"], // en hora de Argentina; a cada persona se le muestran en su hora local
    utcBase: -3,                  // Argentina
    horizonteHoras: 24,           // nunca se ofrece una clase a más de 24 horas
    cantidad: 5                   // cuántos horarios se muestran
  },

  sala: {
    toleranciaMin: 15,            // si entra más tarde que esto, se le ofrece otro horario
    entrarDondeVa: true           // si entra tarde (dentro de la tolerancia), el video arranca en el minuto en que va
  },

  /* Video: tipo "mp4" con la URL del archivo, o tipo "youtube" con el id del video no listado. */
  video: {
    tipo: "youtube",
    fuente: "qcn5x4dFnl0",        // Webinar manchas del 16/11 (dura 2 h 06 min 17 s)
    inicioSegundo: 394            // 6:34, "hoy les doy la bienvenida": antes es la conexión, la grilla de Zoom y un timer de 5 minutos
  },
  ofertaSegundo: 6289,            // 1:44:49, "les quiero mostrar de qué se trata el próximo bootcamp" (precio de 125 en 1:56:10)

  oferta: {
    producto: "¿Qué hago con esta piel?",
    fechas: "24, 25 y 26 de noviembre · en vivo por Zoom",
    cupos: 10,
    incluye: [                    // lo mismo que cuenta Dianela en el video
      "Clase 0 nivelatoria apenas te inscribes",
      "3 jornadas en vivo: acné, manchas y envejecimiento",
      "15 casos con su plan de acción escrito (incluye rosácea y foliculitis en piel masculina)",
      "3 docentes internacionales y acceso ilimitado a las grabaciones",
      "Grupo de WhatsApp de acompañamiento hasta el 14/12"
    ],
    hotmart: "https://pay.hotmart.com/F108130345D?off=khch8zx2", // link solo para esta página
    whatsapp: "https://wa.link/1c5v5w", // botón flotante y "¿Dudas?" de la oferta (salvo Argentina y Venezuela)

    /* Precio según el país de la persona (sale del código de su WhatsApp o de su zona horaria).
       Si a una región le falta el precio o el link, ve la de dólares. */
    regiones: {
      USD: {
        precio: "125 USD", lista: "175 USD", pago: "hotmart",
        boton: "Inscribirme ahora · 125 USD",
        nota: "Pago seguro por Hotmart. El acceso te llega al correo."
      },
      EUR: {                      // Europa: es el precio que muestra Hotmart para España
        precio: "119 €", lista: "167 €", pago: "hotmart",
        boton: "Inscribirme ahora · 119 €",
        nota: "Pago seguro por Hotmart. El acceso te llega al correo."
      },
      AR: {
        precio: "$ 195.000", lista: "175 USD",
        pago: "https://mpago.li/2raEe9D",
        cuotas: "Pagar en 3 cuotas sin interés de $ 65.000", // botón de pago crema bajo el precio (el link de Mercado Pago está hecho para 3 cuotas)
        boton: "Inscribirme con Mercado Pago · $ 195.000",
        chip: "Inscribirme · 3 cuotas sin interés", // botón chico sobre el video
        nota: "Pago seguro con Mercado Pago. Después de pagar, envía el comprobante por WhatsApp y te damos el acceso.",
        dudas: "https://wa.link/x5jiat"
      },
      VE: {
        precio: "111.500 Bs", lista: "175 USD",
        pago: "https://wa.link/0t6247", // se paga por Pago Móvil: los datos se pasan por WhatsApp
        boton: "Quiero pagar en bolívares",
        nota: "Te pasamos los datos de Pago Móvil por WhatsApp.",
        dudas: "https://wa.link/0t6247"
      }
    },
    notaAlumnas: "¿Ya eres alumna de Coach Estético? Tu precio es 99 USD: escríbenos por WhatsApp. Si eres miembro activo de LIFE+ o Lifetime, ya lo tienes incluido."
  },

  /* URL de la aplicación web de Apps Script que guarda los registros y manda los emails (ver LEEME.md).
     Vacía: la página funciona igual, pero no guarda nada. */
  registroUrl: "https://script.google.com/macros/s/AKfycbxfqI35QIK0DKLtMXlmpfUvZPBi0SxNVem2_JQcCsEHRVm-PxgkdXvByV5KlHIm5Ux1/exec"
};
