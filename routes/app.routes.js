/* eslint-disable max-len */
const posts = require('../assets/data/post.js')

module.exports = (app, nonce) => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: '', url: req.url, posts, nonce })
  })
  app.get('/contatti', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Contatti'
      }
    ]
    res.render('contacts/contacts', { id: 'contacts', title: 'Contatti', url: req.url, breadcrumbs, nonce })
  })
  app.get('/supporters', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Supporters'
      }
    ]
    res.render('supporters/supporters', { id: 'supporters', title: 'Supporter', url: req.url, breadcrumbs, nonce })
  })
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs, nonce })
  })

  // TOPIC
  app.get('/html', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli HTML'
      }
    ]
    res.render('topic/html/html', { id: 'html', title: 'Articoli HTML', url: req.url, breadcrumbs, posts, nonce })
  })
  app.get('/css', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli CSS'
      }
    ]
    res.render('topic/css/css', { id: 'css', title: 'Articoli CSS', url: req.url, breadcrumbs, posts, nonce })
  })
  app.get('/javascript', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli JavaScript'
      }
    ]
    res.render('topic/js/js', {
      id: 'javascript',
      title: 'Articoli JavaScript',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/engineering', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli Engineering'
      }
    ]
    res.render('topic/eng/eng', { id: 'eng', title: 'Articoli Engineering', url: req.url, breadcrumbs, posts, nonce })
  })
  app.get('/nodejs', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli Node.js'
      }
    ]
    res.render('topic/node/node', { id: 'node', title: 'Articoli Node.js', url: req.url, breadcrumbs, posts, nonce })
  })
  app.get('/coding', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Esempi di codice'
      }
    ]
    res.render('topic/coding/coding', {
      id: 'coding',
      title: 'Esempi di codice',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/security', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoly Cybersecurity'
      }
    ]
    res.render('topic/security/security', {
      id: 'sec',
      title: 'Articoly Cybersecurity',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })

  // ARCHIVE
  app.get('/settembre-2024', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio settembre 2024'
      }
    ]
    res.render('archive/sett2024/sett2024', {
      id: 'sett2024',
      title: 'Archivio settembre 2024',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/giugno-2024', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio giugno 2024'
      }
    ]
    res.render('archive/giu2024/giu2024', {
      id: 'giu2024',
      title: 'Archivio giugno 2024',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/maggio-2024', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio maggio 2024'
      }
    ]
    res.render('archive/mag2024/mag2024', {
      id: 'mag2024',
      title: 'Archivio maggio 2024',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/aprile-2024', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio aprile 2024'
      }
    ]
    res.render('archive/apr2024/apr2024', {
      id: 'apr2024',
      title: 'Archivio aprile 2024',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/marzo-2024', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio marzo 2024'
      }
    ]
    res.render('archive/mar2024/mar2024', {
      id: 'mar2024',
      title: 'Archivio marzo 2024',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/dicembre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio dicembre 2023'
      }
    ]
    res.render('archive/dic2023/dic2023', {
      id: 'dic2023',
      title: 'Archivio dicembre 2023',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/novembre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio novembre 2023'
      }
    ]
    res.render('archive/nov2023/nov2023', {
      id: 'nov2023',
      title: 'Archivio novembre 2023',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/ottobre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio ottobre 2023'
      }
    ]
    res.render('archive/oct2023/oct2023', {
      id: 'oct2023',
      title: 'Archivio ottobre 2023',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })
  app.get('/settembre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio settembre 2023'
      }
    ]
    res.render('archive/sept2023/sept2023', {
      id: 'sept2023',
      title: 'Archivio settembre 2023',
      url: req.url,
      breadcrumbs,
      posts,
      nonce
    })
  })

  // GRAPHS
  app.get('/grafici', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Analisi'
      }
    ]
    res.render('graphs/graphs', { id: 'analisys', title: 'Analisi', url: req.url, breadcrumbs, nonce })
  })
  // ANALISYS
  app.get('/analisi/confronto-portali-ecommerce-moda-italiani', (req, res) => {
    const title = 'Tech Review dei principali portali e-commerce di moda in Italia'
    const breadcrumbs = [
      {
        name: title
      }
    ]
    res.render(
      'analisi/confronto-portali-ecommerce-moda-italiani/confronto-portali-ecommerce-moda-italiani',
      { id: 'confronto-portali-ecommerce-moda-italiani', title, url: req.url, breadcrumbs, posts, nonce })
  })

  // POST
  // All
  app.get('/posts', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Post'
      }
    ]
    res.render('post/post',
      {
        id: 'post',
        title: 'Tutti i Post',
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  // Specific
  app.get('/css-variabili-sintassi-esempi', (req, res) => {
    const title = 'Variabili in CSS: scopri le Custom Properties e migliora il codice dei tuoi fogli di stile!'
    const description = 'Introduzione alle variabili CSS con spiegazione della sintassi, esempi e casi d\'uso. Rendi più pulito ed efficiente il tuo codice CSS.'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/012-css-variabili-sintassi-esempi/css-variabili-sintassi-esempi',
      {
        id: 'css-variabili-sintassi-esempi',
        serial: '012',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/javascript-promise-definizione-sintassi-esempi', (req, res) => {
    const title = 'JavaScript Promise: impara a gestire efficacemente gli eventi asincroni!'
    const description = 'Definizione, sintassi ed esempi concreti su come sfruttare le Promise JavaScript. Quando utilizzare le Promise, uso di async/await, gestione degli errori e introduzione al nuovo metodo "Promise.withResolvers"'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/011-javascript-promise-definizione-sintassi-esempi/javascript-promise-definizione-sintassi-esempi',
      {
        id: 'javascript-promise-definizione-sintassi-esempi',
        serial: '011',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/javascript-generator-definizione-esempi', (req, res) => {
    const title = 'Cosa sono i Generator in JavaScript? Scopri tutte le potenzialità dei Generatori!'
    const description = 'Una guida completa con definizione ed esempi pratici per comprendere come funzionano e quali vantaggi offrono le funzioni Generator in Javascript'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/010-javascript-generator-definizione-esempi/javascript-generator-definizione-esempi',
      {
        id: 'javascript-generator-definizione-esempi',
        serial: '010',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/security-by-design-principi', (req, res) => {
    const title = 'La Security by Design - scopri quali sono i 10 paradigmi della Sicurezza Web'
    const description = 'Come e perchè integrare i principali paradigmi di sicurezza nell\'implementazione del nostro sistema software fin dalle primissime fasi di progettazione. Che cosa significa il concetto di "Security by Design" e quali sono i vantaggi che offre?'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/009-security-by-design-principi/security-by-design-principi',
      {
        id: 'security-by-design-principi',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/curriculum-efficace-esempio-developer', (req, res) => {
    const title = 'Scrivi un Curriculum Vitae efficace per trovare lavoro come Software Developer'
    const description = 'Scopri quali sono le caratteristiche di un Curriculum efficace e ruba quante più idee possibili dal nostro Esempio Concreto di CV per Sviluppatori Web'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/007-curriculum-efficace-esempio-developer/curriculum-efficace-esempio-developer',
      {
        id: 'curriculum-efficace-esempio-developer',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/programmazione-strutturata-oggetti-funzionale', (req, res) => {
    const title = 'Scopri quali sono i 3 principali paradigmi della programmazione software'
    const description = 'Programmazione strutturata, programmazione ad oggetti e programmazione funzionale: caratteristiche, vantaggi e svantaggi nella definizione di una architettura software efficiente'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/programmazione-strutturata-oggetti-funzionale/programmazione-strutturata-oggetti-funzionale',
      {
        id: 'programmazione-strutturata-oggetti-funzionale',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/javascript-html-tabella-dinamica', (req, res) => {
    const title = 'Sviluppa facilmente una tabella dinamica in HTML, JS e CSS - Codice + Esempi pratici'
    const description = 'Crea da zero una tabella HTML con funzionalità di fetching dinamico, paginazione e ordinamento'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/javascript-html-tabella-dinamica/javascript-html-tabella-dinamica',
      {
        id: 'javascript-html-tabella-dinamica',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/css-selettore-has-esempi', (req, res) => {
    const title = 'Scopri come utilizzare il nuovo selettore :has() in CSS'
    const description = 'E\'giunto il momento di capire come utilizzare questa nuova opportunità. Descrizione, esempi pratici e compatibilità del nuovo selettore CSS :has() '
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/css-selettore-has/css-selettore-has',
      {
        id: 'css-selettore-has',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/node-setup-progetto', (req, res) => {
    const title = 'Come iniziare bene: setup di un progetto Node/Express. '
    const description = 'Come iniziare con il piede giusto un progetto basato su JavaScript utilizzando strumenti e tecnologie applicati in ambito professionale'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/node-setup-progetto/node-setup-progetto',
      {
        id: 'node-setup-progetto',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/architettura-del-sw-definizione-obiettivi', (req, res) => {
    const title = 'Come implementare un corretta Architettura del Software: concetti, pratiche e vantaggi'
    const description = 'Cos\'è una cattiva Architettura? Cos\'è una buona Architettura? Esempi, vantaggi e svantaggi della Architettura sul Prodotto e sul Team'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: title
      }
    ]
    res.render('post/architettura-del-sw-definizione-obiettivi/architettura-del-sw-definizione-obiettivi',
      {
        id: 'arch-sw-def-adv',
        className: 'post',
        title,
        description,
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/html-attributo-ping', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: 'L\'attributo \'ping\' del tag &lt;a&gt; in HTML5'
      }
    ]
    res.render('post/html-ping-attribute/html-ping-attribute',
      {
        id: 'html-ping-attribute',
        className: 'post',
        title: 'L\'attributo \'ping\' del tag <a> in HTML',
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/javascript-closure', (req, res) => {
    const title = 'JavaScript Closure: cosa sono e a cosa servono (con esempi concreti)!'
    const description = 'Definizione, utilizzo ed esempi concreti per sfruttare uno dei concetti più astratti ma potenti della programmazione JavaScript'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: 'JavaScript Closure'
      }
    ]
    res.render('post/javascript-closure/javascript-closure',
      { id: 'js-closure', className: 'post', title, description, url: req.url, breadcrumbs, posts, nonce })
  })

  // Landing
  // Web SEO
  app.get('/web-seo/en', (req, res) => {
    if (req.locale === 'it') return res.redirect('/web-seo')
    res.render('landing/web-seo/web-seo',
      {
        id: 'web-seo',
        className: 'landing',
        title: 'Make your SEO TAKE OFF!',
        description: 'How to improve the visibility of your web portal with Search Engine Optimisation, better Core Web Vitals, user experience and enhancing security.',
        url: req.url,
        nonce,
        locale: 'en'
      })
  })
  app.get('/web-seo', (req, res) => {
    if (req.locale !== 'it') return res.redirect('/web-seo/en')
    res.render('landing/web-seo/web-seo',
      {
        id: 'web-seo',
        className: 'landing',
        title: 'Fai DECOLLARE la tua SEO!',
        description: 'Come migliorare la visibilità del tuo portale Web con la Search Engine Optimization e l\'ottimizzazione dei Core Web Vitals, il miglioramento della esperienza utente e l\'incremento della sicurezza.',
        url: req.url,
        nonce,
        locale: 'it'
      })
  })

  // Responsive Web Design
  app.get('/responsive-web-design/en', (req, res) => {
    if (req.locale === 'it') return res.redirect('/responsive-web-design')
    res.render('landing/responsive-web-design/responsive-web-design',
      {
        id: 'responsive-web-design',
        className: 'landing',
        title: 'DON\'T MAKE ME ZOOM! Responsive Web Design for your website.',
        description: 'Develop a mobile-friendly website with a responsive layout. Improve accessibility, usability and ranking with a product optimised for the mobile world.',
        url: req.url,
        nonce,
        locale: 'en'
      })
  })
  app.get(['/responsive-web-design', '/responsive-web-design/it'], (req, res) => {
    if (req.locale !== 'it') return res.redirect('/responsive-web-design/en')
    res.render('landing/responsive-web-design/responsive-web-design',
      {
        id: 'responsive-web-design',
        className: 'landing',
        title: 'NON FARMI ZOOMARE! Responsive Web Design per il tuo sito web.',
        description: 'Sviluppare un sito Web mobile-friendly attraverso un layout responsive. Migliora l\'accessibilità, l\'usabilità ed il posizionamento con un prodotto ottimizzato per il mondo mobile.',
        url: req.url,
        nonce,
        locale: 'it'
      })
  })

  // Web accessibility
  app.get('/web-accessibility/en', (req, res) => {
    if (req.locale === 'it') return res.redirect('/web-accessibility')
    res.render('landing/web-accessibility/web-accessibility',
      {
        id: 'web-accessibility',
        className: 'landing',
        title: 'Leave NO ONE BEHIND: make your site ACCESSIBLE!',
        description: 'Grow your Business with an accessible website - Analysis, optimisation, 2025 regulations and deadlines, practical benefits and the 4 Principles of Accessibility',
        url: req.url,
        nonce,
        locale: 'en'
      })
  })
  app.get(['/web-accessibility', '/web-accessibility/it'], (req, res) => {
    if (req.locale !== 'it') return res.redirect('/web-accessibility/en')
    res.render('landing/web-accessibility/web-accessibility',
      {
        id: 'web-accessibility',
        className: 'landing',
        title: 'Non lasciare NESSUNO INDIETRO: rendi ACCESSIBILE il tuo sito!',
        description: 'Fai crescere il tuo Business con un sito Web accessibile - Analisi, ottimizzazione, le normativa e scadenze 2025, i vantaggi pratici e i 4 Principi della Accesibilità',
        url: req.url,
        nonce,
        locale: 'it'
      })
  })

  // Web sustainability
  app.get('/web-sustainability/en', (req, res) => {
    if (req.locale === 'it') return res.redirect('/web-sustainability')
    res.render('landing/web-sustainability/web-sustainability',
      {
        id: 'web-sustainability',
        className: 'landing',
        title: 'Is your site ECOLOGICAL and SUSTAINABLE?',
        description: 'Check with us the ecological footprint of your web project, reduce your energy and cost footprint and increase your corporate reputation.',
        url: req.url,
        nonce,
        locale: 'en'
      })
  })
  app.get(['/web-sustainability', '/web-sustainability/it'], (req, res) => {
    if (req.locale !== 'it') return res.redirect('/web-sustainability/en')
    res.render('landing/web-sustainability/web-sustainability',
      {
        id: 'web-sustainability',
        className: 'landing',
        title: 'Il tuo sito è ECOLOGICO e SOSTENIBILE?',
        description: 'Verifica con noi l\'impronta ecologia del tuo progetto web, riduci l\'impronta energetica, i costi e aumenta la tua reputazione aziendale.',
        url: req.url,
        nonce,
        locale: 'it'
      })
  })

  // Rapid prototyping
  app.get('/from-idea-to-prototype/en', (req, res) => {
    if (req.locale === 'it') return res.redirect('/from-idea-to-prototype')
    res.render('landing/from-idea-to-prototype/from-idea-to-prototype',
      {
        id: 'from-idea-to-prototype',
        className: 'landing',
        title: 'Idea > Prototype: development of innovative and high-tech products',
        description: 'From zero to prototype: product design, development and management. We bring your idea to life by turning it into a concrete and functional solution',
        url: req.url,
        nonce,
        locale: 'en'
      })
  })
  app.get(['/from-idea-to-prototype', '/from-idea-to-prototype/it'], (req, res) => {
    if (req.locale !== 'it') return res.redirect('/from-idea-to-prototype/en')
    res.render('landing/from-idea-to-prototype/from-idea-to-prototype',
      {
        id: 'from-idea-to-prototype',
        className: 'landing',
        title: 'Idea > Prototipo: sviluppo di prodotti innovativi ad alto contenuto tecnologico',
        description: 'Da zero a prototipo: progettazione, sviluppo e gestione di un prodotto. Diamo vita alla tua idea trasformandola in una soluzione concreta e funzionale',
        url: req.url,
        nonce,
        locale: 'it'
      })
  })

  // Sitemap.xml
  app.get('/sitemap.xml', function (req, res) {
    res.sendFile('public/sitemap.xml', { root: '.' })
  })
  // Robots.txt
  app.get('/robots.txt', function (req, res) {
    res.sendFile('public/robots.txt', { root: '.' })
  })
}
