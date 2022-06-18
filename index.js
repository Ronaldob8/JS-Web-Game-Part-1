function newImage(link, left, bottom) {
    let item = document.createElement('img')
    item.src = link
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px' 
    document.body.append(item)
    return item
}

function newItem(link, left, bottom) {
    let equipment = newImage(link, left, bottom)
    equipment.addEventListener('click', function(){
        equipment.remove();
        let inventoryItem = document.createElement('img')
        inventoryItem.src = link
        inventory.append(inventoryItem)
    })
}
let inventory = document.createElement('div')

function newInventory() {
inventory.style.position = 'fixed'
inventory.style.bottom = '0px'
inventory.style.left = '0px'
inventory.style.width = '400px'
inventory.style.height = '100px'
inventory.style.display = 'flex'
inventory.style.flexDirection = 'row'
inventory.style.alignItems = 'center'
inventory.style.justifyContent = 'space-evenly'
inventory.style.border = '2px solid black'
inventory.style.backgroundColor = 'brown'
document.body.append(inventory)
}

function move(image) {
    image.style.position = 'fixed'
    
    function moveToCoordiantes(left,bottom) {
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return{
        to: moveToCoordiantes
    }
}




newInventory()
newItem('assets/sword.png',300,700)
newItem('assets/sheild.png',165,185)
newItem('assets/staff.png',600,100)

move(newImage('assets/pine-tree.png')).to(450,200)
move(newImage('assets/green-character.gif')).to(100,250)
move(newImage('assets/Tree.png')).to(200,300)
move(newImage('assets/pillar.png')).to(350,100)
move(newImage('assets/crate.png')).to(150,200)
move(newImage('assets/well.png')).to(500,425)