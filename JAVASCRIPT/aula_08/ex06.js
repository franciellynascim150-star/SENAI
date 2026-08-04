let encontrado = produtos.find(function(item){
    return itemm.id ===3
})
console.log (encontrado)

 let nomeMaiores = produtos.filter(function(item){
    return item.preco >500
 })