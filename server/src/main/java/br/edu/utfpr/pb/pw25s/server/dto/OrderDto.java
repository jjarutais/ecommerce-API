package br.edu.utfpr.pb.pw25s.server.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {

    @Id
    private Long id;

    private List<OrderProductDto> items;

    private String paymentMethod;

    private BigDecimal totalAmount;
}
