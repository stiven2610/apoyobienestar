DROP TABLE IF EXISTS  tipo_documento;
DROP TABLE IF EXISTS  usuario_admin;
DROP TABLE IF EXISTS  beneficio; 
DROP TABLE IF EXISTS  modalidad;
DROP TABLE IF EXISTS  instructor_lider;
DROP TABLE IF EXISTS  ficha;
DROP TABLE IF EXISTS  aprendiz;
DROP TABLE IF EXISTS  aprendiz_suspendido;
DROP TABLE IF EXISTS  formato_seguimiento;
DROP TABLE IF EXISTS  taller_mensual;
DROP TABLE IF EXISTS  asistencia_taller;
DROP TABLE IF EXISTS  novedad;
DROP TABLE IF EXISTS  alerta;
DROP TABLE IF EXISTS  parametros;


CREATE TABLE  tipo_documento(
    id_tipo_documento      INT     NOT NULL,
    nombre_documento       VARCHAR(50)  NOT NULL,

    PRIMARY KEY (id_tipo_documento)
);

CREATE TABLE usuario_admin (
    codigo_usuario           INT        NOT NULL,
    contrasenha_usuario      VARCHAR(20)    NOT NULL,
    user_insert              VARCHAR,           
    fecha_insert             TIMESTAMP WITHOUT TIME ZONE NOT NULL,    
    user_update              VARCHAR,                    
    fecha_update             TIMESTAMP WITHOUT TIME ZONE,           

    PRIMARY  KEY(codigo_usuario)
);
CREATE TABLE modalidad (
    id_modalidad                   INT       NOT NULL,
    nombre_modalidad               VARCHAR   NOT NULL,
    user_insert                    VARCHAR          NOT NULL,               
    fecha_insert                   TIMESTAMP WITHOUT TIME ZONE NOT NULL,    
    user_update                    VARCHAR,                                  
    fecha_update                   TIMESTAMP WITHOUT TIME ZONE,   

    PRIMARY KEY (id_modalidad)   
);


CREATE TABLE instructor_lider(
    numero_documento_instructor_lider      INT      NOT NULL,
    nombre_instructor_lider                VARCHAR (300) NOT NULL,
    email_instructor_lider                 VARCHAR (100) NOT NULL,
    user_insert                            VARCHAR          NOT NULL,               
    fecha_insert                           TIMESTAMP WITHOUT TIME ZONE NOT NULL,    
    user_update                            VARCHAR,                                  
    fecha_update                           TIMESTAMP WITHOUT TIME ZONE,   
    PRIMARY KEY (numero_documento_instructor_lider)
);

CREATE TABLE ficha
(
    codigo_ficha                       INT             NOT NULL,             
    fecha_inicio_ficha                 DATE            NOT NULL,                      
    fecha_inicio_etapa_productiva      DATE          ,               
    fecha_fin_ficha                    DATE            NOT NULL,                       
    nivel_formacion                    VARCHAR        ,                       
    nombre_programa                    VARCHAR(100)    NOT NULL,                       
    modalidad_formacion                VARCHAR(50)     ,                      
    user_insert                        VARCHAR         NOT NULL,                      
    fecha_insert                       TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update                        VARCHAR,                                        
    fecha_update                       TIMESTAMP WITHOUT TIME ZONE,                   

    PRIMARY KEY (codigo_ficha)
);
CREATE TABLE beneficio
(
    codigo_beneficio                      INT              NOT NULL,
    fecha_inicio_beneficio                DATE             NOT NULL,                
    fecha_fin_beneficio                   DATE             NOT NULL,       
    cupos_beneficio                       INT              NOT NULL,                
    user_insert                           VARCHAR          NOT NULL,               
    fecha_insert                          TIMESTAMP WITHOUT TIME ZONE NOT NULL,    
    user_update                           VARCHAR,                                  
    fecha_update                          TIMESTAMP WITHOUT TIME ZONE,              
    PRIMARY KEY(codigo_beneficio)
);
CREATE TABLE aprendiz(
    numero_documento_aprendiz        INT        NOT NULL,
    obligacion_mensual               BOOLEAN    ,
    codigo_ficha                     INT  NOT   NULL,
    codigo_beneficio                 INT  NOT    NULL,
    tipo_documento                   VARCHAR    NOT NULL,
    nombre_completo_aprendiz         VARCHAR    NOT  NULL,
    fecha_adjudicacion               DATE       NOT NULL,
    id_modalidad                     INT       ,
    numero_telefono_fijo             VARCHAR(50)      NOT NULL,              
    numero_telefono_movil            VARCHAR(50)      NOT NULL,                
    direccion_residencia_aprendiz    VARCHAR(100)     NOT NULL,              
    email_aprendiz                   VARCHAR(100)     NOT NULL,           
    user_insert                      VARCHAR          NOT NULL,                
    fecha_insert                     TIMESTAMP WITHOUT TIME ZONE NOT NULL,     
    user_update                      VARCHAR,                                  
    fecha_update                     TIMESTAMP WITHOUT TIME ZONE,         

    PRIMARY  KEY  (numero_documento_aprendiz),
    FOREIGN KEY  (id_modalidad)      REFERENCES modalidad (id_modalidad),
    FOREIGN KEY (codigo_ficha)  REFERENCES  ficha   (codigo_ficha),
    FOREIGN  KEY (codigo_beneficio)  REFERENCES  beneficio ( codigo_beneficio)
  );



