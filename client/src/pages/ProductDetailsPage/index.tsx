import Footer from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import ProductService from '@/service/ProductService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartService from '@/service/CartService';
import { IProduct } from '@/commons/interfaces';
import Swal from 'sweetalert2';

export function ProductDetailsPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const cartAdded = () => {
        Swal.fire({
            title: "Sucesso",
            text: "Produto adicionado ao carrinho!",
            icon: "success"
        });
    }

    const fetchProduct = async (id: number) => {
        try {
            const { data } = await ProductService.findOne(id);
            setProduct(data);
            setLoading(false);
        } catch (error) {
            
            setError("Error fetching product. Please try again later.");
            setLoading(false);
        }
    };

    useEffect(() => {
        const id = Number(productId);
        fetchProduct(id);
    }, [productId]);

    const addToShoppingList = (product: IProduct) => {
        CartService.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
        cartAdded();
    };

    if (loading) {
        return <div className="container text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="container text-center mt-5">{error}</div>;
    }

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="mb-4">Detalhes do produto</h1>
                {product && (
                    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text">Preço: R${product.price}</p>
                            <p className="card-text">Descrição: {product.description}</p>
                            <button className="btn btn-primary" onClick={() => addToShoppingList(product)}>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}