import '../styles/Banner.css'

// Style avec className appelé par Banner.css.
// L'attribut className permet de préciser une classe 
// à un élément React pour lui indiquer du CSS.
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}
export default Banner



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
