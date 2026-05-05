import "./ProductBody.css"
function ProductBody({title, description}){
    return <div className="ProductBody">
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
}

export default ProductBody;