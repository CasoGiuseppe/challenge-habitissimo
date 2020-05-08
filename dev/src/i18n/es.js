export default {
  company: 'Habitissimo',

  buttons: {
    register: 'registrate',
    login: 'accede',
    back: 'volver',
    next: 'continuar',
    repeat: 'pide otro presupuesto',
  },

  header: {
    payoff: '¿Eres un autónomo o tienes una empresa y quieres conseguir más clientes?',
  },

  article: {
    title: 'Pide ahora tus presupuestos',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer, tempor netus id class habitasse scelerisque eu sollicitudin, viverra fermentum cum purus dictumst eros elementum. Metus posuere et sollicitudin molestie',
    extra: `
      <ul>
        <li>Cuéntanos qué necesitas</li>
        <li>Recibe hasta 4 presupuestos de tu zona</li>
        <li>Compara ofertas y elige (o no) la mejor</li>
      </ul>`,
  },

  features: {
    title: 'Descubre las ventajas de pedir un presupuesto para',
    list: {
      gratis: {
        title: 'Es Gratis',
        label: 'Recibe varios presupuestos de forma gratuita y sin compromiso.',
        action: 'descubre más',
      },
      saveTime: {
        title: 'Ahorra Tiempo',
        label: 'No pierdas tiempo buscando empresas. Ellas te contactan a ti.',
        action: 'descubre más',
      },
      saveMoney: {
        title: 'Ahorra dinero',
        label: 'Tienes más de un presupuesto para comparar.',
        action: 'descubre más',
      },
      findBest: {
        title: 'Encuentra a los mejores',
        label: 'Elige a los profesionales mejor valorados por los usuarios.',
        action: 'descubre más',
      },
    },
  },

  banner: {
    title: 'Con la garantía "Confianza habitissimo"',
    description: 'Al contratar un profesional de la red habitissimo, obtienes una cobertura de hasta 3.000 € en caso de fraude por anticipos en los materiales del trabajo. <a href="#">Quiero saber más</a>',
  },

  lastsQuote: {
    title: 'Explora los presupuestos de nuestros clientes',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer, tempor netus id class habitasse scelerisque eu sollicitudin, viverra fermentum cum purus dictumst eros elementum. Metus posuere et sollicitudin molestie',
    moreTitle: 'Mira también los presupuestos de otras categorias',
  },

  lastsComments: {
    title: '¿Qué dicen de Habitissimo?',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer, tempor netus id class habitasse scelerisque eu sollicitudin, viverra fermentum cum purus dictumst eros elementum. Metus posuere et sollicitudin molestie',
  },

  form: {
    title: 'Solicita tu presupuestos',
    titlecomplete: 'Enhorabuena!! has pedido tu presupuesto',
    descriptioncomple: 'Has enviado tu correctamente tu presupuesto en la categoría {category}. No dudes en contactar con nosotros.',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit integer, tempor netus id class habitasse scelerisque eu sollicitudin.',
    progressmessage: 'Te quedan pocos pasos para enviar tu presupuesto',
    required: 'requerido',
    fields: {
      descriptionTextArea: {
        title: '¿Qué tipo de trabajo necesitas?',
        placeholder: 'Describes que tipología de trabajo necesitas',
      },
      timeSelect: {
        placeholder: 'Eliges una fecha',
        options: {
          first: 'lo antes posible',
          second: 'de 1 a 3 meses',
          third: 'más de 3 meses',
        },
      },
      categorySelect: {
        placeholder: 'Seleccióna una categoria',
      },
      subcategorySelect: {
        placeholder: 'Seleccióna una categoria',
      },
      priceSelect: {
        placeholder: 'Seleccióna un precio',
        options: {
          first: 'Lo más barato',
          second: 'Relación calidad precio',
          third: 'mejor calidad',
        },
      },
      nameInput: {
        placeholder: 'tu nombre',
      },
      mailInput: {
        placeholder: 'tu correo electronico',
      },
      phoneInput: {
        placeholder: 'tu numero de telefono',
      },
    },
  },
};
