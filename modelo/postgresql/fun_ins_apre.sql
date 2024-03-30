CREATE OR REPLACE FUNCTION fun_ins_apr(
    p_numero_documento_aprendiz INTEGER,
    p_codigo_ficha INTEGER,
    p_id_tipo_documento INTEGER,
    p_id_estado_aprendiz INTEGER,
    p_id_obligacion_mensual INTEGER,
    p_numero_consecutivo integer,
    p_numero_resolucion_adjudicacion INTEGER,
    p_codigo_beneficio INTEGER,
    p_nombre_completo_aprendiz VARCHAR,
    p_fecha_adjudicacion DATE,
    p_numero_telefono_fijo VARCHAR,
    p_numero_telefono_movil VARCHAR,
    p_direccion_residencia_aprendiz VARCHAR,
    p_email_aprendiz VARCHAR,
    p_id_modalidad_formacion INTEGER,
    p_fecha_inicio_ficha DATE,
    p_fecha_inicio_productiva DATE,
    p_fecha_fin_ficha DATE,
    p_nivel_formacion VARCHAR,
    p_nombre_programa VARCHAR,
    p_numero_documento_instructor_lider INTEGER,
    p_nombre_instructor_lider VARCHAR,
    p_email_instructor VARCHAR
)
RETURNS BOOLEAN 
AS $$

DECLARE 
insercion_realizada boolean;

BEGIN
 
          INSERT INTO instructor_lider (
            numero_documento_instructor_lider,
            nombre_instructor_lider,
            email_instructor_lider
        ) VALUES (
            p_numero_documento_instructor_lider,
            p_nombre_instructor_lider,
            p_email_instructor
        );
        
        -- Insertar datos en la tabla de fichas
        INSERT INTO ficha(
            codigo_ficha,
            id_modalidad,
			numero_documento_instructor_lider,
            fecha_inicio_ficha,
            fecha_inicio_etapa_productiva,
            fecha_fin_ficha,
            nivel_formacion,
            nombre_programa
        ) VALUES (
            p_codigo_ficha,
            p_id_modalidad_formacion,
			p_numero_documento_instructor_lider,
            p_fecha_inicio_ficha,
            p_fecha_inicio_productiva,
            p_fecha_fin_ficha,
            p_nivel_formacion,
            p_nombre_programa
        );
        
   
           -- Insertar datos en la tabla de aprendices
        INSERT INTO aprendiz (
            numero_documento_aprendiz,
            nombre_completo_aprendiz,
			codigo_ficha,
			id_tipo_documento,
			id_estado_aprendiz,
			id_obligacion_mensual,
			numero_consecutivo,
			numero_resolucion_adjudicacion,
			codigo_beneficio,
            fecha_adjudicacion,
            numero_telefono_fijo,
            numero_telefono_movil,
            direccion_residencia_aprendiz,
            email_aprendiz
        ) VALUES (
            p_numero_documento_aprendiz,
            p_nombre_completo_aprendiz,
			p_codigo_ficha,
			p_id_tipo_documento,
			p_id_estado_aprendiz,
			p_id_obligacion_mensual,
			p_numero_consecutivo,
			p_numero_resolucion_adjudicacion,
			p_codigo_beneficio,
            p_fecha_adjudicacion,
            p_numero_telefono_fijo,
            p_numero_telefono_movil,
            p_direccion_residencia_aprendiz,
            p_email_aprendiz
        );
IF FOUND THEN 
    insercion_realizada := TRUE;
ELSE
    insercion_realizada := FALSE;
END IF;
  RETURN insercion_realizada;
END;
$$ LANGUAGE plpgsql;

SELECT fun_ins_apr(
    p_numero_documento_aprendiz := 141324329,
    p_codigo_ficha := 10323,
    p_id_tipo_documento := 1,
    p_id_estado_aprendiz := 1,
    p_id_obligacion_mensual := 1,
    p_numero_consecutivo := 222,
    p_numero_resolucion_adjudicacion := 1232232,
    p_codigo_beneficio := 123456789,
    p_nombre_completo_aprendiz := 'Juan Perez',
    p_fecha_adjudicacion := '2024-03-27',
    p_numero_telefono_fijo := '123456789',
    p_numero_telefono_movil :='98765432',
    p_direccion_residencia_aprendiz := 'Calle 123',
    p_email_aprendiz := 'juan@example.com',
    p_id_modalidad_formacion := 1,
    p_fecha_inicio_ficha := '2024-01-01',
    p_fecha_inicio_productiva := '2024-02-01',
    p_fecha_fin_ficha := '2024-12-31',
    p_nivel_formacion := 'Técnico',
    p_nombre_programa := 'Programa de Formación',
    p_numero_documento_instructor_lider := 9874321,
    p_nombre_instructor_lider := 'Pedro Gomez',
    p_email_instructor := 'pedro@example.com'
);
