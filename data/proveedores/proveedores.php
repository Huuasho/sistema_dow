<?php
	include '../conexion.php';
	include '../funciones_generales.php';		
	$conexion = conectarse();
	date_default_timezone_set('America/Guayaquil');
    $fecha=date('Y-m-d H:i:s', time()); 
    $fecha_larga = date('His', time()); 
	$sql = "";	
	$id_session = '1';///datos session
	$id = unique($fecha_larga);		
	
	if($_POST['tipo'] == "g"){
		$repetidos = repetidos_1($conexion,"identificacion",strtoupper($_POST["txt_2"]),"proveedor","g","","","tipo_documento","$_POST[txt_1]");	
		if( $repetidos == 'true'){
			$data = 1; /// este dato ya existe;
		}else{					
			$sql = "insert into proveedor values ('$id','$_POST[txt_1]','$_POST[txt_2]','$_POST[txt_12]','$_POST[txt_18]','$_POST[txt_5]','$_POST[txt_6]','$_POST[txt_11]','$_POST[txt_15]','$_POST[txt_3]','$_POST[txt_4]','$_POST[txt_16]','$_POST[txt_17]','0','$fecha','$_POST[txt_13]','$id_session','$_POST[txt_7]','$_POST[txt_8]')";			
				
			$guardar = guardarSql($conexion,$sql);
			if( $guardar == 'true'){
				$data = 0; ////datos guardados
			}else{
				$data = 2; /// error al guardar
			}			
		}
	}else{
		if($_POST['tipo'] == "m"){
			$repetidos = repetidos_1($conexion,"identificacion",strtoupper($_POST["txt_2"]),"proveedor","m",$_POST['txt_0'],"id_proveedor","tipo_documento","$_POST[txt_1]");		
			if( $repetidos == 'true'){
				$data = 1; /// este dato ya existe;
			}else{						
				$sql = "update proveedor set tipo_documento='$_POST[txt_1]',identificacion='$_POST[txt_2]',nombres_completos='$_POST[txt_12]',tipo='$_POST[txt_18]',telefono1='$_POST[txt_5]',telefono2='$_POST[txt_6]',ciudad='$_POST[txt_11]',direccion='$_POST[txt_15]',empresa='$_POST[txt_3]',visitador='$_POST[txt_4]',proveedor_principal='$_POST[txt_16]',comentario='$_POST[txt_17]',fax='$_POST[txt_13]',id_usuario='$id_session',correo_proveedor='$_POST[txt_7]',forma_pago='$_POST[txt_8]' where id_proveedor='$_POST[txt_0]'";							
				$guardar = guardarSql($conexion,$sql);
				if( $guardar == 'true'){
					$data = 0; ////datos guardados
				}else{
					$data = 2; /// error al guardar
				}				
			}
		}

	}	
	echo $data;
?>