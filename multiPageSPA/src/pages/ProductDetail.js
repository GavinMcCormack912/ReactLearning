import { useParams, Link } from 'react-router-dom';

function ProductDetailPage() {
    const params = useParams()
    const product = params.productId;
    return <>
        <h1>Product Details</h1>
        <p>Product ID: {product}</p>
        <p><Link to=".." relative='path'>Back</Link></p>
    </>
} export default ProductDetailPage;