CREATE TABLE  aprendiz_suspendido (
    id_aprendiz_suspendido           INT NOT   NULL,
    numero_documento_aprendiz        INT NOT  NULL,
    fecha_inicio_suspension          DATE NOT  NULL,
    fecha_fin_suspension             DATE NOT  NULL,
    user_insert                      VARCHAR         NOT NULL,                      
    fecha_insert                     TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update                      VARCHAR,                                        
    fecha_update                     TIMESTAMP WITHOUT TIME ZONE, 
    PRIMARY KEY (id_aprendiz_suspendido),
    FOREIGN key (numero_documento_aprendiz) REFERENCES aprendiz (numero_documento_aprendiz)
 );
  CREATE TABLE formato_seguimiento(
    id_formato                      INT  NOT NULL,
    numero_documento_aprendiz       INT NOT NULL,
    formato_seguimiento             TEXT NOT NULL,  --campo para guardar el formato de seguimiento en formato word.
    user_insert                     VARCHAR       NOT NULL,                      
    fecha_insert                    TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update                     VARCHAR,                                        
    fecha_update                    TIMESTAMP WITHOUT TIME ZONE, 

    PRIMARY  KEY (id_formato),
    FOREIGN key (numero_documento_aprendiz) REFERENCES aprendiz (numero_documento_aprendiz)
 );
 
 CREATE TABLE  taller_mensual (
    codigo_taller               INT NOT NULL,
    fecha_taller                DATE NOT NULL,
    contrasenha_taller          VARCHAR(10)  NOT NULL,
    tema_taller                 VARCHAR(500) NOT NULL,
    user_insert                 VARCHAR       NOT NULL,                      
    fecha_insert                TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update                 VARCHAR,                                        
    fecha_update                TIMESTAMP WITHOUT TIME ZONE, 

    PRIMARY KEY   (codigo_taller)
 );


 CREATE TABLE asistencia_taller (
    codigo_taller               INT      NOT NULL,
    numero_documento_aprendiz   INT      NOT NULL,
    fecha_asistencia            DATE     NOT NULL,
    user_insert                 VARCHAR       NOT NULL,                      
    fecha_insert                TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update                 VARCHAR,                                        
    fecha_update                TIMESTAMP WITHOUT TIME ZONE, 

    PRIMARY KEY  (codigo_taller,numero_documento_aprendiz)
 );

 CREATE TABLE novedad(
    id_novedad            INT NOT NULL,
    id_formato            INT NOT NULL,
    estado_novedad        BOOLEAN,
    nombre_novedad        VARCHAR(100)  NOT NULL,
    user_insert           VARCHAR       NOT NULL,                      
    fecha_insert          TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update           VARCHAR,                                        
    fecha_update          TIMESTAMP WITHOUT TIME ZONE, 

    PRIMARY KEY (id_novedad),
    FOREIGN KEY (id_formato)  REFERENCES formato_seguimiento (id_formato)
 );

 CREATE TABLE alerta(
    id_alerta             INT NOT NULL,
    id_novedad            INT NOT NULL,
    motivo_alerta         VARCHAR NOT NULL,
    cuerpo_alerta         VARCHAR NOT NULL,
    user_insert           VARCHAR       NOT NULL,                      
    fecha_insert          TIMESTAMP WITHOUT TIME ZONE NOT NULL,         
    user_update           VARCHAR,                                        
    fecha_update          TIMESTAMP WITHOUT TIME ZONE, 


    PRIMARY KEY (id_alerta),
    FOREIGN KEY (id_novedad) REFERENCES novedad (id_novedad)
 );

 CREATE TABLE parametros ( 
    id_parametros             INT      NOT NULL,
    cuerpo_correo             VARCHAR  NOT NULL,
    valor_benficio            INT      NOT NULL,
    estado_aprendiz           BOOLEAN,
    user_insert               VARCHAR          NOT NULL,               
    fecha_insert              TIMESTAMP WITHOUT TIME ZONE NOT NULL,    
    user_upda                 VARCHAR,                                  
    fecha_update              TIMESTAMP WITHOUT TIME ZONE, 

    PRIMARY KEY(id_parametros)
 );