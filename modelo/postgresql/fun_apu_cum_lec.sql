call fun_apu_cum_lec();
CREATE OR REPLACE PROCEDURE fun_apu_cum_lec()
LANGUAGE plpgsql
AS $$
DECLARE
    fecha_actual DATE;
    numero_documento INT;
    codigo INT;
    fecha_inicio DATE;
    dias_transcurridos INT;
BEGIN
    fecha_actual := CURRENT_DATE;
    
    FOR numero_documento, codigo, fecha_inicio IN
        SELECT a.numero_documento_aprendiz, a.codigo_ficha, b.fecha_inicio_etapa_productiva 
        FROM aprendiz AS a, ficha AS b 
        WHERE a.codigo_ficha = b.codigo_ficha
    LOOP
        -- Calcular los días transcurridos desde la fecha de inicio de la etapa productiva
        dias_transcurridos := fecha_actual - fecha_inicio;

        IF dias_transcurridos >= 15 THEN
		 RAISE NOTICE 'EL APRENDIZ ESTA POR CUMPLIR ETAPA LECTIVA';
		 
            UPDATE aprendiz SET id_estado_aprendiz = 1 WHERE numero_documento_aprendiz = numero_documento; 
        ELSE
            RAISE NOTICE 'EL APRENDIZ AÚN SE ENCUENTRA EN ETAPA LECTIVA';
        END IF;

    END LOOP;
END;
$$;



select * from aprendiz;
select * from estado_aprendiz;
UPDATE ficha SET fecha_inicio_etapa_productiva   = '2024-02-18' where codigo_ficha = 2619702;