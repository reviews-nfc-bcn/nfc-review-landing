export type Language = "es" | "ca";

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  whatsapp: {
    order: string;
    orderOffer: string;
  };
  header: {
    nav: {
      producto: string;
      beneficios: string;
      comoFunciona: string;
      precios: string;
      faq: string;
    };
    ctaButton: string;
    openMenu: string;
    closeMenu: string;
    switchToCa: string;
    switchToEs: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    paragraph: string;
    ctaButton: string;
    rating: string;
    altBlanco: string;
    altNegro: string;
  };
  productGallery: {
    colorNegro: string;
    colorBlanco: string;
    featureNfc: string;
    featureNoApps: string;
    heading: string;
    paragraph: string;
    badge: string;
    altPrefix: string;
  };
  benefits: {
    heading: string;
    paragraph: string;
    items: { title: string; description: string }[];
  };
  howItWorks: {
    heading: string;
    paragraph: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    heading: string;
    paragraph: string;
    items: { quote: string; name: string; role: string }[];
    disclaimer: string;
  };
  pricing: {
    heading: string;
    paragraph: string;
    badge: string;
    included: string[];
    oneTime: string;
    ctaButton: string;
    altNegro: string;
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    heading: string;
    paragraph: string;
    ctaButton: string;
  };
  footer: {
    tagline: string;
    contact: string;
    rights: string;
  };
}

const es: Translations = {
  meta: {
    title: "Placas NFC para Reseñas de Google | Badalona & Barcelona",
    description:
      "Multiplica las reseñas de Google de tu negocio local en Badalona, Barcelona y el Maresme con una placa NFC de un solo toque.",
  },
  whatsapp: {
    order: "Hola, quiero pedir mi Placa NFC de NFC Reviews BCN.",
    orderOffer: "Hola, quiero pedir mi Placa NFC de NFC Reviews BCN (oferta 20€).",
  },
  header: {
    nav: {
      producto: "Producto",
      beneficios: "Beneficios",
      comoFunciona: "Cómo funciona",
      precios: "Precios",
      faq: "FAQ",
    },
    ctaButton: "Pedir mi Placa",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToCa: "Canviar a català",
    switchToEs: "Cambiar a español",
  },
  hero: {
    badge: "Fabricado para negocios de Badalona, Barcelona y el Maresme",
    titlePrefix: "Multiplica por ",
    titleHighlight: "10 las reseñas",
    titleSuffix: " de tu negocio local con un solo toque",
    paragraph:
      "Tus clientes acercan el móvil a la placa y dejan una reseña de 5 estrellas en Google en menos de 10 segundos. Sin apps, sin fricción, sin cuotas mensuales.",
    ctaButton: "Pedir mi Placa NFC",
    rating: "+500 reseñas generadas en negocios de Badalona y el Maresme",
    altBlanco: "Placa NFC blanca para reseñas de Google",
    altNegro: "Placa NFC negra para reseñas de Google",
  },
  productGallery: {
    colorNegro: "Negro",
    colorBlanco: "Blanco",
    featureNfc: "Tecnología NFC, sin batería",
    featureNoApps: "Sin apps ni configuración",
    heading: "Un objeto tan bonito que da gusto tenerlo en el mostrador",
    paragraph: "Elige el acabado que mejor combine con tu negocio. Misma tecnología, dos estilos.",
    badge: "Toca & listo",
    altPrefix: "Placa NFC acabado",
  },
  benefits: {
    heading: "Todo lo que necesitas, nada que te sobre",
    paragraph: "Una placa NFC pensada para negocios locales que quieren más reseñas sin complicarse.",
    items: [
      {
        title: "Sin apps que instalar",
        description: "Tus clientes solo acercan el móvil. Nada que descargar, nada que configurar.",
      },
      {
        title: "Sin cuotas mensuales",
        description: "Pagas una vez y la placa es tuya para siempre. Sin sorpresas en la factura.",
      },
      {
        title: "Instalación en 1 minuto",
        description: "Coloca la placa en el mostrador o la mesa y ya está lista para usarse.",
      },
      {
        title: "Compatible con cualquier móvil",
        description: "Funciona con NFC en iPhone y Android; si algún cliente no lo tiene, también hay QR.",
      },
      {
        title: "Diseño premium",
        description: "Disponible en acabado blanco o negro para combinar con la estética de tu local.",
      },
      {
        title: "Resultados desde el primer día",
        description: "Cada toque son segundos de fricción menos entre un cliente contento y tu reseña.",
      },
    ],
  },
  howItWorks: {
    heading: "Tres pasos, diez segundos",
    paragraph: "Así de simple es para tus clientes dejarte una reseña de 5 estrellas.",
    steps: [
      {
        title: "Coloca la placa",
        description:
          "La dejas en el mostrador, la mesa o la entrada de tu negocio. Lista para usar, sin cables ni batería.",
      },
      {
        title: "El cliente la toca",
        description: "Acerca su móvil a la placa un segundo. El NFC abre automáticamente tu ficha de Google.",
      },
      {
        title: "Deja su reseña",
        description: "En menos de 10 segundos escribe y publica una reseña de 5 estrellas, sin salir de la app.",
      },
    ],
  },
  testimonials: {
    heading: "Negocios que ya multiplicaron sus reseñas",
    paragraph: "Así describen la experiencia negocios locales que usan su Placa NFC cada día.",
    items: [
      {
        quote:
          "Antes tenía que pedir la reseña de palabra y muchos se olvidaban. Con la placa en el mostrador, la gente la deja al momento.",
        name: "Laura",
        role: "Dueña de una peluquería en Badalona",
      },
      {
        quote:
          "Lo puse en la mesa de cobro y en un par de semanas ya notamos más reseñas nuevas que en todo el año anterior.",
        name: "Marc",
        role: "Encargado de un restaurante en el Maresme",
      },
      {
        quote:
          "Cero configuración. Lo saqué de la caja, lo dejé en recepción y ya funcionaba. Mis clientes ni se lo esperaban.",
        name: "Sonia",
        role: "Propietaria de una clínica dental en Barcelona",
      },
    ],
    disclaimer: "Testimonios ilustrativos de la experiencia habitual con el producto.",
  },
  pricing: {
    heading: "Un precio, sin letra pequeña",
    paragraph: "Pago único. La placa es tuya para siempre.",
    badge: "Oferta de lanzamiento",
    included: [
      "Placa NFC lista para usar, sin apps ni configuración",
      "Enlace directo a tu ficha de reseñas de Google",
      "Disponible en acabado blanco o negro",
      "Sin cuotas mensuales ni costes ocultos",
    ],
    oneTime: "pago único",
    ctaButton: "Pedir mi Placa NFC por 20€",
    altNegro: "Placa NFC negra para reseñas de Google",
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿La placa necesita batería o wifi?",
        answer:
          "No. La tecnología NFC es pasiva: no lleva batería ni necesita conexión propia. Solo hace falta que el móvil del cliente tenga el NFC activado, algo habitual por defecto en la mayoría de smartphones.",
      },
      {
        question: "¿Funciona con iPhone y Android?",
        answer:
          "Sí, con ambos. Además, la placa incluye un código QR como alternativa para los pocos móviles que no tengan NFC activado.",
      },
      {
        question: "¿Puedo elegir el color de la placa?",
        answer: "Sí, está disponible en acabado blanco o negro para que combine con la decoración de tu negocio.",
      },
      {
        question: "¿Hay que pagar algo más aparte del precio de la placa?",
        answer: "No. Es un pago único: sin cuotas mensuales, sin comisiones por reseña y sin coste de mantenimiento.",
      },
    ],
  },
  cta: {
    heading: "Empieza a multiplicar tus reseñas hoy mismo",
    paragraph: "Un solo toque, sin apps ni cuotas. Tu placa NFC está lista en un minuto.",
    ctaButton: "Escríbenos por WhatsApp",
  },
  footer: {
    tagline:
      "Placas NFC para multiplicar las reseñas de Google de negocios locales en Badalona, Barcelona y el Maresme.",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
  },
};

