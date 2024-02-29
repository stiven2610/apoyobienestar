CREATE OR REPLACE FUNCTION fun_tri_nov() RETURNS TRIGGER AS 
$$
BEGIN 
    IF OLD.id_estado_aprendiz <> NEW.id_estado_aprendiz THEN
        IF TG_OP = 'UPDATE' THEN 
            IF NEW.id_estado_aprendiz = 1 THEN 
                INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad) VALUES ('default',1,NEW.numero_documento_aprendiz,'Sistema',NOW());
                RAISE NOTICE 'La inserción fue realizada correctamente para estado 1.';
            ELSIF NEW.id_estado_aprendiz = 2 THEN 
                INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad) VALUES ('default',2,NEW.numero_documento_aprendiz,'Sistema',NOW());
                RAISE NOTICE 'La inserción fue realizada correctamente para estado 2.';
            ELSIF NEW.id_estado_aprendiz = 4 THEN 
                INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad) VALUES ('default',4,NEW.numero_documento_aprendiz,'Sistema',NOW());
                RAISE NOTICE 'La inserción fue realizada correctamente para estado 4.';
            ELSIF NEW.id_estado_aprendiz = 5 THEN 
                INSERT INTO novedad (id_novedad,id_tipo_novedad,numero_documento_aprendiz,usuario,fecha_novedad) VALUES ('default',5,NEW.numero_documento_aprendiz,'Sistema',NOW());
                RAISE NOTICE 'La inserción fue realizada correctamente para estado 5.';
            ELSE 
                RAISE NOTICE 'No se realizó ninguna inserción de novedad.';
            END IF;
        END IF;
    END IF;
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error SQLSTATE en fun_tri: %', SQLSTATE; -- Uso de SQLSTATE para obtener el estado SQL actual
END;
$$
LANGUAGE plpgsql;

select * from novedad;
select * from aprendiz;
delete from novedad;
CREATE TRIGGER tri_act_tab_est 
AFTER UPDATE OF id_estado_aprendiz ON aprendiz 
FOR EACH ROW
EXECUTE FUNCTION fun_tri_nov();
