-- Insertar datos de prueba en la tabla tipo_documento
INSERT INTO tipo_documento (id_tipo_documento, nombre_documento)
VALUES
    (1, 'Cédula de Ciudadanía'),
    (2, 'Tarjeta de Identidad'),
    (3, 'Pasaporte');

-- Insertar datos de prueba en la tabla usuario_admin
INSERT INTO usuario_admin (codigo_usuario, codigo_beneficio, contrasenha_usuario)
VALUES
    (1, 1, 'contrasena123'),
    (2, 2, 'clave456');

-- Insertar datos de prueba en la tabla beneficio
INSERT INTO beneficio (codigo_beneficio, codigo_usuario, fecha_inicio_beneficio, fecha_fin_beneficio, cupos_beneficio)
VALUES
    (1, 1, '2023-01-01', '2023-12-31', 100),
    (2, 2, '2023-02-01', '2023-11-30', 50);

-- Insertar datos de prueba en la tabla modalidad
INSERT INTO modalidad (id_modalidad, nombre_modalidad)
VALUES
    (1, 'Presencial'),
    (2, 'Virtual');

-- Insertar datos de prueba en la tabla instructor_lider
INSERT INTO instructor_lider (numero_documento_instructor_lider, nombre_instructor_lider, email_instructor_lider)
VALUES
    (123456789, 'Juan Pérez', 'juan@example.com'),
    (987654321, 'María García', 'maria@example.com');

-- Insertar datos de prueba en la tabla ficha
INSERT INTO ficha (codigo_ficha, numero_documento_instructor_lider, fecha_inicio_ficha, fecha_inicio_etapa_productiva, fecha_fin_lectiva, fecha_fin_ficha, nivel_formacion, nombre_programa, modalidad_formacion)
VALUES
    (101, 123456789, '2023-01-15', '2023-02-01', '2023-12-15', '2024-01-15', 'Técnico', 'Programa A', 'Presencial'),
    (102, 987654321, '2023-03-01', '2023-03-15', '2023-11-30', '2023-12-30', 'Técnico', 'Programa B', 'Virtual');

-- Insertar datos de prueba en la tabla aprendiz
INSERT INTO aprendiz (numero_documento_aprendiz, codigo_beneficio, id_tipo_documento, id_modalidad, codigo_ficha, nombre_completo_aprendiz, numero_telefono_movil, numero_telefono_fijo, direccion_residencia_aprendiz, email_aprendiz)
VALUES
    (1234567890, 1, 1, 1, 101, 'Aprendiz 1', '1234567890', '9876543210', 'Dirección 1', 'aprendiz1@example.com'),
    (9876543210, 2, 2, 2, 102, 'Aprendiz 2', '5555555555', '4444444444', 'Dirección 2', 'aprendiz2@example.com');

-- Insertar datos de prueba en la tabla aprendiz_suspendido
INSERT INTO aprendiz_suspendido (id_aprendiz_suspendido, numero_documento_aprendiz, fecha_inicio_suspension, fecha_fin_suspension)
VALUES
    (1, 1234567890, '2023-06-01', '2023-06-30'),
    (2, 9876543210, '2023-07-15', '2023-08-15');

-- Insertar datos de prueba en la tabla formato_seguimiento
INSERT INTO formato_seguimiento (id_formato, numero_documento_aprendiz, formato_seguimiento)
VALUES
    (1, 1234567890, 'Contenido del formato de seguimiento 1'),
    (2, 9876543210, 'Contenido del formato de seguimiento 2');

-- Insertar datos de prueba en la tabla taller_mensual
INSERT INTO taller_mensual (codigo_taller, fecha_taller, contrasenha_taller, tema_taller)
VALUES
    (101, '2023-06-05', 'clave123', 'Taller 1'),
    (102, '2023-07-10', 'clave456', 'Taller 2');

-- Insertar datos de prueba en la tabla asistencia_taller
INSERT INTO asistencia_taller (codigo_taller, numero_documento_aprendiz, fecha_asistencia)
VALUES
    (101, 1234567890, '2023-06-05'),
    (101, 9876543210, '2023-06-05'),
    (102, 9876543210, '2023-07-10');

-- Insertar datos de prueba en la tabla novedad
INSERT INTO novedad (id_novedad, id_formato, estado_novedad, nombre_novedad)
VALUES
    (1, 1, true, 'Novedad 1'),
    (2, 2, false, 'Novedad 2');

-- Insertar datos de prueba en la tabla alerta
INSERT INTO alerta (id_alerta, id_novedad, motivo_alerta, cuerpo_alerta)
VALUES
    (1, 1, 'Motivo 1', 'Cuerpo de la alerta 1'),
    (2, 2, 'Motivo 2', 'Cuerpo de la alerta 2');

-- Insertar datos de prueba en la tabla parametros
INSERT INTO parametros (id_parametros, cuerpo_correo, valor_benficio, estado_aprendiz)
VALUES
    (1, 'Cuerpo del correo 1', 100, true),
    (2, 'Cuerpo del correo 2', 50, false);
