export interface IUserSignup {
  displayName: string;
  username: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ICategory;
  image: string;
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export interface ICartState {
    items: ICartItem[];
}

export interface ICartAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY';
    payload: ICartItem;
}