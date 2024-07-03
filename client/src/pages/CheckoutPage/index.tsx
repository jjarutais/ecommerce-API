import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartService from '@/service/CartService';
import OrderService from '@/service/OrderService';
import { NavBar } from '@/components/NavBar';
import Footer from '@/components/Footer';

const CheckoutPage: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const cartItems = CartService.getCartState().items;
    const navigate = useNavigate();

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = async () => {
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        try {
            await OrderService.placeOrder(paymentMethod, cartItems);
            CartService.clearCart();
            navigate('/orders');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };


    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-4">Resumo dos itens do pedido:</h3>
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{item.name}</h6>
                                        <small className="text-muted">Quantidade: {item.quantity}</small>
                                    </div>
                                    <span className="text-muted">R${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>R${calculateTotal()}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h3 className="mb-4">Selecione o método de pagamento:</h3>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="PIX"
                                id="pix"
                                checked={paymentMethod === 'PIX'}
                                onChange={handlePaymentMethodChange}
                            />
                            <label className="form-check-label" htmlFor="pix">
                                PIX
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="Cartão de crédito"
                                id="creditCard"
                                checked={paymentMethod === 'Cartão de crédito'}
                                onChange={handlePaymentMethodChange}
                            />
                            <label className="form-check-label" htmlFor="creditCard">
                                Cartão de crédito
                                {/* <img src="https://cdn.icon-icons.com/icons2/2341/PNG/512/visa_payment_method_card_icon_142729.png" alt="Visa" className="ml-2" width="40" />
                                <img src="https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_payment_method_card_icon_142734.png" alt="MasterCard" className="ml-2" width="40" />
                                <img src="https://cdn.icon-icons.com/icons2/2341/PNG/512/amex_payment_method_card_icon_142744.png" alt="Amex" className="ml-2" width="40" /> */}
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                value="Boleto"
                                id="boleto"
                                checked={paymentMethod === 'Boleto'}
                                onChange={handlePaymentMethodChange}
                            />
                            <label className="form-check-label" htmlFor="boleto">
                                Boleto
                            </label>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block" onClick={handleCheckout}>Finalizar compra</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckoutPage;
