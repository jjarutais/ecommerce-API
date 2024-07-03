import { api } from '@/lib/axios';
import { ICartItem } from '@/commons/interfaces';

const orderURL = '/orders';

const placeOrder = async (paymentMethod: string, items: ICartItem[]): Promise<any> => {
    const orderData = {
        paymentMethod,
        items: items.map(item => ({
            product: { id: item.id },
            quantity: item.quantity
        }))
    };

    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated.');
        }

        const response = await api.post(orderURL, orderData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error placing order:', error);
        throw error;
    }
};

const OrderService = {
    placeOrder
};

export default OrderService;