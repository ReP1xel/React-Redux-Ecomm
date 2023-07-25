import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {
    const products = useSelector((state) => state.productReducer.productList);

    const allMarkup = products.map((prod) => {
        return(
            <div className="four wide column max-height-style" key={prod.id}>
                <Link to={`/products/${prod.id}`}>
                    <div className="ui link cards">
                        <div className="card product-container">
                            <div className="image image2">
                                <img className="product-image" src={prod.image} atl={prod.title}></img>
                            </div>
                            <div className="content">
                                <div className="header header2">{prod.title}</div>
                                <div className="meta price">{prod.price}$</div>
                                <div className="meta">{prod.category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });
    return(
    <>
        {allMarkup}
    </>
    )            
}

export default ProductComponent;