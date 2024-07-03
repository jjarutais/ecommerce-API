import { ICartItem, ICartState, ICartAction } from '@/commons/interfaces';

class CartService {
  private static instance: CartService;
  private cartState: ICartState;

  private constructor() {
    const savedCart = localStorage.getItem('cart');
    this.cartState = savedCart ? JSON.parse(savedCart) : { items: [] };
  }

  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartState));
  }

  public clearCart(): void {
    this.cartState = { items: [] };
    localStorage.removeItem('cart');
  }

  public getCartState(): ICartState {
    return this.cartState;
  }

  public addItem(item: ICartItem): void {
    const existingItem = this.cartState.items.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartState.items.push({ ...item, quantity: 1 });
    }
    this.saveCart();
  }

  public removeItem(id: number): void {
    this.cartState.items = this.cartState.items.filter(item => item.id !== id);
    this.saveCart();
  }

  public updateQuantity(id: number, quantity: number): void {
    const item = this.cartState.items.find(cartItem => cartItem.id === id);
    if (item) {
      item.quantity = quantity;
    }
    this.saveCart();
  }
}

export default CartService.getInstance();