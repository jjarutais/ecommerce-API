package br.edu.utfpr.pb.pw25s.server.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

//ItensDoPedido = {pedidoProdutosId: Long, pedidoId: Long, produtoId: Long,
//preço: BigDecimal, quantidade: Integer}
@Entity
@Table(name = "tb_order_products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    private int quantity;

    private BigDecimal price;
}