const ca: Translations = {
  meta: {
    title: "Plaques NFC per a Ressenyes de Google | Badalona i Barcelona",
    description:
      "Multiplica les ressenyes de Google del teu negoci local a Badalona, Barcelona i el Maresme amb una placa NFC d'un sol toc.",
  },
  whatsapp: {
    order: "Hola, vull demanar la meva Placa NFC de NFC Reviews BCN.",
    orderOffer: "Hola, vull demanar la meva Placa NFC de NFC Reviews BCN (oferta 20€).",
  },
  header: {
    nav: {
      producto: "Producte",
      beneficios: "Beneficis",
      comoFunciona: "Com funciona",
      precios: "Preus",
      faq: "FAQ",
    },
    ctaButton: "Demana la meva Placa",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    switchToCa: "Canviar a català",
    switchToEs: "Cambiar a español",
  },
  hero: {
    badge: "Fabricada per a negocis de Badalona, Barcelona i el Maresme",
    titlePrefix: "Multiplica per ",
    titleHighlight: "10 les ressenyes",
    titleSuffix: " del teu negoci local amb un sol toc",
    paragraph:
      "Els teus clients apropen el mòbil a la placa i deixen una ressenya de 5 estrelles a Google en menys de 10 segons. Sense apps, sense fricció, sense quotes mensuals.",
    ctaButton: "Demana la meva Placa NFC",
    rating: "+500 ressenyes generades en negocis de Badalona i el Maresme",
    altBlanco: "Placa NFC blanca per a ressenyes de Google",
    altNegro: "Placa NFC negra per a ressenyes de Google",
  },
  productGallery: {
    colorNegro: "Negre",
    colorBlanco: "Blanc",
    featureNfc: "Tecnologia NFC, sense bateria",
    featureNoApps: "Sense apps ni configuració",
    heading: "Un objecte tan bonic que fa gust tenir-lo al taulell",
    paragraph: "Tria l'acabat que millor combini amb el teu negoci. Mateixa tecnologia, dos estils.",
    badge: "Toca i llest",
    altPrefix: "Placa NFC acabat",
  },
  benefits: {
    heading: "Tot el que necessites, res que et sobri",
    paragraph: "Una placa NFC pensada per a negocis locals que volen més ressenyes sense complicar-se.",
    items: [
      {
        title: "Sense apps per instal·lar",
        description: "Els teus clients només apropen el mòbil. Res per descarregar, res per configurar.",
      },
      {
        title: "Sense quotes mensuals",
        description: "Pagues una vegada i la placa és teva per sempre. Sense sorpreses a la factura.",
      },
      {
        title: "Instal·lació en 1 minut",
        description: "Col·loca la placa al taulell o la taula i ja està llesta per usar-se.",
      },
      {
        title: "Compatible amb qualsevol mòbil",
        description: "Funciona amb NFC a iPhone i Android; si algun client no en té, també hi ha QR.",
      },
      {
        title: "Disseny prèmium",
        description: "Disponible en acabat blanc o negre per combinar amb l'estètica del teu local.",
      },
      {
        title: "Resultats des del primer dia",
        description: "Cada toc són segons de fricció menys entre un client content i la teva ressenya.",
      },
    ],
  },
  howItWorks: {
    heading: "Tres passos, deu segons",
    paragraph: "Així de senzill és perquè els teus clients et deixin una ressenya de 5 estrelles.",
    steps: [
      {
        title: "Col·loca la placa",
        description:
          "La deixes al taulell, la taula o l'entrada del teu negoci. Llesta per usar, sense cables ni bateria.",
      },
      {
        title: "El client la toca",
        description: "Apropa el mòbil a la placa un segon. L'NFC obre automàticament la teva fitxa de Google.",
      },
      {
        title: "Deixa la seva ressenya",
        description: "En menys de 10 segons escriu i publica una ressenya de 5 estrelles, sense sortir de l'app.",
      },
    ],
  },
  testimonials: {
    heading: "Negocis que ja han multiplicat les seves ressenyes",
    paragraph: "Així descriuen l'experiència negocis locals que fan servir la seva Placa NFC cada dia.",
    items: [
      {
        quote:
          "Abans havia de demanar la ressenya de paraula i molts se n'oblidaven. Amb la placa al taulell, la gent la deixa a l'instant.",
        name: "Laura",
        role: "Propietària d'una perruqueria a Badalona",
      },
      {
        quote:
          "El vaig posar a la taula de cobrament i en un parell de setmanes ja vam notar més ressenyes noves que en tot l'any anterior.",
        name: "Marc",
        role: "Encarregat d'un restaurant al Maresme",
      },
      {
        quote:
          "Zero configuració. El vaig treure de la caixa, el vaig deixar a recepció i ja funcionava. Els meus clients ni s'ho esperaven.",
        name: "Sonia",
        role: "Propietària d'una clínica dental a Barcelona",
      },
    ],
    disclaimer: "Testimonis il·lustratius de l'experiència habitual amb el producte.",
  },
  pricing: {
    heading: "Un preu, sense lletra petita",
    paragraph: "Pagament únic. La placa és teva per sempre.",
    badge: "Oferta de llançament",
    included: [
      "Placa NFC llesta per usar, sense apps ni configuració",
      "Enllaç directe a la teva fitxa de ressenyes de Google",
      "Disponible en acabat blanc o negre",
      "Sense quotes mensuals ni costos ocults",
    ],
    oneTime: "pagament únic",
    ctaButton: "Demana la meva Placa NFC per 20€",
    altNegro: "Placa NFC negra per a ressenyes de Google",
  },
  faq: {
    heading: "Preguntes freqüents",
    items: [
      {
        question: "La placa necessita bateria o wifi?",
        answer:
          "No. La tecnologia NFC és passiva: no porta bateria ni necessita connexió pròpia. Només cal que el mòbil del client tingui l'NFC activat, una cosa habitual per defecte a la majoria de smartphones.",
      },
      {
        question: "Funciona amb iPhone i Android?",
        answer:
          "Sí, amb tots dos. A més, la placa inclou un codi QR com a alternativa per als pocs mòbils que no tinguin l'NFC activat.",
      },
      {
        question: "Puc triar el color de la placa?",
        answer: "Sí, està disponible en acabat blanc o negre perquè combini amb la decoració del teu negoci.",
      },
      {
        question: "Cal pagar res més a part del preu de la placa?",
        answer: "No. És un pagament únic: sense quotes mensuals, sense comissions per ressenya i sense cost de manteniment.",
      },
    ],
  },
  cta: {
    heading: "Comença a multiplicar les teves ressenyes avui mateix",
    paragraph: "Un sol toc, sense apps ni quotes. La teva placa NFC està llesta en un minut.",
    ctaButton: "Escriu-nos per WhatsApp",
  },
  footer: {
    tagline:
      "Plaques NFC per multiplicar les ressenyes de Google de negocis locals a Badalona, Barcelona i el Maresme.",
    contact: "Contacte",
    rights: "Tots els drets reservats.",
  },
};

export const translations: Record<Language, Translations> = { es, ca };
