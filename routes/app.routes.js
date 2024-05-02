const posts = require('../assets/data/post.js')

module.exports = (app, nonce) => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'PWI - Home page', url: req.url, posts, nonce })
  })
  app.get('/contatti', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Contatti'
      }
    ]
    res.render('contacts/contacts', { id: 'contacts', title: 'Contatti', url: req.url, breadcrumbs, nonce })
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

  // ARCHIVE
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
  app.get('/programmazione-strutturata-oggetti-funzionale', (req, res) => {
    const title = 'I tre paradigmi di programmazione: strutturata, ad oggetti e funzionale'
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
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/javascript-html-tabella-dinamica', (req, res) => {
    const title = 'Una tabella dinamica in HTML, JavaScript e CSS - codice, esempi e spiegazione'
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
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/css-selettore-has-esempi', (req, res) => {
    const title = 'Il selettore :has() in CSS - descrizione ed esempi pratici'
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
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/node-setup-progetto', (req, res) => {
    const title = 'Setup di un progetto Node / Express'
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
        url: req.url,
        breadcrumbs,
        posts,
        nonce
      })
  })
  app.get('/architettura-del-sw-definizione-obiettivi', (req, res) => {
    const postTitle = 'Architettura del Software: definizione e obiettivi'
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: postTitle
      }
    ]
    res.render('post/architettura-del-sw-definizione-obiettivi/architettura-del-sw-definizione-obiettivi',
      {
        id: 'arch-sw-def-adv',
        className: 'post',
        title: postTitle,
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
      { id: 'js-closure', className: 'post', title: 'JavaScript Closure', url: req.url, breadcrumbs, posts, nonce })
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
