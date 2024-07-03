import React from 'react';
import { IProduct } from '@/commons/interfaces.ts';
import "./style.css";

interface TrProps {
  product: IProduct;
}

export const ProductCard: React.FC<TrProps> = ({ product }) => (
    <a className="product-card col-3 m-5" href={`/products/${product.id}`}>
      <img className="product-card__image" src={product.image} />
      <p className="product-card__name">{product.name}</p>
      <p className="product-card__price">R${product.price}</p>
    </a>
);