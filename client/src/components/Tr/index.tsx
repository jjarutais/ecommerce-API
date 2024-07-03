import React from 'react';
import { IProduct } from '@/commons/interfaces.ts';

interface TrProps {
  product: IProduct;
}

const mystyle = {
  width: "50px"
};

export const Tr: React.FC<TrProps> = ({ product }) => (
  <tr key={product.id}>
    <a href=""></a>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.category.name}</td>
    <td><img src={product.image} alt="" style={mystyle} /></td>

    <td>
      {/* <Link
          className="btn btn-primary"
          to={`/products/${product.id}`}
        >
          Editar
        </Link> */}
      <button className="btn btn-danger">
        {/* onClick={() => onRemove(product.id!)} */}
        Remover
      </button>
    </td>
  </tr>
);