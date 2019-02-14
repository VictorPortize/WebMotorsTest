let list = [
    [{asd:'sadasd',sasd:'sadasd',edsasd:'sadasd'}],
    [{asdd:'sadasd',ssasd:'sadasd',edsaasd:'sadasd'}],
    [{asgd:'sadasd',saasd:'sadasd',eds2asd:'sadasd'}]
]
let array = []
for(lista of list){
    array.push(...lista)
}
console.log(array)