import React, { useState, useEffect } from 'react';
import CartService from '@/service/CartService';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { ICartItem } from '@/commons/interfaces';
import Footer from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

const CartPage: React.FC = () => {
    const [items, setItems] = useState<ICartItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cartItems = CartService.getCartState().items;
        setItems(cartItems);
        calculateTotal(cartItems);
    }, []);

    const handleQuantityChange = (id: number, quantity: number) => {
        CartService.updateQuantity(id, quantity);
        const updatedItems = CartService.getCartState().items;
        setItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = (id: number) => {
        CartService.removeItem(id);
        const updatedItems = CartService.getCartState().items;
        setItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const calculateTotal = (items: ICartItem[]) => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleCheckout = () => {
        if (AuthService.isAuthenticated()) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1 className="mb-4">Meu carrinho</h1>
                {items.length === 0 ? (
                    <div>
                        <p>O carrinho está vazio</p>
                        <button className="btn btn-primary" onClick={() => navigate('/products')}>
                            Ir para a seção de produtos
                        </button>
                    </div>
                ) : (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>R${item.price.toFixed(2)}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                            />
                                        </td>
                                        <td>R${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>
                                                Remover
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-right mt-3">
                            <h3>Total: R${total.toFixed(2)}</h3>
                            <button className="btn btn-primary mt-3" onClick={handleCheckout}>Prosseguir para o Checkout</button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
