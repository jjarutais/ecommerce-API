package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import java.math.BigDecimal;

//ItensDoPedido = {pedidoProdutosId: Long, pedidoId: Long, produtoId: Long,
//preço: BigDecimal, quantidade: Integer}

@Data
public class OrderProductDto {

    private Long id;

    private OrderDto order;

    private ProductDto product;

    private int quantity;

    private BigDecimal price;
}
