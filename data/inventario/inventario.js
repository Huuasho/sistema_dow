$(document).on("ready",inicio);

function inicio (){		
  mostrar("estado");  
  fecha_actual("fecha_actual"); 

	/*buscador del codigo del producto*/
  	var input_codigoProducto = $("#codigo_chosen").children().next().children();    
  	$(input_codigoProducto).on("keyup",function(input_ci){
    	var text = $(this).children().val();
      	if(text != ""){
	        $.ajax({        
    	    	type: "POST",
        		dataType: 'json',        
          		url: "../carga_ubicaciones.php?tipo=0&id=0&fun=19&val="+text,        
          		success: function(data, status) {
            		$('#codigo').html("");            
            		for (var i = 0; i < data.length; i=i+8) {                                                 
              			appendToChosenProducto(data[i],data[i+1],data[i+2],data[i+3],data[i+4],data[i+5],data[i+6],data[i+7],text,"codigo","codigo_chosen");
            		}           
            		$('#producto').html("");
            		$('#producto').append($("<option data-barras='"+data[2]+"' data-codigo='"+data[1]+"' data-precio='"+data[4]+"' data-stock='"+data[5]+"' data-iva='"+data[6]+"' data-inventariable='"+data[7]+"' ></option>").val(data[0]).html(data[3])).trigger('chosen:updated');            
	    	        $("#id_productos").val(data[0]);
    		        $('#barras').html("");
	        	    $('#barras').append($("<option data-barras='"+data[3]+"' data-codigo='"+data[1]+"' data-precio='"+data[4]+"' data-stock='"+data[5]+"' data-iva='"+data[6]+"' data-inventariable='"+data[7]+"' ></option>").val(data[0]).html(data[2])).trigger('chosen:updated');                        
            		$("#precio").val(data[4]);
            		$("#stock").val(data[5]);
          		},
          		error: function (data) {
            		 console.log(data);
          		}         
        	});     
    	}
  	});
  	$("#codigo_chosen").children().next().children().click(function (){
    	$("#cantidad").focus(); 
  	});
  	$("#codigo").chosen().change(function (event,params){    
    	if(params == undefined){     
    		limpiar_chosen_codigo(); 
    		$("#stock").val("");
	    }else{              
    		var a = $("#codigo option:selected");            
    	  	$('#producto').html("");                   
	      	$('#barras').html("");             
    	  	$('#producto').append($("<option data-barras='"+$(a).data("barras")+"' data-codigo='"+$(a).text()+"' data-precio='"+$(a).data("precio")+"' data-stock='"+$(a).data("stock")+"' data-iva='"+$(a).data("iva")+"' data-inventariable='"+$(a).data("inventariable")+"' ></option>").val($(a).val()).html($(a).data("codigo"))).trigger('chosen:updated');                  
	      	$('#barras').append($("<option data-barras='"+$(a).data("codigo")+"' data-codigo='"+$(a).text()+"' data-precio='"+$(a).data("precio")+"' data-stock='"+$(a).data("stock")+"' data-iva='"+$(a).data("iva")+"' data-inventariable='"+$(a).data("inventariable")+"' ></option>").val($(a).val()).html($(a).data("barras"))).trigger('chosen:updated');                  
      		$("#id_productos").val($(a).val());
    	  	$("#precio").val($(a).data("precio"));       
    	  	$("#stock").val($(a).data("stock"));       
	      	$("#cantidad").focus();
    	}
  	}); 
  	/*buscador del nombre del producto*/
	var input_nombreProducto = $("#producto_chosen").children().next().children();    
  	$(input_nombreProducto).on("keyup",function(input_ci){    
    	var text = $(this).children().val();
    	if(text != ""){
      		$.ajax({        
	        	type: "POST",
	    	    dataType: 'json',        
    	    	url: "../carga_ubicaciones.php?tipo=0&id=0&fun=20&val="+text,        
        		success: function(data, status) {
          			$('#producto').html("");            
          			for (var i = 0; i < data.length; i=i+8) {                                                 
	            		appendToChosenProducto(data[i],data[i+3],data[i+2],data[i+1],data[i+4],data[i+5],data[i+6],data[i+7],text,"producto","producto_chosen");
    	      		}           
        	  		$('#codigo').html("");
          			$('#codigo').append($("<option data-barras='"+data[2]+"' data-codigo='"+data[3]+"' data-precio='"+data[4]+"' data-stock='"+data[5]+"' data-iva='"+data[6]+"' data-inventariable='"+data[7]+"' ></option>").val(data[0]).html(data[1])).trigger('chosen:updated');            
          			$("#id_productos").val(data[0]);
	          		$('#barras').html("");
    	      		$('#barras').append($("<option data-barras='"+data[3]+"' data-codigo='"+data[1]+"' data-precio='"+data[4]+"' data-stock='"+data[5]+"' data-iva='"+data[6]+"' data-inventariable='"+data[7]+"' ></option>").val(data[0]).html(data[2])).trigger('chosen:updated');                        
        	  		$("#precio").val(data[4]);
          			$("#stock").val(data[5]);
	        	},
    	    	error: function (data) {
        	  		 console.log(data);
        		}          
	      	});
    	}
  	}); 
  	$("#producto_chosen").children().next().children().click(function (){
    	$("#cantidad").focus(); 
  	});
      
	$("#producto").chosen().change(function (event,params){    
    	if(params == undefined){         
      		$('#codigo').html("");
	    	$('#codigo').append($("<option></option>"));          
      		$('#codigo').trigger('chosen:updated')
	      	$('#producto').html("");
    	  	$('#producto').append($("<option></option>"));          
      		$('#producto').trigger('chosen:updated');     
	      	$('#barras').html("");
    	  	$('#barras').append($("<option></option>"));          
      		$('#barras').trigger('chosen:updated');     
	      	$("#id_productos").val("");
    	  	$("#precio").val("");   
    	  	$("#stock").val("");
    	}else{              
      		var a = $("#producto option:selected");            
	      	$('#codigo').html("");                   
    	  	$('#barras').html("");             
      		$('#codigo').append($("<option data-barras='"+$(a).data("barras")+"' data-codigo='"+$(a).text()+"' data-precio='"+$(a).data("precio")+"' data-stock='"+$(a).data("stock")+"' data-iva='"+$(a).data("iva")+"' data-inventariable='"+$(a).data("inventariable")+"' ></option>").val($(a).val()).html($(a).data("codigo"))).trigger('chosen:updated');                  
	      	$('#barras').append($("<option data-barras='"+$(a).data("codigo")+"' data-codigo='"+$(a).text()+"' data-precio='"+$(a).data("precio")+"' data-stock='"+$(a).data("stock")+"' data-iva='"+$(a).data("iva")+"' data-inventariable='"+$(a).data("inventariable")+"' ></option>").val($(a).val()).html($(a).data("barras"))).trigger('chosen:updated');                  
    	  	$("#id_productos").val($(a).val());
      		$("#precio").val($(a).data("precio"));      
      		$("#stock").val($(a).data("stock"));
	      	$("#cantidad").focus(); 
    	}
  	});   	


    $("#cantidad").validCampoFranz("0123456789");

    $("#cantidad").on("keypress",function (e){
    if(e.keyCode == 13){//tecla del alt para el entrer poner 13
        if($("#cantidad").val() != ""){
            if($("#id_productos").val() != ""){
                agregar_fila_inventario("detalle_inventario",$("#id_productos").val(),$(a).data("codigo"),$(a).text(),$("#cantidad").val(),$(a).data("stock"),$("#precio").val(),$("#descuento").val(),$(a).data("iva"));
            }else{
                alert("Seleccione un producto antes de continuar");                        
                //$('#codigo').trigger('chosen:open');            
                $('#codigo_chosen').trigger('mousedown');
            }
        }else{
            alert("Ingrese una cantidad");
            $("#cantidad").focus();
        }
    }
});
}
