import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const {products} = useLoaderData();

    // const [products, setProducts] = useState([]);

    // setProducts(loadedProducts.products);

    return (
        <div>
            <h3 className='text-4xl'>Products: {products.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">{
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }</div>
        </div>
    );
};

export default Products;