-- Create sequence 
create sequence sq_AgMaquiagem
minvalue 1
maxvalue 99999
start with 1
increment by 1
nocache;

-- Criar tabela de agendamento de maquiagem
create table AgMaquiagem(
    codAgenda number not null,
    codcli number not null,
    codServ number not null,
    dataAgen varchar2(10),
    horaAgen varchar2(10)
);

-- TG_ADD_AgMaquiagem
create or replace trigger tg_add_AgMaquiagem
  before insert on leo.Agmaquiagem
  for each row

begin
  select leo.sq_agmaquiagem.nextval
  into :new.codAgenda
  from dual;
end TG_FUNC_DEP;
/
