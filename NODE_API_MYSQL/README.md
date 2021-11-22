## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#==================================================

Status de respostas:

200 - OK (informa que deu certo a operacao);
201 - Created (informa alem de que deu certo, que executou uma operacao);
202 - Accepted (eu aceitei sua requisicao, mas ainda nao processei, estou processando);

400 - Bad request (deu erro, deu ruim);
401 - Unauthorized -- Autenticacao, tem carater temporario (Voce nao ta autenticado ou esta autenticado incorretamente, mas se enviar a autenticacao certa, ele muda);
403 - Forbidden -- Autorizacao, tem carater permanente (Eu sei quem vc eh, estou vendo seu token e seu usuario, mas vc nao tem autorizacao, nao adianta trocar senha nem token);

500 - Internal server error (erro geral);
501 - Not implemented (a API nao suporta essa funcionalidade que foi solicitada);
503 - Service Unavaliable (a API executa a operacao, mas no momento esta indisponivel, foi correto o envio, mas no momento estamos em manutencao);

#==================================================

- Para criar sua tabela:

CREATE TABLE pessoas(
  `id_pessoa` TINYINT(255) NOT NULL AUTO_INCREMENT,
  `nome` CHAR(100) NOT NULL,
  `rg` CHAR(100) NOT NULL,
  `cpf` CHAR(100) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `data_admissao` DATE NOT NULL,
  `funcao` CHAR(100) NULL,
PRIMARY KEY (`id_pessoa`));

#==================================================

- Caso precise de dados de teste:

INSERT INTO pessoas(`nome`,`rg`,`cpf`,`data_nascimento`,`data_admissao`) VALUES
('Alberto Vieira','25.547.145-2','168.607.120-50','1997-07-01','2020-09-28'),
('Alexandre Teixeira','78.474.888-8','877.733.889-89','1982-08-16','2020-05-15'),
('Ana Carolina Souza','57.565.667-8','766.370.920-96','1982-03-19','2016-08-19'),
('Ana Paula Soares','56.744.331-9','746.917.704-52','1984-09-01','2019-08-25'),
('Antônio Siqueira','82.689.888-5','695.991.412-45','1990-07-26','2016-05-18'),
('Arthur Silva','44.254.402-9','345.898.157-08','1996-12-30','2016-04-28'),
('Bárbara Santos','57.106.603-3','587.914.205-66','2000-09-04','2018-11-17'),
('Beatriz Santana','70.855.308-2','093.084.203-04','1994-05-17','2018-03-05'),
('Caio Sampaio','14.475.367-9','483.764.953-07','1995-11-18','2020-06-03'),
('Carla Rodrigues','62.632.082-5','566.413.961-13','1996-08-04','2015-03-31'),
('Carlos Pinta Rocha','23.782.145-5','053.166.034-60','1983-07-07','2017-03-08'),
('Cauê Filho Ribeiro','33.548.795-1','491.145.119-15','1981-01-27','2020-12-31'),
('Cláudia Reis dos Santos','54.434.082-9','511.020.732-80','1986-08-04','2020-09-25'),
('Cláudio Ramos','41.433.308-6','673.452.026-90','1982-08-12','2019-11-01'),
('Daiane Pereira','90.814.741-8','714.352.424-58','2002-11-22','2017-06-15'),
('Diego Penha','43.099.952-1','319.630.074-00','1983-02-23','2017-12-01'),
('Eduardo Oliveira','46.242.609-1','772.210.114-80','2001-02-12','2020-05-10'),
('Eliana Nunes','84.269.336-7','130.431.959-59','1994-07-03','2018-01-16'),
('Enzo Nascimento','68.926.227-4','356.749.355-25','1989-05-05','2016-08-23'),
('Fabiana Moura','69.431.526-9','149.992.268-00','1995-08-21','2019-03-26'); 