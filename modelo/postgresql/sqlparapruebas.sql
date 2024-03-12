select a.numero_documento_aprendiz, a.nombre_completo_aprendiz, a.codigo_ficha , g.nombre_modalidad ,b.nombre_documento, c.nombre_estado_aprendiz, d.nombre_obligacion_mensual,a.numero_consecutivo, a.numero_resolucion_adjudicacion, e.nombre_beneficio , a.fecha_adjudicacion, a.numero_telefono_fijo, a.numero_telefono_movil, a.direccion_residencia_aprendiz, a.email_aprendiz FROM aprendiz AS a , tipo_documento AS b , estado_aprendiz AS c ,obligacion_mensual AS d ,  beneficio AS e ,  ficha AS f ,modalidad AS g WHERE a.id_tipo_documento  = b.id_tipo_documento AND a.id_estado_aprendiz = c.id_estado_aprendiz AND a.id_obligacion_mensual = d.id_obligacion_mensual AND a.codigo_beneficio = e.codigo_beneficio AND f.id_modalidad  = g.id_modalidad;
select a.codigo_ficha ,b.nombre_documento,a.numero_documento_aprendiz, c.nombre_completo_aprendiz, a.motivo_cancelacion , a.fecha_cancelacion ,a.numero_resolucion FROM aprendiz_cancelado AS a ,tipo_documento AS b,aprendiz AS c   WHERE a.numero_documento_aprendiz = c.numero_documento_aprendiz AND b.id_tipo_documento = c.id_tipo_documento;
select a.numero_documento_aprendiz ,a.nombre_completo_aprendiz , g.nombre_documento  FROM  aprendiz AS a ,aprendiz AS d,tipo_documento AS g WHERE a.numero_documento_aprendiz = d.numero_documento_aprendiz;
select a.numero_documento_aprendiz,f.nombre_documento,a.fecha_novedad,b.nombre_tipo_novedad,c.nombre_completo_aprendiz,e.codigo_ficha,e.nombre_programa,h.nombre_estado_aprendiz FROM novedad AS a , tipo_novedad AS b , aprendiz AS c ,tipo_documento AS f, ficha AS e, estado_aprendiz AS h WHERE a.id_tipo_novedad = b.id_tipo_novedad AND a.numero_documento_aprendiz = c.numero_documento_aprendiz AND  e.codigo_ficha = c.codigo_ficha AND c.id_estado_aprendiz = h.id_estado_aprendiz AND c.id_tipo_documento = f.id_tipo_documento;
select *from beneficio;
select * from usuario;
select * FROM APRENDIZ;
select * from estado_aprendiz;
select * from modalidad;
select * from aprendiz_cancelado;
select * from tipo_documento; 
select * from motivo_suspension;
select * from ficha;
select * from asistencia_taller;
select * from obligacion_mensual;
select * from tipo_novedad;
select * from novedad;
select * from asistencia_taller;
alter table asistencia_taller drop column fecha_asistencia;
alter table taller_mensual drop column codigo_taller;
drop table asistencia_taller;
drop table taller_mensual;
ALTER TABLE ficha;
select * from taller_mensual;
insert into taller_mensual values ( 12,'Taller 1 mentalidad de liderazgo','2024-10-05','taller123')

insert into ficha (id_modalidad) values ('1');
ADD CONSTRAINT id_modalidad FOREIGN KEY (id_modalidad) REFERENCES modalidad(id_modalidad);
SELECT * FROM pg_stat_activity;
select * from instructor_lider;
select * from tipo_novedad; 
insert into tipo_novedad (5,'a')
delete from tipo_novedad where id_tipo_novedad = 3
insert into tipo_novedad values ('1','Aprendiz esta a punto de cumplir etapa lectiva');
insert into tipo_novedad values ('2','Aprendiz entro a mes de gracia');
insert into tipo_novedad values ('3','Aprendiz no definio etapa practica fue aplazado');
insert into tipo_novedad values ('4','Aprendiz ');
insert into tipo_novedad values ('9','Aprendiz fue citado a comite academico');
insert into tipo_novedad values ('4','Aprendiz no fue registrado en el taller mensual');
insert into usuario (numero_documento_usuario,nombre_usuario,apellidos_usuario,password) values ('1094778783','Yeison Stiven','Gutierrez Rozo',md5('1234'));
insert into modalidad ( id_modalidad,nombre_modalidad) values ('2','Virtual');
insert into modalidad ( id_modalidad,nombre_modalidad) values ('1','Presencial');
insert into tipo_documento (id_tipo_documento,nombre_documento) values (1,'Cedula de ciudadania');
insert into tipo_documento (id_tipo_documento,nombre_documento) values (2,'Tarjeta de identidad');
insert into tipo_documento (id_tipo_documento,nombre_documento) values (3,'PPT');
insert into instructor_lider (numero_documento_instructor_lider,nombre_instructor_lider,email_instructor_lider) values ('1234567891','Magda milena','milenaGarcia@gmail.com');
insert into ficha (codigo_ficha,id_modalidad,numero_documento_instructor_lider,fecha_inicio_ficha,fecha_inicio_etapa_productiva,fecha_fin_ficha,nivel_formacion,nombre_programa) values ('2619702','2','1234567891','2023-10-05','2024-02-15','2024-10-05','Tecnologia','Gestión Administrativa');
insert into ficha (codigo_ficha,id_modalidad,numero_documento_instructor_lider,fecha_inicio_ficha,fecha_inicio_etapa_productiva,fecha_fin_ficha,nivel_formacion,nombre_programa) values ('2619701','1','1234567890','2023-10-05','2024-02-15','2024-10-05','Tecnologia','ADSO');

