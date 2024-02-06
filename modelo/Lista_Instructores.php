<?php
  
  include_once "Conexion.php";
  /*echo "Entro a Listar para saber si está entrando o no....";*/
  $sentencia = $base_de_datos->query('SELECT a.id_instruc, a.nom_instruc, a.apelli_instruc, a.tele_instruc, a.correo_instruc, b.nom_cargo, a.ind_planta, a.fec_ini_contrat, a.fec_fin_contrat, a.ind_estado FROM tab_instructores AS a, tab_cargos AS b  WHERE a.id_cargo=b.id_cargo ORDER BY 1');
  $instructores = $sentencia->fetchAll(PDO::FETCH_OBJ);
?> 
<?php
  include "Header.php";
?> 


<!-- Page Content -->
<br>
<br>
<div class="container" >
  <div class="row">
    <div class="card">
      <div class="card-body">
        <center><h2 class="card-title">Listado de instructores 👤</h2>
        <br>
        <a class=" btn button_uno" type="button" href="Form_Nuevo_Instructor.php"> Nuevo Instructor ✏️
        </a></center>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <br>
        <button class="button-abaj button_uno"> Importar Archivos 📁
        </button>
        <button class="button-abajo button_uno"> Generar Reportes 📋
        </button>
      </div>
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 table-responsive table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
      <table class="table table-hover align-middle  table-striped table-bordered">
        <thead class="table-success">
          <tr>
            <th><span class="btn btn-secondary hoveroff">Identificación</th>
            <th><span class="btn btn-secondary hoveroff">Nombres</th>
            <th><span class="btn btn-secondary hoveroff">Apellidos</th>
            <th><span class="btn btn-secondary hoveroff">Telefóno</th>
            <th><span class="btn btn-secondary hoveroff">Correo</th>
            <th><span class="btn btn-secondary hoveroff">Cargo</th>
            <th><span class="btn btn-secondary hoveroff">Contrato</th>
            <th><span class="btn btn-secondary hoveroff">Inicio de Contrato</th>
            <th><span class="btn btn-secondary hoveroff">Fin de Contrato</th>
            <th><span class="btn btn-secondary hoveroff">Contrato Vigente</th>
            <th><span class="btn btn-secondary hoveroff">Calendario</th>
            <th><span class="btn btn-secondary hoveroff">Editar</th>
            <th><span class="btn btn-secondary hoveroff">Eliminar</th>
          </tr>
        </thead>
        <tbody class="table-info">
          <!--
          Atención aquí, sólo esto cambiará
          Pd: no ignores las llaves de inicio y cierre {}
          -->
          <?php foreach($instructores as $instruc)
            {
              ?>
                <tr>
                  <td><a class="btn btn-primary" href="Perfil_Instructor.php"><?php echo $instruc->id_instruc ?></a></td>
                  <td><?php echo $instruc->nom_instruc ?></td>
                  <td><?php echo $instruc->apelli_instruc ?></td>
                  <td><?php echo $instruc->tele_instruc ?></td>
                  <td><a class="btn btn-primary" href="#"><?php echo $instruc->correo_instruc ?></a></td>
                  <td><?php echo $instruc->nom_cargo ?></td>
                  <td><?php IF ($instruc->ind_planta==FALSE) {$instruc->ind_planta='Contrato';} ELSE {$instruc->ind_planta='Planta';} echo $instruc->ind_planta ?></td>
                  <td><?php echo $instruc->fec_ini_contrat ?></td>
                  <td><?php echo $instruc->fec_fin_contrat ?></td>
                  <td><?php IF ($instruc->ind_estado==FALSE) {$instruc->ind_estado='No Activo';} ELSE {$instruc->ind_estado='Activo';} echo $instruc->ind_estado ?></td>
                  <td><a href="Calendarios_Instructores.php" class="btn btn-info">📅</a></td>
                  <td><form action="Form_Editar_Instructor.php" method="POST"><input value="<?php echo $instruc->id_instruc; ?>" type="hidden" name="instruc"><button type="submit" class="btn btn-warning">✏️</button></form></td>
                  <td><form action="Eliminar_Instructores.php" method="POST"><input value="<?php echo $instruc->id_instruc; ?>" type="hidden" name="instruc"><button type="submit" class="btn btn-danger">🗑️</button></form></td>
                </tr>
            <?php
					  } ?>
          </tbody>
      </table>
    </div>
  </div>
</div>
    
<?php
    include "Footer.html";
?> 