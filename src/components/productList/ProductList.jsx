import "./productList.css";
import Product from "../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl=texts">
                <h1 className="pl-title"> Add a title</h1>
                <p className="pl-desc">
                    add some information describing here
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList