import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Recommendation from './Recommendation'
import QuestionForm from './QuestionForm'
import Footer from './Footer'
import '../styles/App.css'

import { useState } from 'react'

function App() {
    const [cart, updateCart] = useState([])

	return (
		<div>
			{/* Utilisation de la prop technique children pour définir Banner */}
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<Recommendation/>
				
			<div className='lmj-layout'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
			
			<QuestionForm/>
	
			<Footer />
		</div>
	)
}

export default App

