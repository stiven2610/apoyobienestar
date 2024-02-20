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
    fecha_fin DATE;
    dias INT;
BEGIN
    fecha_actual := CURRENT_DATE;
    
    FOR numero_documento, codigo, fecha_fin IN
        SELECT a.numero_documento_aprendiz, a.codigo_ficha, b.fecha_fin_lectiva
        FROM aprendiz AS a, ficha AS b 
        WHERE a.codigo_ficha = b.codigo_ficha
    LOOP
        dias := fecha_fin - fecha_actual;

        IF dias <= 15 AND dias > 0 THEN
		    update aprendiz set id_estado_aprendiz = 1 where numero_documento = numero_documento_aprendiz;
            
        ELSIF fecha_fin = fecha_actual AND dias <= 30 THEN
            update aprendiz set id_estado_aprendiz = 2 where numero_documento = numero_documento_aprendiz;
           
        ELSIF dias <=  0 THEN
            update aprendiz set id_estado_aprendiz = 4 where numero_documento = numero_documento_aprendiz;
           
        ELSE 
            update aprendiz set id_estado_aprendiz = 5 where numero_documento = numero_documento_aprendiz;
            
        END IF;
    END LOOP;
END;
$BODY$;
ALTER PROCEDURE public.fun_act_est()
    OWNER TO gr_apoyo;
