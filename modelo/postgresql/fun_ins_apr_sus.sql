CREATE SEQUENCE aprendiz_suspendido_id_aprendiz_suspendido_seq;

CREATE OR REPLACE FUNCTION fun_ins_apr_sus(
    p_numero_documento_aprendiz INT,
    p_id_motivo_suspension  INT
) 
RETURNS TABLE (
    insercion_exitosa BOOLEAN
) AS
$$
DECLARE
    v_id_aprendiz_suspendido INT;
    fecha_actual DATE := CURRENT_DATE;
    fecha_fin DATE := CURRENT_DATE + INTERVAL '3 months';
    aprendiz_existe BOOLEAN;
BEGIN

    -- Verificar si el aprendiz existe
    SELECT EXISTS (
        SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = p_numero_documento_aprendiz
    ) INTO aprendiz_existe;

    IF aprendiz_existe THEN
        -- Obtener el próximo valor de la secuencia
        SELECT NEXTVAL('aprendiz_suspendido_id_aprendiz_suspendido_seq') INTO v_id_aprendiz_suspendido;

        -- Insertar el registro de suspensión del aprendiz
        INSERT INTO aprendiz_suspendido (
            id_aprendiz_suspendido,
            numero_documento_aprendiz,
            id_motivo_suspension,
            fecha_inicio_suspension,
            fecha_fin_suspension
        ) VALUES (
            v_id_aprendiz_suspendido,
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

select fun_ins_apr_sus(1094778783,1)
select * from aprendiz_suspendido;