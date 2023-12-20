import '../styles/Banner.css'
import logo from '../assets/logo.png'

// Style avec className appelé par Banner.css.
// L'attribut className permet de préciser une classe 
// à un élément React pour lui indiquer du CSS.
function Banner() {

    return <div className='lmj-banner'>
    <img src={logo} alt='La maison jungle' className='lmj-logo' />
    <h1>La maison jungle</h1>
</div>
}
// Autre possibilité de style avec inline style (non recommandé) 
// function Banner() {
//     return <div style={{
//         color: 'black',
//         textAlign: 'right',
//         padding: 32, 
//         borderBottom: 'solid 3px black'
//     }}
//     >
// </div>
// }

// Autres possibilité avec 
// https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
export default Banner