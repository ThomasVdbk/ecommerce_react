import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
	// useState pour augmenter la valeur du panier
    const [cart, updateCart] = useState(0)
	// useState pour afficher ou cacher le panier
	const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <div>Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button> 
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}
export default Cart