insert into beneficio ( codigo_beneficio,nombre_beneficio,fecha_inicio_beneficio,fecha_fin_beneficio,cupos_beneficio) values ('123456789','convocatoria I  Apoyo de sostenimiento Regular','2024-02-15','2024-12-18','55');
insert into estado_aprendiz(id_estado_aprendiz,nombre_estado_aprendiz)  values ('1','A punto de cumplir etapa lectiva');
insert into estado_aprendiz(id_estado_aprendiz,nombre_estado_aprendiz)  values ('2','Mes de gracia');
insert into estado_aprendiz(id_estado_aprendiz,nombre_estado_aprendiz)  values ('3','Proyecto productivo');
insert into estado_aprendiz(id_estado_aprendiz,nombre_estado_aprendiz)  values ('4','Aplazado');
insert into estado_aprendiz(id_estado_aprendiz,nombre_estado_aprendiz)  values ('5','Etapa lectiva');

select * from obligacion_mensual;
insert into obligacion_mensual ( id_obligacion_mensual,nombre_obligacion_mensual) values ('1','Taller Mensual');
insert into obligacion_mensual ( id_obligacion_mensual,nombre_obligacion_mensual) values ('2','Plan de actividades');
insert into aprendiz values ('1094778783','Yeison Stiven Gutierrez Rozo','2619701','1','5','1','1','100001','123456789','2024-02-10','3242343432','3103558222','calel 29 #10-98 lagos 1','stivenrozo1@gmail.com');
INSERT INTO aprendiz VALUES ('109477878','Juan Pérez','2619701','1','5','1','2','100001','123456789','2024-02-10','3242343432','3103558222','Calle 29 #10-98 Lagos 1','juanperez@gmail.com');
INSERT INTO aprendiz VALUES ('209477879','María García','2619702','2','4','2','3','100001','123456789','2024-04-15','3242343433','3103558223','Calle 30 #11-99 Lagos 2','mariagarcia@gmail.com');
INSERT INTO aprendiz VALUES ('309477880','Carlos Rodríguez','2619701','3','2','2','4','100001','123456789','2024-06-20','3242343434','3103558224','Calle 31 #12-100 Lagos 3','carlosrodriguez@gmail.com');
INSERT INTO aprendiz VALUES ('409477881','Ana López','2619702','2','2','1','5','100001','123456789','2024-08-25','3242343435','3103558225','Calle 32 #13-101 Lagos 4','analopez@gmail.com');
INSERT INTO aprendiz VALUES ('509477882','Pedro Martínez','2619701','1','1','2','6','100001','123456789','2024-10-30','3242343436','3103558226','Calle 33 #14-102 Lagos 5','pedromartinez@gmail.com');
INSERT INTO aprendiz VALUES ('609477883','Laura Sánchez','2619702','1','5','1','7','100001','123456789','2025-01-05','3242343437','3103558227','Calle 34 #15-103 Lagos 6','laurasanchez@gmail.com');
INSERT INTO aprendiz VALUES ('709477884','Diego Ramírez','2619701','2','4','2','8','100001','123456789','2025-03-10','3242343438','3103558228','Calle 35 #16-104 Lagos 7','diegoramirez@gmail.com');
INSERT INTO aprendiz VALUES ('809477885','Elena Gómez','2619702','3','3','2','9','100001','123456789','2025-05-15','3242343439','3103558229','Calle 36 #17-105 Lagos 8','elenagomez@gmail.com');
INSERT INTO aprendiz VALUES ('909477886','Javier Castro','2619701','2','2','1','10','100001','123456789','2025-07-20','3242343440','3103558230','Calle 37 #18-106 Lagos 9','javiercastro@gmail.com');
INSERT INTO aprendiz VALUES ('1009477887','Isabel Flores','2619702','1','1','2','11','100001','123456789','2025-09-25','3242343441','3103558231','Calle 38 #19-107 Lagos 10','isabelflores@gmail.com');
INSERT INTO aprendiz VALUES ('1109477888','Martín Hernández','2619701','1','2','1','12','100001','123456789','2024-02-11','3242343442','3103558232','Calle 39 #20-108 Lagos 11','martinhernandez@gmail.com');
INSERT INTO aprendiz VALUES ('1209477889','Sofía Díaz','2619702','2','4','2','13','100001','123456789','2024-04-16','3242343443','3103558233','Calle 40 #21-109 Lagos 12','sofiadiaz@gmail.com');
INSERT INTO aprendiz VALUES ('1309477890','Raúl Vargas','2619701','3','3','2','14','100001','123456789','2024-06-21','3242343444','3103558234','Calle 41 #22-110 Lagos 13','raulvargas@gmail.com');
INSERT INTO aprendiz VALUES ('1409477891','Carolina Torres','2619702','3','2','1','15','100001','123456789','2024-08-26','3242343445','3103558235','Calle 42 #23-111 Lagos 14','carolinatorres@gmail.com');
INSERT INTO aprendiz VALUES ('1509477892','Andrés Mendoza','2619701','2','1','1','16','100001','123456789','2024-11-01','3242343446','3103558236','Calle 43 #24-112 Lagos 15','andresmendoza@gmail.com');
INSERT INTO aprendiz VALUES ('1609477893','Valeria Navarro','2619702','1','5','1','17','100001','123456789','2025-01-06','3242343447','3103558237','Calle 44 #25-113 Lagos 16','valerianavarro@gmail.com');
INSERT INTO aprendiz VALUES ('1709477894','Francisco Jiménez','2619701','2','4','2','18','100001','123456789','2025-03-11','3242343448','3103558238','Calle 45 #26-114 Lagos 17','franciscojimenez@gmail.com');
INSERT INTO aprendiz VALUES ('1809477895','Camila Ramirez','2619702','3','3','2','19','100001','123456789','2025-05-16','3242343449','3103558239','Calle 46 #27-115 Lagos 18','camilaramirez@gmail.com');
INSERT INTO aprendiz VALUES ('1909477896','Alejandro Herrera','2619701','2','2','1','21','100001','123456789','2025-07-21','3242343450','3103558240','Calle 47 #28-116 Lagos 19','alejandroherrera@gmail.com');
INSERT INTO aprendiz VALUES ('2009477897','Lucía Gomez','2619702','1','1','2','21','100001','123456789','2025-09-26','3242343451','3103558241','Calle 48 #29-117 Lagos 20','luciagomez@gmail.com');
INSERT INTO aprendiz VALUES ('2009477897','Lucía Gomez','2619702','1','1','2','21','100001','123456789','2025-09-26','3242343451','3103558241','Calle 48 #29-117 Lagos 20','luciagomez@gmail.com');

