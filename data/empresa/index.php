<?php include('../menu/index.php'); ?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="../../dist/images/logo.fw.png">
		<title>Inicio - <?php empresa(); ?></title>

		<meta name="description" content="overview &amp; stats" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="../../dist/css/bootstrap.min.css" />
		<link rel="stylesheet" href="../../dist/css/font-awesome.min.css" />
		<!-- Select -->
		<link rel="stylesheet" href="../../dist/css/chosen.min.css" />
		<link rel="stylesheet" href="../../dist/css/ui.jqgrid.min.css" />
		<link rel="stylesheet" href="../../dist/css/datepicker.min.css" />
		<link rel="stylesheet" href="../../dist/css/bootstrap-timepicker.min.css" />
		<link rel="stylesheet" href="../../dist/css/daterangepicker.min.css" />
		<link rel="stylesheet" href="../../dist/css/bootstrap-datetimepicker.min.css" />
		<link rel="stylesheet" href="../../dist/css/colorpicker.min.css" />
		<link rel="stylesheet" href="../../dist/css/bootstrap-editable.min.css" />


		<!-- page specific plugin styles -->

		<!-- text fonts -->
		<link rel="stylesheet" href="../../dist/css/fontdc.css" />

		<!-- ace styles -->
		<link rel="stylesheet" href="../../dist/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />

		<!-- ace settings handler -->
		<script src="../../dist/js/ace-extra.min.js"></script>
	</head>

	<body class="no-skin">
		<?php menu_arriba(); ?>

		<div class="main-container" id="main-container">			

			<?php menu_lateral(); ?>

			 <div class="main-content">
				<div class="main-content-inner">
					<div class="breadcrumbs" id="breadcrumbs">
                        <script type="text/javascript">
                            try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
                        </script>
                        <ul class="breadcrumb">
                            <li>
                                <i class="ace-icon fa fa-home home-icon"></i>
                                <a href="../inicio/">Inicio</a>
                            </li>
                            <li class="active">Ingresos</li>
                            <li class="active">Empresa</li>                            
                        </ul>
                    </div>
					<div class="page-content">
						<div class="row">
						<form class="form-horizontal" role="form" rol="form" action="" method="POST" id="form_usuario">
							<div class="col-sm-12">
								<div class="tabbable">
									<ul class="nav nav-tabs" id="myTab">
										<li class="active">
											<a data-toggle="tab" href="#empresa">
												<i class="purple ace-icon fa fa-building bigger-120"></i>
												Información Empresa
											</a>
										</li>
										<li>
											<a data-toggle="tab" href="#detal">
												<span class="warning ace-icon fa fa-building-o bigger-120"></span>
												detals adicionales												
											</a>
										</li>										
									</ul>									
									<div class="tab-content">
										<div id="empresa" class="tab-pane fade in active">
											<div class="row">												
												<div class="col-xs-12">
													<div class="col-xs-2">
														<div class="form-group">
															<div class="col-xs-12">
																<div class="col-xs-12">																									
																	<span class="profile-picture">
																		<img id="avatar" class="editable img-responsive" alt="Empresa x" src="img/default.png" accept="image/*"/>
																	</span>
																</div>																																														
															</div>
														</div>
													</div>
													<div class="col-sm-5">
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1"> RUC. Empresa:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_1" name="txt_1"  placeholder="RUC. Empresa" class="form-control" data-toggle="tooltip" data-original-title="Agregue el nro de CI en caso de ser extranjero seleccione la casilla Extranjero" required pattern="[0-9]{1,}" />
																<input type="hidden" id="txt_0" name="txt_0" />
															</div>
														</div>																
														<div class="form-group">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Teléfono:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_3" name="txt_3" placeholder="Teléfono" class="form-control" />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Fax:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_13" name="txt_13" placeholder="Fax" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Nombres de usuario"  />
															</div>
														</div>																
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Contador:</label>
															<div class="col-sm-8">
																<input type="password" id="txt_5" name="txt_5" placeholder="Contador" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{5,}" data-toggle="tooltip" data-original-title="Digite la contraseña del usuario mínimo 5 carácteres"/>
															</div>
														</div>
														<div class="form-group">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Pais:</label>
															<div class="col-sm-8">
																<select class="chosen-select form-control" id="txt_9" name="txt_9" data-placeholder="País">
																</select>																	
															</div>
														</div>
														<div class="form-group">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Provincia:</label>
															<div class="col-sm-8">
																<select class="chosen-select form-control" id="txt_10" name="txt_10" data-placeholder="Provincia">
																</select>
															</div>
														</div>
														<div class="form-group">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Ciudad:</label>
															<div class="col-sm-8">
																<select class="chosen-select form-control" id="txt_11" name="txt_11" data-placeholder="Ciudad">
																</select>
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Dirección:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_2" name="txt_2" placeholder="Dirección" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Nombres completos"  />
															</div>
														</div>
													</div>
													<div class="col-sm-5">
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Autorizacion SRI:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_2" name="txt_2" placeholder="Autorizacion SRI" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Autorizacion SRI"  />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Correo Electronico:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_2" name="txt_2" placeholder="Correo electronico" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Correo Electronico"  />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Estado:</label>
															<div class="col-sm-8">
																<select class="chosen-select form-control" id="txt_9" name="txt_9" data-placeholder="Estado">
																	<option ></option>
																	<option value="ACTIVO">ACTIVO</option>
																	<option value="PASIVO">PASIVO</option>
																</select>	
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Ascesor Legal:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_2" name="txt_2" placeholder="Ascesor Legal" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Ascesor Legal"  />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-4 control-label no-padding-right" for="form-field-1">Representante Legal:</label>
															<div class="col-sm-8">
																<input type="text" id="txt_2" name="txt_2" placeholder="Representante Legal" class="form-control" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ0-9]{1,}" data-toggle="tooltip" data-original-title="Representante Legal"  />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-5 control-label no-padding-right" for="form-field-1">CI. Representante Legal:</label>
															<div class="col-sm-7">
																<input type="text" id="txt_1" name="txt_1"  placeholder="CI. Representante Legal" class="form-control" data-toggle="tooltip" data-original-title="CI. Representante Legal" required pattern="[0-9]{1,}" />
															</div>
														</div>
														<div class="form-group has-error">
															<label class="col-sm-5 control-label no-padding-right" for="form-field-1">Modo Costeo:</label>
															<div class="col-sm-7">
																<select class="chosen-select form-control" id="txt_9" name="txt_9" data-placeholder="Modo Costeo">
																</select>
															</div>
														</div>																
													</div>
												</div>
																								
											</div>										
										</div>

										<div id="detal" class="tab-pane fade">
											<div class="row">
												<div class="col-sm-8">																																
												<div class="form-group has-error">
													<label class="col-sm-5 control-label ">Inicio Factura Pre-impresa</label>
													<div class="col-sm-7">
														<input type="text" id="spinner1"  />	
													</div>
												</div>
												<div class="form-group has-error">
													<label class="col-sm-5 control-label ">Item´s factura</label>
													<div class="col-sm-7">
														<input type="text" id="spinner2"  name="txt_1" class="form-control" data-toggle="tooltip" data-original-title="Item´s factura" required pattern="[0-9]{1,}" />																		
													</div>
												</div>
												<div class="form-group has-error">
													<label class="col-sm-5 control-label ">Nombre Empresa</label>
													<div class="col-sm-7">
														<input type="text" id="txt_1" name="txt_1"  placeholder="Nombre Empresa" class="form-control" data-toggle="tooltip" data-original-title="Nombre Empresa" required pattern="[0-9]{1,}" />
													</div>
												</div>																
												<div class="form-group has-error">
													<label class="col-sm-5 control-label ">Año Contable</label>
													<div class="col-sm-7">
														<input type="text" id="spinner3" name="txt_1"  class="form-control input-Slarge" data-toggle="tooltip" data-original-title="Año Contable" required pattern="[0-9]{1,}" />
													</div>
												</div>
												<div class="form-group has-error">
													<label class="col-sm-5 control-label ">Comentario</label>
													<div class="col-sm-7">
														<textarea class="input-xlarge" name="txt_0" id="txt_0" placeholder="Comentario"></textarea>
													</div>
												</div>
											</div>	
										</div>											
									</div>
								</div>							
							</div>
							<h3 class="header smaller lighter green"></h3>
							<div class="center">													 
								<button type="submit" class="btn btn-primary" id="btn_0">
									<i class="ace-icon fa fa-floppy-o bigger-120 write"></i>
									Guardar
								</button>
								<button type="button" id="btn_1" class="btn btn-primary">
									<i class="ace-icon fa fa-file-o bigger-120 write"></i>
									Limpiar
								</button>
								<button type="button" id="btn_2" class="btn btn-primary">
									<i class="ace-icon fa fa-refresh bigger-120 write"></i>
									Actualizar
								</button>														
								<button data-toggle="modal" href="#myModal" type="button" id="btn_3" class="btn btn-primary">
									<i class="ace-icon fa fa-search bigger-120 write"></i>
									Buscar
								</button>
								<button type="button" id="btn_4" class="btn btn-primary">
									<i class="ace-icon fa fa-arrow-circle-left bigger-120 write"></i>
									Atras
								</button>
								<button type="button" id="btn_5" class="btn btn-primary">
									<i class="ace-icon fa fa fa-arrow-circle-right bigger-120 write"></i>
									Adelante
								</button>
							</div>
						</form>
					</div>
				</div>
			</div><!-- /.main-content -->

			<?php footer(); ?>

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		
		<!-- <![endif]-->

		<!--[if IE]>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<![endif]-->

		<!--[if !IE]> -->
		<script type="text/javascript">
			window.jQuery || document.write("<script src='../../dist/js/jquery.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='../../dist/js/jquery1x.min.js'>"+"<"+"/script>");
