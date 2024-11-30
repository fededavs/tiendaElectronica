let cart = []

function actualizar() {
    const cartItemsContainer = document.getElementById('cart-items')
    const totalElementos = document.getElementById('total')

    let total = 0
    cartItemsContainer.innerHTML = ''

    //Mostrar los productos en el carrito
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div')

        // Crear el texto del producto
        const itemText = document.createElement('span')
        itemText.textContent = `${item.name} - $${item.price.toLocaleString()}`
        itemDiv.appendChild(itemText)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Eliminar'
        deleteButton.classList.add('remove-button')
        deleteButton.addEventListener('click', () => eliminarDelCarrito(index))

        itemDiv.appendChild(deleteButton)
        cartItemsContainer.appendChild(itemDiv)

        total += item.price //Suma el precio del producto
    });

    // Actualizar el total
    totalElementos.textContent = `Total: $${total.toLocaleString()}`
}

//Agregar un producto al carrito
function añadir(event) {
    const button = event.target
    const name = button.getAttribute('data-nombre')
    const price = parseInt(button.getAttribute('data-precio'))

    cart.push({ name, price })
    alert(`${name} ha sido agregado al carrito!`)

    actualizar()
}

function eliminarDelCarrito(index) {
    cart.splice(index, 1)
    actualizar()
}

//Asignar evento a los botones agregar al carrito
document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', añadir)
})

//Llamar a la funcion para actualizar el carrito cuando la pagina cargue
window.onload = actualizar