INSERT INTO novedad values ('001','1','1209477889','1094778783','2024-03-12','12345678');
INSERT INTO novedad values ('002','2','1709477894','1094778783','2024-04-01','12345677');
INSERT INTO novedad values ('003','3','809477885','1094778783','2024-03-20','123456756');
INSERT INTO novedad values ('004','4','609477883','1094778783','2024-04-03','123456722');
CREATE SEQUENCE codigo_seq
START WITH 10001
INCREMENT BY 1
NO MAXVALUE
NO MINVALUE
CACHE 1;
insert into instructor_lider values ('1234567893','Magda milena','milenaGarcia@gmail.com');
insert into ficha values ('2670702','1','1234567893','2023-10-05','2024-02-29','2025-01-20','tecnologia','Talento humano')

INSERT INTO  aprendiz_cancelado values ('0001','2619702','1609477893','No presento formato de siguimiento mensual','2024-02-17','12345678');
INSERT INTO  aprendiz_cancelado values ('0002','2619701','1094778783','Se fue a contrato de aprendizaje','2024-03-05','123456790');
select * from ficha ;
delete from novedad where usuario = 'Sistema';
2670123  =  2024/03/20   estado = 1 bien 
2619702 = 2024/03/08	estado = 2
2619701 = 2024/01/07	estado = 4 bien 
2670702 = 2024/05/02    estado = 5 bien
select codigo_ficha,id_estado_aprendiz  from aprendiz;
call fun_act_est();
select * from novedad;
update aprendiz set id_estado_aprendiz = 1 where codigo_ficha = 2670123;
update aprendiz set id_estado_aprendiz = 3  where id_estado_aprendiz = 1;
update aprendiz set id_estado_aprendiz = 3  where id_estado_aprendiz = 2;
update aprendiz set id_estado_aprendiz = 3  where id_estado_aprendiz = 5;
update aprendiz set id_estado_aprendiz = 3  where id_estado_aprendiz = 4;
update ficha set fecha_fin_lectiva = '2024/03/20'  where codigo_ficha = 2670123;
update ficha set fecha_fin_lectiva = '2024/03/07'  where codigo_ficha = 2619702;
update ficha set fecha_fin_lectiva = '2024/01/07'  where codigo_ficha = 2619701;
update ficha set fecha_fin_lectiva = '2024/05/02'  where codigo_ficha =2670702;