function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            return idade >= 18? resolve() : reject()
        }, 2000)
    })
}

checaIdade(14)
  .then(function(){
      console.log('Maior de 18')
  })
  .catch(function(){
      console.log('Menor de 18')
  })