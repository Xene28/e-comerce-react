import { useParams } from "react-router-dom";

function ProductsEdit() {
    const { id } = useParams()
    
    return <h2>Edit Product</h2>
}

export default ProductsEdit;