function get() {
  fetch(`https://631fb85658a1c0fe9f6e2e89.mockapi.io/v1/api/users`)
    .then(
      data => {
        return data.json();
      }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function getById(id) {
  fetch(`https://631fb85658a1c0fe9f6e2e89.mockapi.io/v1/api/users/${id}`)
    .then(
      data => {
        return data.json();
      }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


const optionsDelete = {
  method: 'DELETE',
}

function deleteById(id) {
  fetch(`https://631fb85658a1c0fe9f6e2e89.mockapi.io/v1/api/users/${id}`, optionsDelete)
    .then(
      data => {
        return data.json();
      }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const optionsPut = {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
}
function putById(id) {
  fetch(`https://631fb85658a1c0fe9f6e2e89.mockapi.io/v1/api/users/${id}`, options)
    .then(
      data => {
        return data.json();
      }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
const optionsPost = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
}
function post(id, method) {
  fetch(`https://631fb85658a1c0fe9f6e2e89.mockapi.io/v1/api/users/${id}`, optionsPost)
    .then(
      data => {
        return data.json();
      }
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
