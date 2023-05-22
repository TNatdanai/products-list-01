export function Products(props) {
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <span className='productName'>{props.detail}</span>
                    <div className='displayStack__1'>
                        <div className='productPrice'>฿{props.price}</div>
                        <h3 className='productSales'>{props.totalSales}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}