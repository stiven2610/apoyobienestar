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

		IF dias_transcurridos >= 0 AND dias_transcurridos <= 15 THEN
   			 RAISE NOTICE 'EL APRENDIZ ESTA POR CUMPLIR ETAPA LECTIVA';
				ELSIF dias_transcurridos >= -15 AND dias_transcurridos < 0 THEN 
   					 RAISE NOTICE 'EL APRENDIZ ENTRO A MES DE GRACIA';
							ELSIF dias_transcurridos > 30 THEN
   								 RAISE NOTICE 'EL APRENDIZ FUE APLAZADO PORQUE NO DEFINIÓ ETAPA PRÁCTICA';
									ELSE 
   										 RAISE NOTICE 'EL APRENDIZ AUN SE ENCUENTRA EN ETAPA LECTIVA';
		END IF;

    END LOOP;
END;
$$;


call fun_apu_cum_lec();
select * from aprendiz;
select * from estado_aprendiz;
UPDATE ficha SET fecha_inicio_etapa_productiva   = '2024-03-01' where codigo_ficha = 2619702;