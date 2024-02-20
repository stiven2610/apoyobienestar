CREATE OR REPLACE PROCEDURE fun_act_est()
LANGUAGE plpgsql
AS $$
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
		update aprendiz set id_estado_aprendiz = "?" where numero_documento = numero_documento_aprendiz;
            RAISE NOTICE 'dias :%',dias;
            RAISE NOTICE 'codigo ficha :%',codigo;
            RAISE NOTICE 'POR CUMPLIR ETAPA LECTIVA';
        ELSIF fecha_fin = fecha_actual AND dias <= 30 THEN
            RAISE NOTICE 'dias :%',dias;
            RAISE NOTICE 'codigo ficha :%',codigo;
            RAISE NOTICE 'mes de gracia';
        ELSIF dias <=  0 THEN
            RAISE NOTICE 'dias :%',dias;
            RAISE NOTICE 'codigo ficha :%',codigo;
            RAISE NOTICE 'aplazado';
        ELSE 
            RAISE NOTICE 'dias :%',dias;
            RAISE NOTICE 'codigo ficha :%',codigo;
            RAISE NOTICE 'AUN SE ENCUENTRA EN ETAPA LECTIVA';
        END IF;
    END LOOP;
END;
$$;



select * from ficha ;
call fun_act_est()
select * from aprendiz;
select * from estado_aprendiz;
UPDATE ficha SET fecha_fin_lectiva   = '2024-03-05' where codigo_ficha = 2670123;