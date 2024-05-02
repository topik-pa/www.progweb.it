export const post005 = {
  init: async () => {
    const $table = document.querySelector('#table')
    const $tbody = $table.getElementsByTagName('tbody')[0]

    const loadRemoteData = async () => {
      $table.classList.add('loading')
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) throw (Error(`Status: ${response.status}. ${response.statusText}`))
          return response.json()
        })
        .then((json) => {
          populateTable(json)
        })
        .catch((error) => {
          $table.classList.add('error')
          console.error(error)
        })
        .finally(() => {
          $table.classList.remove('loading')
        })
    }

    const populateTable = (rows) => {
      $tbody.innerText = ''
      for (const row of rows) {
        const $tr = document.createElement('tr')
        $tr.innerHTML = `
          <td>${row.name}</td>
          <td>${row.username}</td>
          <td>${row.email}</td>
          <td>${row.phone}</td>
        `
        $tbody.appendChild($tr)
      }
    }

    loadRemoteData()
  }
}
