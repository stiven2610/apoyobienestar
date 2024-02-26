-- PROCEDURE: public.fun_act_est()

-- DROP PROCEDURE IF EXISTS public.fun_act_est();

CREATE OR REPLACE PROCEDURE public.fun_act_est(
	)
LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
    fecha_actual DATE;
    numero_documento INT;
    codigo INT;
    estado_actual INT;
    fecha_fin DATE;
    dias INT;
BEGIN
    fecha_actual := CURRENT_DATE;
    
    FOR numero_documento, codigo, fecha_fin IN
        SELECT a.numero_documento_aprendiz,a.codigo_ficha,b.fecha_fin_lectiva
        FROM aprendiz AS a, ficha AS b 
        WHERE a.codigo_ficha = b.codigo_ficha

        SELECT numero_do  INTO   
        FROM 
    LOOP
        dias := fecha_fin - fecha_actual;

        IF dias <= 15 AND dias > 0 THEN
		    update aprendiz set id_estado_aprendiz = 1 where numero_documento = numero_documento_aprendiz;
			INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad)VALUES (default,1,numero_documento,'sistema',fecha_actual);
            
        ELSIF fecha_fin = fecha_actual AND dias <= 30 THEN
            update aprendiz set id_estado_aprendiz = 2 where numero_documento = numero_documento_aprendiz;
			INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad)VALUES (default,2,numero_documento,'sistema',fecha_actual);
           
        ELSIF dias <=  0 THEN
            update aprendiz set id_estado_aprendiz = 4 where numero_documento = numero_documento_aprendiz;
            INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad)VALUES (default,3,numero_documento,'sistema',fecha_actual);
        ELSE 
            update aprendiz set id_estado_aprendiz = 5 where numero_documento = numero_documento_aprendiz;
            
        END IF;
    END LOOP;
END;
$BODY$;
select * from estado_aprendiz;
select * from novedad; 
select * from tipo_novedad;
call fun_act_est();
ALTER PROCEDURE public.fun_act_est()
    OWNER TO gr_apoyo;
select * from novedad;
delete from novedad where usuario = 'sistema'