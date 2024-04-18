package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

//Pedido = {id: Long, data: DateTime, usuarioId: Long}

@Data
public class OrderDto {

    private Long id;

    private Date data;

    private UserDto user;
}
