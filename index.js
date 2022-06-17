function newImage(link, left, bottom){
    let item = document.createElement('img')
    item.src = link
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}
function newItem(link, left, bottom){
let equipment = newImage(link, left, bottom)

equipment.addEventListener('dblclick', function(){
    equipment.remove()
})
}

newItem('assets/sword.png',570,405)
newItem('assets/sheild.png',165,185)
newItem('assets/staff.png',600,100)



newImage('assets/pine-tree.png',450, 200)
newImage('assets/green-character.gif',100,100)
newImage('assets/Tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)