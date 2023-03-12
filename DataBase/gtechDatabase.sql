create database GTech;
use Gtech;

create table cadastro(
 idUsuario int primary key auto_increment,
 identidade varchar(20) not null,
 CNPJ char(18) not null,
 -- arrumar no site
 CPF char(15),
 nome varchar(40),
 nomeEmpresa varchar(80),
 telefone char(14) not null,
 -- adicionar mascara de entrada depois '+55(xx)xxxxx-xxxx'
endereco varchar(80) not null,
 email varchar(80) not null,
  -- validação com @ posteriormente
 senha varchar(30) not null,
 constraint chkPessoa check(identidade IN ('Juridica', 'Fisica')),
 constraint chkEmail check(email like('%@%')),
 constraint cnkCNPJ check(CPNJ like('%/%')));
 
 create table sensor(
 idSensor int primary key auto_increment,
 idUsuario int,
 nomeSensor varchar(20) not null,
 tipoSensor varchar(40) not null
 );
 
 create table dadosSensor(
 nLeitura int primary key auto_increment,
 luminosidade float,
 temperatura float,
 umidade float,
 horario datetime default current_timestamp);
 
 insert into cadastro values
 (null, 'Fisica', null, '418.094.188-03', 'Gisleine', null, '(11)95431-2058', 'moradia foda', 'gisele.silva@emailpessoal.com', 'senhafoda'),
 (null, 'Juridica', '142.692.757/0001-06', null, null, 'Uvas legais', '(11)95471-2058', 'Paulista', 'amouvas@uvaslegais.com', 'senhalegal'),
 (null, 'Juridica', '523.935.485/0001-42', null, null, 'Uvas vinho', '(11)95471-2878', 'Santo andré', 'vinhos@uvasvinho.com', 'senhatop'),
 (null, 'Fisica', null, '454.066.693-58', 'Iracema Araujo', null, '(11)98789-4057', 'São Caetano', 'iraci.email@email.com', 'senha123');
 
 insert into sensor values
 (100, 1, 'DHT11', 'Umidade'),
 (200, 2, 'LM35', 'Temperatura'),
 (300, 2, 'LDR', 'Luminosidade');
 
 insert into dadosSensor value
 (null, 1000, 2428, 37, '06:00:01'),
 (null, 1001, 2628, 36, '12:00:01'),
 (null, 998, 3024, 354, '18:00:01'),
 (null, 1010, 2030, 323, '24:00:01');
 
 desc sensor;
 select * from dadosSensor;
 
 