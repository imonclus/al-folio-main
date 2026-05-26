// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre-mi",
    title: "sobre mi",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio-main/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/blog/";
          },
        },{id: "nav-publicaciones",
          title: "publicaciones",
          description: "Artículos, reflexiones y recursos sobre educación y metodologías activas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/publications/";
          },
        },{id: "nav-proyectos",
          title: "proyectos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/_pages/proyectos/";
          },
        },{id: "nav-enseñando-en",
          title: "enseñando en",
          description: "Cursos, materiales, calendario, and recursos parar clases que hago.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/teaching/";
          },
        },{id: "teachings-cfa-vilafranca-del-penedès",
          title: 'CFA Vilafranca del Penedès',
          description: "En los últimos años he trabajado en educación de adultos impartiendo Castellano A1, COMPETIC Inicial, 1, 2 y 3, Formación instrumental 1 y 2",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio-main/teachings/CFA%20VILAFRANCA%20DEL%20PENEDES/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/al-folio-main/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%6D%6F%6E%63%6C%75%73%31@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/imonclus", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/imonclus", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/imonclus", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Xc1iqeIAAAAJ&hl=es", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
