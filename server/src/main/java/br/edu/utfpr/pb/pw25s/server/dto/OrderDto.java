package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.User;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

//Pedido = {id: Long, data: DateTime, usuarioId: Long}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {

    @Id
    private Long id;

    private Date date;

    private UserDto user;
}
