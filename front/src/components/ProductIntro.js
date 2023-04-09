
function ProductIntro(){
    return (
        <div className='card-frame'>
            <div className='product-info'>
            <div className='product-img-wrapper'><img src={process.env.PUBLIC_URL + '/imagesProducts/Photo/1/1.1.png'} className='product-img' alt='user'/></div>
            <p className='model'>D5300 Kit</p>
            <p className='brand'>Canon</p>
            <div className='card-block-nav'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
            </div>
            </div>
            <div className='product-pricing'>
            <div className='product-pricing-box'>
                <span className='product-pricing-box-price'>230 UAH</span>
                <span>Будній</span>
            </div>
            <div className='product-pricing-box weekend'>
                <span className='product-pricing-box-price'>250 UAH</span>
                <span>Вихідний</span>
            </div>
            <div className='product-pricing-box week'>
                <span className='product-pricing-box-price'>3250 UAH</span>
                <span>Тиждень</span>
            </div>
            <div className='product-pricing-box month'>
                <span className='product-pricing-box-price'>6250 UAH</span>
                <span>Місяць</span>
            </div>
            </div>
            <div className='product-options'>
            <button className='view-details'>Деталі товару</button>
            <button className='add-to-basket'><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket.png'} alt='basket'/> В кошик </button>
            </div>
        </div>
    )
}

export default ProductIntro