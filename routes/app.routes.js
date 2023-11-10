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
        name: 'HTML'
      }
    ]
    res.render('topic/html/html', { id: 'html', title: 'HTML', url: req.url, breadcrumbs })
  })
  app.get('/javascript', (req, res) => {
    const breadcrumbs = [
      {
        name: 'JavaScript'
      }
    ]
    res.render('topic/js/js', { id: 'javascript', title: 'JavaScript', url: req.url, breadcrumbs })
  })

  // ARCHIVE
  app.get('/settembre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Settembre 2023'
      }
    ]
    res.render('archive/sept2023/sept2023', { id: 'sept2023', title: 'Settembre 2023', url: req.url, breadcrumbs })
  })
  app.get('/ottobre-2023', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Ottobre 2023'
      }
    ]
    res.render('archive/oct2023/oct2023', { id: 'oct2023', title: 'Ottobre 2023', url: req.url, breadcrumbs })
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
  app.get('/javascript-closure', (req, res) => {
    const breadcrumbs = [
      {
        name: 'JavaScript Closure'
      }
    ]
    res.render('post/javascript-closure/javascript-closure',
      { id: 'js-closure', title: 'JavaScript Closure', url: req.url, breadcrumbs })
  })
  app.get('/html-attributo-ping', (req, res) => {
    const breadcrumbs = [
      {
        name: 'L\'attributo \'ping\' del tag &lt;a&gt; in HTML5'
      }
    ]
    res.render('post/html-ping-attribute/html-ping-attribute',
      {
        id: 'html-ping-attribute',
        title: 'L\'attributo \'ping\' del tag <a> in HTML',
        url: req.url,
        breadcrumbs
      })
  })
}
