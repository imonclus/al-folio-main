// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-inicio",
    title: "Inicio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio-main/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/blog/";
          },
        },{id: "nav-agent",
          title: "Agent",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/_pages/agent-vercel/";
          },
        },{id: "nav-agent",
          title: "Agent",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/_pages/prog-ed-mus/";
          },
        },{id: "nav-gemas",
          title: "Gemas",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/_pages/proyectos%20copy/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/_pages/proyectos/";
          },
        },{id: "nav-recursos-edu",
          title: "Recursos EDU",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/recursos-tac/";
          },
        },{id: "nav-trabajo",
          title: "Trabajo",
          description: "Cursos, materiales, calendario, and recursos parar clases que hago.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/teaching/";
          },
        },{id: "nav-ple",
          title: "PLE",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/ple-ignacio/";
          },
        },{id: "nav-otras-webs",
          title: "Otras webs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/altres-webs/";
          },
        },{id: "nav-publicaciones",
          title: "Publicaciones",
          description: "Artículos, reflexiones y recursos sobre educación y metodologías activas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio-main/publications/";
          },
        },{id: "post-publicaciones-recientes-en-linkedin",
        
          title: "Publicaciones recientes en Linkedin",
        
        description: "Nuevo artículo publicado en mi blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio-main/blog/2026/nuevo-articulo02/";
          
        },
      },{id: "post-he-escrito-un-nuevo-artículo",
        
          title: "He escrito un nuevo artículo",
        
        description: "Nuevo artículo publicado en mi blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio-main/blog/2026/nuevo-articulo01/";
          
        },
      },{id: "news-muy-orgulloso-de-publicar-mi-tercer-artículo-espero-que-sea-de-su-interés",
          title: 'Muy orgulloso de publicar mi tercer artículo. Espero que sea de su interés....',
          description: "",
          section: "News",},{id: "ple_ignacio-bancos-de-sonidos",
          title: 'Bancos de sonidos',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/bancos-de-sonidos/";
            },},{id: "ple_ignacio-fuentes-de-conocimiento",
          title: 'Fuentes de conocimiento',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/fuentes/";
            },},{id: "ple_ignacio-ple-entorno-personal-de-aprendizaje",
          title: 'PLE (Entorno Personal de Aprendizaje)',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/home/";
            },},{id: "ple_ignacio-hydn-cuartetos",
          title: 'Hydn - Cuartetos',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/hydn-cuartetos/";
            },},{id: "ple_ignacio-museo-de-música-3d-models",
          title: 'Museo de música (3D models)',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/museo-de-musica/";
            },},{id: "ple_ignacio-organizadores-de-enlaces",
          title: 'Organizadores de enlaces',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/organizadores/";
            },},{id: "ple_ignacio-producción",
          title: 'Producción',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/produccion/";
            },},{id: "ple_ignacio-publicación",
          title: 'Publicación',
          description: "",
          section: "Ple_ignacio",handler: () => {
              window.location.href = "/al-folio-main/ple_ignacio/publicacion/";
            },},{id: "recursos_tac-eines-2-0",
          title: 'Eines 2.0',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-2-0/";
            },},{id: "recursos_tac-eines-acollida",
          title: 'Eines Acollida',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-acollida/";
            },},{id: "recursos_tac-eines-anglès",
          title: 'Eines anglès',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-angles/";
            },},{id: "recursos_tac-eines-bloc",
          title: 'Eines Bloc',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-bloc/";
            },},{id: "recursos_tac-eines-castellà",
          title: 'Eines castellà',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-castella/";
            },},{id: "recursos_tac-eines-català",
          title: 'Eines català',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-catala/";
            },},{id: "recursos_tac-eines-cinema",
          title: 'Eines cinema',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-cinema/";
            },},{id: "recursos_tac-eines-ciutada",
          title: 'Eines ciutada',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-ciutada/";
            },},{id: "recursos_tac-eines-diversos",
          title: 'Eines diversos',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-diversos/";
            },},{id: "recursos_tac-eines-ed-fis",
          title: 'Eines Ed. Fis.',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-ed-fis-/";
            },},{id: "recursos_tac-eines-gestió",
          title: 'Eines gestió',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-gestio/";
            },},{id: "recursos_tac-eines-imatges",
          title: 'Eines imatges',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-imatges/";
            },},{id: "recursos_tac-eines-infantil",
          title: 'Eines Infantil',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-infantil/";
            },},{id: "recursos_tac-eines-mates",
          title: 'Eines mates',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-matematiques/";
            },},{id: "recursos_tac-eines-música",
          title: 'Eines música',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-musica/";
            },},{id: "recursos_tac-eines-naturals",
          title: 'Eines naturals',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-naturals/";
            },},{id: "recursos_tac-eines-pc",
          title: 'Eines PC',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-pc/";
            },},{id: "recursos_tac-eines-plàstica",
          title: 'Eines plàstica',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-plastica/";
            },},{id: "recursos_tac-eines-seguretat",
          title: 'Eines seguretat',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-seguretat/";
            },},{id: "recursos_tac-eines-sf-lliure",
          title: 'Eines SF Lliure',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-sf-lliure/";
            },},{id: "recursos_tac-eines-socials",
          title: 'Eines socials',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-socials/";
            },},{id: "recursos_tac-eines-video",
          title: 'Eines video',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/eines-video/";
            },},{id: "recursos_tac-programació",
          title: 'Programació',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/programacio/";
            },},{id: "recursos_tac-videos-tac",
          title: 'Videos TAC',
          description: "",
          section: "Recursos_tac",handler: () => {
              window.location.href = "/al-folio-main/recursos_tac/videos-tac/";
            },},{id: "teachings-cfa-vilafranca-del-penedès",
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
