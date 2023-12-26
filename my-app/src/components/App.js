import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Recommendation from './Recommendation'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

function App() {
	return (
		<div>
			{/* Utilisation de la prop technique children pour définir Banner */}
			<Banner>
				<div>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
				<Recommendation/>
				</div>
			</Banner>


			<QuestionForm/>
	
			<Cart />
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App

