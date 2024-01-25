CREATE OR REPLACE FUNCTION validar_asistencia_taller(
) RETURNS TRIGGER AS $$
DECLARE
  numero_documento INTEGER;
  codigo INTEGER;
  contrasenha VARCHAR(10);
  contrasenha_cliente VARCHAR(10);
BEGIN
  numero_documento := NEW.numero_documento_aprendiz;
  codigo := NEW.codigo_taller;
  contrasenha_cliente:= NEW.contrasenha_taller;
  -- Obtiene la contrasenha_taller desde la tabla taller_mensual
  SELECT contrasenha_taller INTO contrasenha
  FROM taller_mensual WHERE codigo_taller = codigo;

  -- Verifica si el número de documento existe en la tabla aprendiz
  IF EXISTS (SELECT 1 FROM aprendiz WHERE numero_documento_aprendiz = numero_documento) THEN
    -- El número de documento existe en la tabla aprendiz, ahora puedes realizar las validaciones de la contraseña
    IF contrasenha_cliente = contrasenha THEN
      -- La contraseña coincide, establece la fecha_asistencia en tiempo real
      NEW.fecha_asistencia := now(); -- Obtiene la fecha y hora actual
      RETURN NEW;
    ELSE
      -- La contraseña no coincide, puedes manejar la validación como desees
      -- Aquí se muestra un ejemplo de lanzar una excepción personalizada
      RAISE EXCEPTION 'La contraseña no coincide con la tabla taller_mensual';
    END IF;
  ELSE
    -- El número de documento no existe en la tabla aprendiz, puedes manejar la validación como desees
    -- Aquí se muestra un ejemplo de lanzar una excepción personalizada
    RAISE EXCEPTION 'El número de documento no existe en la tabla aprendiz';
  END IF;
END;
$$ LANGUAGE plpgsql;
-- Crea el trigger "before insert" en la tabla asistencia_taller
CREATE TRIGGER trigger_validar_asistencia_taller
BEFORE INSERT ON asistencia_taller
FOR EACH ROW
EXECUTE FUNCTION validar_asistencia_taller();
