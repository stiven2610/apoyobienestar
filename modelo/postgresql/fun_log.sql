CREATE OR REPLACE FUNCTION fun_log(num_doc INT, con_usu VARCHAR)
RETURNS TABLE (
    documento_existe BOOLEAN,
    contrasenha_existe BOOLEAN
) AS $$
BEGIN
    documento_existe := EXISTS (
        SELECT 1 FROM usuario WHERE num_doc = numero_documento_usuario
    );

    contrasenha_existe := EXISTS (
        SELECT 1 FROM usuario WHERE con_usu = contrasenha_usuario
    );

    RETURN NEXT;
END;
$$ LANGUAGE PLPGSQL;
