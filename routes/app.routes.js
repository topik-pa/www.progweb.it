module.exports = app => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'Home', url: req.url })
  })
  app.get('/contatti', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Contatti'
      }
    ]
    res.render('contacts/contacts', { id: 'contacts', title: 'Contatti', url: req.url, breadcrumbs })
  })
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs })
  })

  // TOPIC
  app.get('/html', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli HTML'
      }
    ]
    res.render('topic/html/html', { id: 'html', title: 'Articoli HTML', url: req.url, breadcrumbs })
  })
  app.get('/javascript', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli JavaScript'
      }
    ]
    res.render('topic/js/js', { id: 'javascript', title: 'Articoli JavaScript', url: req.url, breadcrumbs })
  })
  app.get('/engineering', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Articoli Engineering'
      }
    ]
    res.render('topic/eng/eng', { id: 'eng', title: 'Articoli Engineering', url: req.url, breadcrumbs })
  })

  // ARCHIVE
  app.get('/novembre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio novembre 2023'
      }
    ]
    res.render('archive/nov2023/nov2023', { id: 'nov2023', title: 'Archivio novembre 2023', url: req.url, breadcrumbs })
  })
  app.get('/ottobre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Archivio ottobre 2023'
      }
    ]
    res.render('archive/oct2023/oct2023', { id: 'oct2023', title: 'Archivio ottobre 2023', url: req.url, breadcrumbs })
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
      breadcrumbs
    })
  })

  // GRAPHS
  app.get('/grafici', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Grafici'
      }
    ]
    res.render('graphs/graphs', { id: 'graphs', title: 'Grafici', url: req.url, breadcrumbs })
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
        breadcrumbs
      })
  })
  // Specific
  app.get('/architettura-del-sw-definizione-obiettivi', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Post',
        url: '/posts'
      },
      {
        name: 'Architettura del Software: definizione e obiettivi'
      }
    ]
    res.render('post/architettura-del-sw-definizione-obiettivi/architettura-del-sw-definizione-obiettivi',
      {
        id: 'arch-sw-def-adv',
        className: 'post',
        title: 'Architettura del Software: definizione e obiettivi',
        url: req.url,
        breadcrumbs
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
        breadcrumbs
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
      { id: 'js-closure', className: 'post', title: 'JavaScript Closure', url: req.url, breadcrumbs })
  })
}
