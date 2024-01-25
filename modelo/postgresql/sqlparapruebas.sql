select *from beneficio;
select * from usuario;
select * FROM APRENDIZ;
SELECT pg_terminate_backend (pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'apoyo';

alter table beneficio drop column numero_documento_aprendiz
ALTER TABLE beneficio 
ADD numero_documento_aprendiz INT NOT NULL;
SELECT * FROM pg_stat_activity;

insert into usuario_admin (codigo_usuario,contrasenha_usuario)  values ('2610','user123');