const express = require("express");
const router = express.Router();
const {
  getALlUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../controllers/users.controllers");
const {actualizardatos} = require ("../controllers/actualizardatos.controller")
const { validarUsuario } = require("../controllers/login.controllers");
const { crearBeneficio} = require("../controllers/beneficio.controller");
const { formularioRegistroAsistencia } = require("../controllers/asistencia.controller");
const {obtenerAdjudicados}  = require("../controllers/adjudicados.controller");
const {creacionTaller} = require("../controllers/creacion.taller")
const {asistencias} = require ("../controllers/asistencias.controller")
const {pruebaControlador} = require ("../controllers/creacion.aprendiz");
const { obtenerCancelados } = require("../controllers/cancelados.controller");
const { obtenerNovedades } = require("../controllers/novedades.controller");
//rutas para CRUD de usuario...
router.get("/usuarios", getALlUsuarios);

router.get("/usuario/:id", getUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.put("/usuario/:id", updateUsuario);

//rutas para inicio de sesión...
router.post("/login", validarUsuario);

//ruta para creacion de beneficio
router.post("/beneficio", crearBeneficio);

//ruta para creacion de Aprendiz
router.post("/aprendiz", pruebaControlador);

//ruta para registro de asistencia
router.post("/asistenciataller",formularioRegistroAsistencia )

router.get("/adjudicados",obtenerAdjudicados)
router.post ("/actualizardatos",actualizardatos)
router.get("/asistencias",asistencias)
//ruta para registro de asistencia
router.get("/novedades",obtenerNovedades)
router.get("/cancelados",obtenerCancelados)
router.post("/creaciontaller",creacionTaller )
module.exports = router;
