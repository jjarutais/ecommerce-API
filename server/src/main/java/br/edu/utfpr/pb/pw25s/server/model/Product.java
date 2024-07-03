package br.edu.utfpr.pb.pw25s.server.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

//Produto = {id: Long, nome: String, descricao: String,
//preço: BigDecimal, urlImagem: String, categoriaId: Long}

@Entity
@Table(name = "tb_product")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private BigDecimal price;

    private String image;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}