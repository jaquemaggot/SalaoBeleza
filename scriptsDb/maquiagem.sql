create sequence sq_clientes
  minvalue 1
  maxvalue 99999
  start with 1
  increment by 1
  nocache;


create table ag_cliente(
    codcli        number not null,
    nome          varchar2(40) not null,
    cpf           varchar2(15) not null,
    rg            varchar2(13),
    sexo          char(1),
    estciv        varchar2(10),
    observacao    varchar2(100)
);
alter table ag_cliente
  add constraint PK_AG_CLIENTE primary key (CODCLI);


CREATE OR REPLACE TRIGGER tg_add_id_cliente
  BEFORE INSERT ON LEO.ag_cliente
  FOR EACH ROW
  
  begin
    SELECT LEO.SQ_CLIENTES.nextval
      INTO :NEW.CODCLI
    FROM DUAL;
END tg_add_id_cliente;
/

/*====================================================================================*/


create sequence sq_srv_maquiagem
  minvalue 1
  maxvalue 9999
  start with 1
  increment by 1
  nocache;

create table srv_maquiagem(
  codSrv    number not null,
  nomeSrv   varchar2(40) not null,
  valor     number not null,
  descricao varchar2(100)
)

alter table srv_maquiagem
  add constraint PK_SRV_MAQUIAGEM primary key (codSrv);

create or replace trigger tg_add_srv_maquiagem
  before insert on leo.srv_maquiagem
  for each row
  begin
    select leo.sq_srv_maquiagem.nextval
      into :new.codSrv
    from dual;
end tg_add_srv_maquiagem;
/

/*====================================================================================*/

create sequence sq_ag_maquiagem
  minvalue 1
  maxvalue 99999
  start with 1
  increment by 1
  nocache;

create table ag_maquiagem(
  codAgenda number not null,
  codcli    number not null,
  codServ   number not null,
  dataAgen  varchar2(10),
  horaAgen  varchar2(10)
);


alter table leo.ag_maquiagem
  add constraint FK_CLI_AG_MAQ foreign key (codcli)
  references leo.ag_cliente (codcli);

alter table leo.ag_maquiagem
  add constraint FK_AG_MAQ_SRV_MAQ (codServ)
  references leo.srv_maquiagem (codSrv)


create or replace trigger tg_add_ag_maquiagem
  before insert on leo.ag_maquiagem
  for each row
  begin
    select leo.sq_ag_maquiagem.nextval
      into :new.codAgenda
    from dual;
end TG_FUNC_DEP;
/


create sequence sq_srv_cabelo
  minvalue 1
  maxvalue 99999
  start with 1
  increment by 1
  nocache;

create table srv_cabelo(
  codSrv    number not null,
  nomeSrv   varchar2(40) not null,
  valor     number not null,
  descricao varchar2(100)
);

alter table srv_cabelo add
  constraint PK_SRV_CABELO primary key (codSrv);


create or replace trigger tg_add_srv_cabelo
  before insert on leo.srv_cabelo
  for each row
  begin
    select leo.sq_srv_cabelo.nextval
    into :new.codSrv
    from dual;
end tg_add_srv_cabelo;
/

/*==========================================================================*/

create sequence sq_ag_cabelo
  minvalue 1
  maxvalue 99999
  start with 1
  increment by 1
  nocache;

create table ag_cabelo(
  codAgenda   number not null,
  codCli      number not null,
  codSrv      number not null,
  dataAgen  varchar2(10),
  horaAgen  varchar2(10)
);

alter table ag_cabelo add
  constraint FK_CLI_AG_CAB foreign key (codCli)
  references leo.ag_cliente (codcli);

alter table ag_cabelo add
  constraint FK_AG_CAB_SRV_CAB foreign key (codSrv)
  references leo.srv_cabelo (codSrv);

create or replace trigger tg_add_ag_cabelo
  before insert on leo.ag_cabelo
  for each row
  begin
    select leo.sq_ag_cabelo.nextval
    into :new.codAgenda
    from dual;
end tg_add_ag_cabelo;
/

/*=======================================================================*/  

create sequence sq_srv_manicure
  minvalue 1
  maxvalue 99999
  start with 1
  increment by 1
  nocache;

create table srv_manicure(
  codSrv    number not null,
  nomeSrv   varchar2(40) not null,
  valor     number not null,
  descricao varchar2(100)
);

alter table srv_manicure add
  constraint PK_SRV_MANICURE primary key (codSrv);

create or replace trigger tg_add_srv_manicure
  before insert on leo.srv_manicure
  for each row
  begin
    select leo.sq_srv_manicure.nextval
    into :new.codSrv
    from dual;
end tg_add_srv_manicure;
/

/* =====================================================================*/

create sequence sq_ag_manicure
  minvalue 1
  maxvalue 999999
  start with 1
  increment by 1
  nocache;

create table ag_manicure(
  codAgenda   number not null,
  codCli      number not null,
  codSrv      number not null,
  dataAgen  varchar2(10),
  horaAgen  varchar2(10)
);

alter table ag_manicure add 
  constraint FK_CLI_AG_MAN foreign key (codCli)
  references leo.ag_cliente (codcli);

alter table ag_manicure add
  constraint FK_AG_MAN_SRV_MAN foreign key (codSrv)
  references leo.srv_manicure (codSrv);

create or replace trigger tg_add_ag_manicure
  before insert on leo.ag_manicure
  for each row 
  begin
    select leo.sq_srv_manicure.nextval
    into :new.codSrv
    from dual;
end tg_add_ag_manicure;
/

/*====================================================================*/

create sequence sq_srv_depilacao
  minvalue 1
  maxvalue 999999
  start with 1
  increment by 1
  nocache;

create table srv_depilacao(
  codSrv    number not null,
  nomeSrv   varchar2(40) not null,
  valor     number not null,
  descricao varchar2(100)  
)

alter table srv_depilacao add
  constraint PK_SRV_DEPILACAO primary key (codSrv)

create or replace trigger tg_add_srv_depilacao
  before insert on leo.srv_depilacao
  for each row
  begin
    select leo.sq_srv_depilacao.nextval
    into :new.codSrv
    from dual;
end tg_add_srv_depilacao;
/

/*========================================================================*/

create sequence sq_ag_depilacao
  minvalue 1
  maxvalue 999999
  start with 1
  increment by 1
  nocache;

create table ag_depilacao(
  codAgenda   number not null,
  codCli      number not null,
  codSrv      number not null,
  dataAgen  varchar2(10),
  horaAgen  varchar2(10)
)

alter table ag_depilacao add
  constraint FK_CLI_AG_DEP foreign key (codCli)
  references leo.ag_cliente (codcli);

alter table ag_depilacao add 
  constraint FK_AG_DEP_SRV_DEP foreign key (codSrv)
  references leo.srv_depilacao (codSrv);

create or replace trigger tg_add_ag_depilacao
  before insert on leo.ag_depilacao
  for each row
  begin
    select leo.sq_ag_depilacao.nextval
    into :new.codAgenda
    from dual;
end tg_add_ag_depilacao;
/