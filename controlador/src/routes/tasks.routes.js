const express = require("express");
const router = express.Router();
const {
  getALlUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../controllers/users.controllers");
const {
  actualizardatos,
} = require("../controllers/actualizardatos.controller");
const { validarUsuario } = require("../controllers/login.controllers");
const {
  extraerDatosExcel,
  get_beneficios,
} = require("../controllers/beneficio.controller");
const {
  formularioRegistroAsistencia,
} = require("../controllers/asistencia.controller");
const { obtenerAdjudicados } = require("../controllers/adjudicados.controller");
const { creacion_taller, get_talleres } = require("../controllers/talleres");
const { asistencias } = require("../controllers/asistencias.controller");
const { insert_aprendiz } = require("../controllers/creacion.aprendiz");
const { obtenerCancelados } = require("../controllers/cancelados.controller");
const { obtenerNovedades, insert_suspendido } = require("../controllers/novedades.controller");
const {
  get_estado_aprendiz,
  update_estado,
} = require("../controllers/estado_aprendiz.controllers.js");
const {
  Get_documentos,
  Get_estados_aprendiz,
} = require("../controllers/selecciones.controllers.js");
const { get_motivos_suspension } = require("../controllers/motivos_suspension.controller.js");
const { get_suspendidos } = require("../controllers/suspendidos.controller.js");
const { Get_ficha } = require("../controllers/ficha.controllers.js");
const Contactanos = require("../controllers/contactanos.controller.js");
//rutas para CRUD de usuario...
router.get("/get_documentos", Get_documentos);
router.get("/get_ficha/:codigo_ficha",Get_ficha)
router.get("/get_estados", Get_estados_aprendiz);
router.get("/get_motivos_suspension" , get_motivos_suspension)
router.post("/insert_suspendido",insert_suspendido)
router.get("/get_suspendidos",get_suspendidos)
router.get("/usuarios", getALlUsuarios);
router.get("/usuario/:id", getUsuario);
router.delete("/usuario/:id", deleteUsuario);
router.put("/usuario/:id", updateUsuario);
//rutas para inicio de sesión...
router.post("/login", validarUsuario);
router.post("/contactanos", Contactanos)
//ruta para creacion de beneficio
router.get("/get_beneficios", get_beneficios);
router.post("/beneficio", extraerDatosExcel);
//ruta para registro de asistencia
router.post("/asistenciataller", formularioRegistroAsistencia);
router.get("/adjudicados", obtenerAdjudicados);
router.put("/actualizardatos", actualizardatos);
router.get("/asistencias/:codigo_taller", asistencias);
router.get("/novedades", obtenerNovedades);
router.get("/cancelados", obtenerCancelados);
router.post("/creaciontaller", creacion_taller);
router.get("/talleres", get_talleres);
router.post("/updateestado", update_estado);
router.get("/getestadoaprendiz", get_estado_aprendiz);
router.post("/insertaraprendiz", insert_aprendiz);
module.exports = router;
