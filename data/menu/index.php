<?php
//verificacion si esta iniciada la variable se ssesion 
//error_reporting(0);
if(!isset($_SESSION)){
	session_start();
}
//informacion empresa
function empresa(){
	print'DOW';
}
//Menu banner arriba usuario perfil dependientes del nivel de usuario
function menu_arriba(){	
	print'
	<div id="navbar" class="navbar navbar-default">
			<script type="text/javascript">
				try{ace.settings.check("navbar" , "fixed")}catch(e){}
			</script>

			<div class="navbar-container" id="navbar-container">
				<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
					<span class="sr-only">Toggle sidebar</span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>
				</button>

				<div class="navbar-header pull-left">
					<a href="#" class="navbar-brand">
						<small>
							<i class="fa fa-credit-card"></i>
							';print empresa(); print'
						</small>
					</a>
				</div>

				<div class="navbar-buttons navbar-header pull-right" role="navigation">
					<ul class="nav ace-nav">
						<li class="light-blue">
							<a data-toggle="dropdown" href="#" class="dropdown-toggle">
								<img class="nav-user-photo" src="../../dist/avatars/user.jpg" alt="Jasons Photo" />
								<span class="user-info">
									<small>Bienvenido,</small>
									Jason
								</span>

								<i class="ace-icon fa fa-caret-down"></i>
							</a>

							<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
								<li>
									<a href="#">
										<i class="ace-icon fa fa-cog"></i>
										Configuración
									</a>
								</li>

								<li>
									<a href="profile.html">
										<i class="ace-icon fa fa-user"></i>
										Perfil
									</a>
								</li>

								<li class="divider"></li>

								<li>
									<a href="#">
										<i class="ace-icon fa fa-power-off"></i>
										Salir
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div><!-- /.navbar-container -->
		</div>'
	;
}
//Menu Latera perfil aplicacion
function menu_lateral(){
	error_reporting(0);
	$url = $_SERVER['PHP_SELF'];
	$acus = parse_url($url, PHP_URL_PATH);
	$acus = split ('/', $acus);
	
	print'
		<div id="sidebar" class="sidebar responsive sidebar-fixed compact">
				<script type="text/javascript">
					try{ace.settings.check("sidebar" , "fixed")}catch(e){}
				</script>
				<ul class="nav nav-list">
					<li>
						<a href="../inicio/">
							<i class="menu-icon fa fa-home"></i>
							<span class="menu-text"> Inicio </span>
						</a>

						<b class="arrow"></b>
					</li>					
					<li ';if ($acus[3]=='categorias' || $acus[3]=='bodegas' || $acus[3]=='clientes' || $acus[3]=='marcas' || $acus[3]=='unidad_medida'|| $acus[3]=='usuario'|| $acus[3]=='empresa'|| $acus[3]=='tipo_producto'|| $acus[3]=='proveedores'|| $acus[3]=='productos') {
								print('class="active open"');
							}print'>
						<a href="#" class="dropdown-toggle">
							<i class="menu-icon fa fa-desktop"></i>
							<span class="menu-text">
								Ingresos
							</span>

							<b class="arrow fa fa-angle-down red"></b>
						</a>

						<b class="arrow"></b>

						<ul class="submenu">
							<li ';if ($acus[3]=='bodegas'||$acus[3]=='categorias'||$acus[3]=='marcas'||$acus[3]=='unidad_medida'||$acus[3]=='tipo_producto') {
									print('class="active open"');
								}print'>
								<a href="#" class="dropdown-toggle">
									<i class="menu-icon fa fa-caret-right"></i>

									Generales
									<b class="arrow fa fa-angle-down"></b>
								</a>

								<b class="arrow"></b>

								<ul class="submenu">
									<li ';if ($acus[3]=='bodegas') {
									print('class="active"');
								}print'>
										<a href="../bodegas/">
											<i class="menu-icon fa fa-caret-right"></i>
											Bodegas
										</a>

										<b class="arrow"></b>
									</li>									

									<li ';if ($acus[3]=='categorias') {
									print('class="active"');
								}print'>
										<a href="../categorias/">
											<i class="menu-icon fa fa-caret-right"></i>
											Categorías
										</a>

										<b class="arrow"></b>
									</li>
									<li ';if ($acus[3]=='marcas') {
									print('class="active"');
								}print'>
										<a href="../marcas/">
											<i class="menu-icon fa fa-caret-right"></i>
											Marcas
										</a>

										<b class="arrow"></b>
									</li>
									<li ';if ($acus[3]=='unidad_medida') {
									print('class="active"');
								}print'>
										<a href="../unidad_medida/">
											<i class="menu-icon fa fa-caret-right"></i>
											Unidades de Medida
										</a>

										<b class="arrow"></b>
									</li>

									<li ';if ($acus[3]=='tipo_producto') {
									print('class="active"');
								}print'>
										<a href="../tipo_producto/">
											<i class="menu-icon fa fa-caret-right"></i>
											Tipo de producto
										</a>

										<b class="arrow"></b>
									</li>									
								</ul>
							</li>

							<li ';if ($acus[3]=='empresa') {
									print('class="active"');
								}print'>
								<a href="../empresa/">
									<i class="menu-icon fa fa-caret-right"></i>
									Empresa
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='usuario') {
									print('class="active"');
								}print'>
								<a href="../usuario/">
									<i class="menu-icon fa fa-caret-right"></i>
									Usuario
								</a>

								<b class="arrow"></b>
							</li>							
							<li ';if ($acus[3]=='clientes') {
									print('class="active"');
								}print'>
								<a href="../clientes/">
									<i class="menu-icon fa fa-caret-right"></i>
									Clientes
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='proveedores') {
									print('class="active"');
								}print'>
								<a href="../proveedores/">
									<i class="menu-icon fa fa-caret-right"></i>
									Proveedores
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='productos') {
									print('class="active"');
								}print'>
								<a href="../productos/">
									<i class="menu-icon fa fa-caret-right"></i>
									Productos
								</a>

								<b class="arrow"></b>
							</li>
						</ul>
					</li>
					<li ';if ($acus[3]=='categorias' || $acus[3]=='bodegas' || $acus[3]=='clientes' || $acus[3]=='marcas' || $acus[3]=='unidad_medida'|| $acus[3]=='usuario'|| $acus[3]=='empresa'|| $acus[3]=='tipo_producto'|| $acus[3]=='proveedores'|| $acus[3]=='productos') {
								print('class="active open"');
							}print'>
						<a href="#" class="dropdown-toggle">
							<i class="menu-icon fa fa-cubes ranger"></i>
							<span class="menu-text">
								Procesos
							</span>

							<b class="arrow fa fa-angle-down red"></b>
						</a>

						<b class="arrow"></b>

						<ul class="submenu">
							<li ';if ($acus[3]=='inventario') {
									print('class="active"');
								}print'>
								<a href="../empresa/">
									<i class="menu-icon fa fa-caret-right"></i>
									Inventario
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='proformas') {
									print('class="active"');
								}print'>
								<a href="../empresa/">
									<i class="menu-icon fa fa-caret-right"></i>
									Proformas
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='bodegas'||$acus[3]=='unidad_medida'||$acus[3]=='tipo_producto') {
									print('class="active open"');
								}print'>
								<a href="#" class="dropdown-toggle">
									<i class="menu-icon fa fa-caret-right"></i>
									Compras
									<b class="arrow fa fa-angle-down"></b>
								</a>

								<b class="arrow"></b>

								<ul class="submenu">
									<li ';if ($acus[3]=='bodegas') {
									print('class="active"');
								}print'>
										<a href="../factura_compra/">
											<i class="menu-icon fa fa-caret-right"></i>
											Productos Bodega
										</a>

										<b class="arrow"></b>
									</li>									

									<li ';if ($acus[3]=='categorias') {
									print('class="active"');
								}print'>
										<a href="../categorias/">
											<i class="menu-icon fa fa-caret-right"></i>
											Devolución
										</a>

										<b class="arrow"></b>
									</li>																	
								</ul>
							</li>
							<li ';if ($acus[3]=='bodegas'||$acus[3]=='categorias'||$acus[3]=='marcas'||$acus[3]=='unidad_medida'||$acus[3]=='tipo_producto') {
									print('class="active open"');
								}print'>
								<a href="#" class="dropdown-toggle">
									<i class="menu-icon fa fa-caret-right"></i>
									Ventas
									<b class="arrow fa fa-angle-down"></b>
								</a>

								<b class="arrow"></b>

								<ul class="submenu">
									<li ';if ($acus[3]=='bodegas') {
									print('class="active"');
								}print'>
										<a href="../bodegas/">
											<i class="menu-icon fa fa-caret-right"></i>
											Ventas Facturación
										</a>

										<b class="arrow"></b>
									</li>									

									<li ';if ($acus[3]=='categorias') {
									print('class="active"');
								}print'>
										<a href="../categorias/">
											<i class="menu-icon fa fa-caret-right"></i>
											Notas de Crédito
										</a>

										<b class="arrow"></b>
									</li>																	
								</ul>
							</li>
							<li ';if ($acus[3]=='bodegas'||$acus[3]=='categorias'||$acus[3]=='marcas'||$acus[3]=='unidad_medida'||$acus[3]=='tipo_producto') {
									print('class="active open"');
								}print'>
								<a href="#" class="dropdown-toggle">
									<i class="menu-icon fa fa-caret-right"></i>
									Cartera
									<b class="arrow fa fa-angle-down"></b>
								</a>

								<b class="arrow"></b>

								<ul class="submenu">
									<li ';if ($acus[3]=='bodegas') {
									print('class="active"');
								}print'>
										<a href="../bodegas/">
											<i class="menu-icon fa fa-caret-right"></i>
											Cuentas por Cobrar
										</a>

										<b class="arrow"></b>
									</li>									

									<li ';if ($acus[3]=='categorias') {
									print('class="active"');
								}print'>
										<a href="../categorias/">
											<i class="menu-icon fa fa-caret-right"></i>
											Cuentas por Pagar
										</a>

										<b class="arrow"></b>
									</li>																	
								</ul>
							</li>

							<li ';if ($acus[3]=='empresa') {
									print('class="active"');
								}print'>
								<a href="../empresa/">
									<i class="menu-icon fa fa-caret-right"></i>
									Registro Gastos
								</a>

								<b class="arrow"></b>
							</li>
							<li ';if ($acus[3]=='usuario') {
									print('class="active"');
								}print'>
								<a href="../usuario/">
									<i class="menu-icon fa fa-caret-right"></i>
									Gastos Internos
								</a>

								<b class="arrow"></b>
							</li>
						</ul>
					</li>
				</ul><!-- /.nav-list -->

				<div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
					<i class="ace-icon fa fa-angle-double-left" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
				</div>

				<script type="text/javascript">
					try{ace.settings.check("sidebar" , "collapsed")}catch(e){}
				</script>
			</div>
	';
}
//pie de Pagina Footer proceso desarrolladores empresa y datos adicionales de la misma
function footer(){
	print'<div class="footer">
				<div class="footer-inner">
					<div class="footer-content">
						<span class="bigger-120">
							<span class="blue bolder">dow delopers</span>
							Aplicación web facturación e inventario &copy; 2014-2015
						</span>

						&nbsp; &nbsp;
						<span class="action-buttons">
							<a href="#">
								<i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-rss-square orange bigger-150"></i>
							</a>
						</span>
					</div>
				</div>
			</div>';
} 

?>