</script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='../../dist/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="../../dist/js/bootstrap.min.js"></script>

		<!-- page specific plugin scripts -->

		<!--[if lte IE 8]>
		  <script src="../../dist/js/excanvas.min.js"></script>
		<![endif]-->
		<script src="../../dist/js/jquery-ui.custom.min.js"></script>
		<script src="../../dist/js/jquery.ui.touch-punch.min.js"></script>
		<script src="../../dist/js/chosen.jquery.min.js"></script>
		<script src="../../dist/js/fuelux/fuelux.spinner.min.js"></script>
		<script src="../../dist/js/date-time/bootstrap-datepicker.min.js"></script>
		<script src="../../dist/js/date-time/bootstrap-timepicker.min.js"></script>
		<script src="../../dist/js/date-time/moment.min.js"></script>
		<script src="../../dist/js/date-time/daterangepicker.min.js"></script>
		<script src="../../dist/js/date-time/bootstrap-datetimepicker.min.js"></script>
		<script src="../../dist/js/bootstrap-colorpicker.min.js"></script>
		<script src="../../dist/js/jquery.knob.min.js"></script>
		<script src="../../dist/js/jquery.autosize.min.js"></script>
		<script src="../../dist/js/jquery.inputlimiter.1.3.1.min.js"></script>
		<script src="../../dist/js/jquery.maskedinput.min.js"></script>
		<script src="../../dist/js/bootstrap-tag.min.js"></script>
		<script src="../../dist/js/x-editable/bootstrap-editable.min.js"></script>
		<script src="../../dist/js/x-editable/ace-editable.min.js"></script>
		<script src="../../dist/js/jquery.gritter.min.js"></script>
		<script src="../../dist/js/jquery.maskedinput.min.js"></script>
		<script src="empresa.js"></script>



		<!-- ace scripts -->
		<script src="../../dist/js/ace-elements.min.js"></script>
		<script src="../../dist/js/ace.min.js"></script>
		<script src="../../dist/js/jqGrid/jquery.jqGrid.min.js"></script>
        <script src="../../dist/js/jqGrid/i18n/grid.locale-en.js"></script>

		<!-- inline scripts related to this page -->
		<script type="text/javascript">
			/*funcion inicial de la imagen y  buscadores del select no topar plz*/
			$('#txt_0').ace_file_input({
				style:'well',
				btn_choose:'Seleccionar',
				btn_change:null,
				no_icon:'ace-icon fa fa-image',
				droppable:true,
				thumbnail:'small'
			});
			$('.chosen-select').chosen({allow_single_deselect:true}); 
			$(window)
			.off('resize.chosen')
			.on('resize.chosen', function() {
				$('.chosen-select').each(function() {
					 var $this = $(this);
					 $this.next().css({'width': $this.parent().width()});
				})
			}).trigger('resize.chosen');
			//resize chosen on sidebar collapse/expand
			$(document).on('settings.ace.chosen', function(e, event_name, event_val) {
				if(event_name != 'sidebar_collapsed') return;
				$('.chosen-select').each(function() {
					 var $this = $(this);
					 $this.next().css({'width': $this.parent().width()});
				})
			});
			/*-----------------------*/
			/*funcion inicial spinner para objetos de subir y bajar con intervalos automaticos*/
			$('#spinner1').ace_spinner({value:0,min:0,max:200,step:1, btn_up_class:'btn-info' , btn_down_class:'btn-info'});
			$('#spinner2').ace_spinner({value:0,min:0,max:200,step:1, btn_up_class:'btn-info' , btn_down_class:'btn-info'});
			$('#spinner3').ace_spinner({value:2015,min:2015,max:2050,step:1, btn_up_class:'btn-info' , btn_down_class:'btn-info'});			
				
			/*-----------------------*/			
			/*funcion inicial proceso*/
				
			/*-----------------------*/

		</script>
	</body>
</html>