import ProductBody from "./ProductBody"
import ProductPrice from "./ProductPrice"
import "./Product.css"
function Product() {
    return <>
        <div className="Product">
            <ProductBody title="Dove Shampoo" description="Anti-Dandruff" />
            <ProductPrice price={500} />
        </div>
        <div className="Product">
            <ProductBody title="Durex Condom" description="Gives extra pleasure" />
            <ProductPrice price={100} />
        </div>
        <div className="Product">
            <ProductBody title="Muscle Blaze" description="32 Gram of protein" />
            <ProductPrice price={2500} />
        </div>
    </>
}

export default Product;