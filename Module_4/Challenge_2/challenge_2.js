var userElement = document.querySelector('input')
var ulElement = document.querySelector('#ul')

function repoRender(repositories) {
    ulElement.innerHTML = ''
    for (repo of repositories) {
        var li = document.createElement('li')
        var liText = document.createTextNode(repo.name)

        li.appendChild(liText)
        ulElement.appendChild(li)
    }
}

function repoList() {
    axios.get(`https://api.github.com/users/${userElement.value}/repos`)
    .then(function(response) {
        repoRender(response.data)
    })
    .catch(function(error) {
        alert('ERROR 404')
    })
}