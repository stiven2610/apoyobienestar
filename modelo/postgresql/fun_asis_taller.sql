CREATE OR REPLACE PROCEDURE fun_reg_asis(numero_documento_aprendiz_param INT, codigo_taller INT) 
LANGUAGE PLPGSQL
AS $$
DECLARE 
    documento INT;
BEGIN 
    -- Seleccionar el campo 'numero_documento_aprendiz' y asignarlo a la variable 'documento'
    FROM aprendiz
    WHERE aprendiz.numero_documento_aprendiz = numero_documento_aprendiz_param;

    RAISE NOTICE 'El valor de documento es: %', documento;

END
$$;

select * from aprendiz ;
call fun_reg_asis(109477878,11036);
select * from taller_mensual;