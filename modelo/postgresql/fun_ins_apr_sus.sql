--CREATE SEQUENCE aprendiz_suspendido_id_aprendiz_suspendido_seq;

CREATE OR REPLACE FUNCTION fun_ins_apr_sus(
    p_numero_documento_aprendiz INT,
	p_id_motivo_suspension INT
	
) 
RETURNS TABLE (
    insercion_exitosa BOOLEAN
) AS
$$
DECLARE
    fecha_actual DATE := CURRENT_DATE;
    fecha_fin DATE := CURRENT_DATE + INTERVAL '3 months';
    aprendiz_existe BOOLEAN ;
	aprendiz_suspendido BOOLEAN;
BEGIN

    -- Verificar si el aprendiz existe
    SELECT EXISTS (
        SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = p_numero_documento_aprendiz
    ) INTO aprendiz_existe;
 SELECT EXISTS (
        SELECT 1 FROM aprendiz_suspendido WHERE numero_documento_aprendiz = p_numero_documento_aprendiz
    ) INTO aprendiz_suspendido;
    IF aprendiz_existe AND NOT  aprendiz_suspendido THEN 

        -- Insertar el registro de suspensión del aprendiz
        INSERT INTO aprendiz_suspendido (
            numero_documento_aprendiz,
            id_motivo_suspension,
            fecha_inicio_suspension,
            fecha_fin_suspension
        ) VALUES (
            p_numero_documento_aprendiz,
            p_id_motivo_suspension,
            fecha_actual,
            fecha_fin
        );

        insercion_exitosa := true;
    ELSE
        insercion_exitosa := false;
    END IF;

    RETURN QUERY SELECT insercion_exitosa;
END;
$$
LANGUAGE plpgsql;

select * from fun_ins_apr_sus(1094778783,1);
select * from aprendiz_suspendido;