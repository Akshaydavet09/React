import "./Product.css"
function Product({title, description, price} ){
    let color = {backgroundColor: price>1000 ? "pink" : ""};
    return <div className="Product" style={color} >
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h4>{price}</h4>
        { price>1000 && <p>Discount 5% available</p> }
    </div>
    
}

export default Product