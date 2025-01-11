import { Card } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { DataContext } from "../context/DataProvider";


const DetailPage = () => {

    const { id } = useParams();
    const { data } = useContext(DataContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, data]);



    if (!product) {
        return <div>Məhsul tapılmadı!</div>;
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card
                style={{ width: '80%', maxWidth: '600px' }}
                cover={<img style={{ width: '100%', height: '300px', objectFit: 'cover' }} alt="image" src={product.image} />}
            >
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p style={{ fontWeight: 'bold' }}>{product.price} AZN</p>
                <p style={{ fontStyle: 'italic' }}>Kateqoriya: {product.category}</p>
                <Link to='/' style={{ marginTop: '20px' }} >Geri</Link>
            </Card>
        </div>
    )
}

export default DetailPage