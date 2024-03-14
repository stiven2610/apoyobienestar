CREATE OR REPLACE FUNCTION fun_act_apr(
    _numero_documento_aprendiz INT,
    _id_tipo_documento INT,
    _direccion_residencia_aprendiz VARCHAR,
    _numero_telefono_fijo VARCHAR,
    _numero_telefono_movil VARCHAR,
    _email_aprendiz VARCHAR,
    _id_estado_aprendiz INT,
    _id_obligacion_mensual INT
)
RETURNS BOOLEAN AS $$
DECLARE 
    EXITO BOOLEAN := FALSE;
BEGIN
    BEGIN
        UPDATE aprendiz
        SET id_tipo_documento = _id_tipo_documento,
            direccion_residencia_aprendiz = _direccion_residencia_aprendiz,
            numero_telefono_fijo = _numero_telefono_fijo,
            numero_telefono_movil = _numero_telefono_movil,
            email_aprendiz = _email_aprendiz,
            id_estado_aprendiz = _id_estado_aprendiz,
            id_obligacion_mensual = _id_obligacion_mensual
        WHERE numero_documento_aprendiz = _numero_documento_aprendiz; 
        
        IF FOUND THEN
            EXITO := TRUE;
        END IF;
        EXCEPTION
        WHEN others THEN
            EXITO := FALSE;
    END;
    
    RETURN EXITO;
END;
$$ LANGUAGE plpgsql;
SELECT fun_act_apr(
    109477878,
    2,
    'Calle 123, Ciudad',
    '1234567',
    '987654321',
    'ejemplo@correo.com',
    1,
    1
);
