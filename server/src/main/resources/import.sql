insert into tb_category (name) values ('Skate');
insert into tb_category (name) values ('Casual');
insert into tb_category (name) values ('Fashion');
insert into tb_category (name) values ('Edições Limitadas');
insert into tb_category (name) values ('Infantil');

insert into tb_product (name, description, price, category_id) values ('Vans Old Skool', 'Clássico tênis de skate, com listra lateral e design baixo.', 60.0, 1);
insert into tb_product (name, description, price, category_id) values ('Vans Sk8-Hi', 'Tênis de cano alto para suporte e estilo em manobras de skate.', 70.0, 1);
insert into tb_product (name, description, price, category_id) values ('Vans Authentic', 'Design simples e elegante para uso casual.', 55.0, 2);
insert into tb_product (name, description, price, category_id) values ('Vans Era', 'Confortável e estiloso, perfeito para o dia a dia.', 50.0, 2);
insert into tb_product (name, description, price, category_id) values ('Vans Slip-On', 'Fácil de calçar, com design icônico e prático.', 45.0, 2);
insert into tb_product (name, description, price, category_id) values ('Vans Checkerboard Slip-On', 'Padrão de xadrez icônico, reconhecido mundialmente.', 50.0, 3);
insert into tb_product (name, description, price, category_id) values ('Vans Ultrarange EXO', 'Tênis robusto e confortável para aventuras urbanas.', 75.0, 4);
insert into tb_product (name, description, price, category_id) values ('Vans Asher V', 'Modelo infantil com fecho em velcro, prático e durável.', 40.0, 5);

INSERT INTO tb_user(display_name, username, password) VALUES ('Administrador', 'admin','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');
INSERT INTO tb_user(display_name, username, password) VALUES ('Teste', 'test','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');