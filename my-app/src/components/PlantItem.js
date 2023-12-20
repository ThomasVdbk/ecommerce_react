import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem ({id, cover, name, water, light, isBestSale, isSpecialOffer }){
    return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
                {isBestSale ? <span>🔥</span> : null}
				{/* Fonctionne aussi avec cette condition */}
                {/* {plant.isBestSale && <span>🔥</span>} */}
				{isSpecialOffer && <div className="lmj-sales">Soldes</div>}

				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem