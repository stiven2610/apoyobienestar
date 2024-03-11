CREATE OR REPLACE PROCEDURE public.fun_act_est()
LANGUAGE plpgsql
AS $BODY$
DECLARE
    fecha_actual DATE;
    numero_documento INT;
    codigo INT;
    fecha_fin DATE;
    dias INT;
    sql_state VARCHAR(5); -- Cambiado a VARCHAR
    
    c_aprendices CURSOR FOR 
        SELECT a.numero_documento_aprendiz, a.codigo_ficha, b.fecha_fin_lectiva
        FROM aprendiz AS a
        JOIN ficha AS b ON a.codigo_ficha = b.codigo_ficha;
BEGIN
    fecha_actual := CURRENT_DATE;
    
    OPEN c_aprendices;
    
    LOOP
        FETCH c_aprendices INTO numero_documento, codigo, fecha_fin;
        EXIT WHEN NOT FOUND;
        
        BEGIN 
            dias := fecha_fin - fecha_actual;
            IF dias <= 15 AND dias > 0 THEN
                IF NOT EXISTS (SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = numero_documento AND id_estado_aprendiz = 1) THEN
                    UPDATE aprendiz SET id_estado_aprendiz = 1 WHERE numero_documento_aprendiz = numero_documento;
							raise notice 'estado cambiado a 1 para la ficha %',codigo;
                END IF;
            ELSIF fecha_fin = fecha_actual AND dias <= 30 THEN
                IF NOT EXISTS (SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = numero_documento AND id_estado_aprendiz = 2) THEN
                    UPDATE aprendiz SET id_estado_aprendiz = 2 WHERE numero_documento_aprendiz = numero_documento;
							raise notice 'estado cambiado a 2 para la ficha %',codigo;
                END IF;
            ELSIF dias < 0 THEN
                IF NOT EXISTS (SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = numero_documento AND id_estado_aprendiz = 4) THEN
                    UPDATE aprendiz SET id_estado_aprendiz = 4 WHERE numero_documento_aprendiz = numero_documento;
							raise notice 'estado cambiado a 4 para la ficha %',codigo;
                END IF;
            ELSE
                IF NOT EXISTS (SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = numero_documento AND id_estado_aprendiz = 5) THEN
                    UPDATE aprendiz SET id_estado_aprendiz = 5 WHERE numero_documento_aprendiz = numero_documento;
								raise notice 'estado cambiado a 5 para la ficha %',codigo;

                END IF;
            END IF;
       
        END;
    END LOOP;
    
    CLOSE c_aprendices;
END;
$BODY$;
call fun_act_est();
select * from ficha;
select codigo_ficha,id_estado_aprendiz from aprendiz ;
select * from novedad;
drop table novedad;

