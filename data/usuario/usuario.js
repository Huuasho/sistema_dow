$(document).on("ready",inicio);
$(document).keypress(function(e) {
    if(e.which == 13) {
        guardar();
    }
});
$(function(){
    Test = {
        UpdatePreview: function(obj){
            // if IE < 10 doesn't support FileReader
            if(!window.FileReader){
            // don't know how to proceed to assign src to image tag
            } else {
                var reader = new FileReader();
                var target = null;
             
                reader.onload = function(e) {
                    target =  e.target || e.srcElement;
                    $("#imagen").prop("src", target.result);
                };
                reader.readAsDataURL(obj.files[0]);
            }
        }
    };
});
/*--*/
function inicio (){
	/*----para la imagen----*/
	function getDoc(frame) {
    	var doc = null;     
     	
     	try {
        	if (frame.contentWindow) {
            	doc = frame.contentWindow.document;
         	}
     	} catch(err) {
    	}
	    if (doc) { 
	         return doc;
	    }
	    try { 
	         doc = frame.contentDocument ? frame.contentDocument : frame.document;
	    } catch(err) {
	       
	         doc = frame.document;
	    }
	    return doc;
 	}
 	/*------------*/
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
	$("input").on("keyup click",function (e){//campos requeridos		
		comprobarCamposRequired(e.currentTarget.form.id)

	});	
	/*cargr el select de cargos*/
    $.ajax({      /*cargar el select ciudades*/         
        type: "POST",
        dataType: 'json',        
        url: "carga_ubicaciones.php?tipo=0&id=0&fun=4",        
        success: function(response) {         
            for (var i = 0; i < response.length; i=i+2) {            	
				$("#txt_4").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
            }   
            $("#txt_4").trigger("chosen:updated");                              
        }                   
    });     
	/*cargar el select pais*/
	$.ajax({        
        type: "POST",
        dataType: 'json',        
        url: "carga_ubicaciones.php?tipo=0&id=0&fun=1",        
        success: function(response) {         
            for (var i = 0; i < response.length; i=i+2) {            	
				$("#txt_9").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
            }   
            $("#txt_9").trigger("chosen:updated");                              
            $.ajax({       /*cargar el select provincia*/        
		        type: "POST",
		        dataType: 'json',        
		        url: "carga_ubicaciones.php?tipo=0&id="+$("#txt_9").val()+"&fun=2",        
		        success: function(response) {         
		            for (var i = 0; i < response.length; i=i+2) {            	
						$("#txt_10").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
		            }   
		            $("#txt_10").trigger("chosen:updated");      
		            $.ajax({      /*cargar el select ciudades*/         
				        type: "POST",
				        dataType: 'json',        
				        url: "carga_ubicaciones.php?tipo=0&id="+$("#txt_10").val()+"&fun=3",        
				        success: function(response) {         
				            for (var i = 0; i < response.length; i=i+2) {            	
								$("#txt_11").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
				            }   
				            $("#txt_11").trigger("chosen:updated");                              
				        }                   
				    });                        
		        }                   
		    });
        }                   
    });    
    /*----------------*/     
    $("#txt_9").change(function (){
    	$.ajax({       /*cargar el select provincia*/        
	        type: "POST",
	        dataType: 'json',        
	        url: "carga_ubicaciones.php?tipo=0&id="+$("#txt_9").val()+"&fun=2",        
	        success: function(response) {         
	        	$("#txt_10").html("");
	            for (var i = 0; i < response.length; i=i+2) {            	
					$("#txt_10").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
	            }   
	            $("#txt_10").trigger("chosen:updated");      
	            $.ajax({      /*cargar el select ciudades*/         
			        type: "POST",
			        dataType: 'json',        
			        url: "carga_ubicaciones.php?tipo=0&id="+$("#txt_10").val()+"&fun=3",        
			        success: function(response) {  
			        	$("#txt_11").html("");       
			            for (var i = 0; i < response.length; i=i+2) {            	
							$("#txt_11").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
			            }   
			            $("#txt_11").trigger("chosen:updated");                              
			        }                   
			    });                        
	        }                   
	    });
    });
	$("#txt_10").change(function (){
    	$.ajax({       /*cargar el select provincia*/        
	        type: "POST",
	        dataType: 'json',        
	        url: "carga_ubicaciones.php?tipo=0&id="+$("#txt_10").val()+"&fun=3",        
	        success: function(response) {         
	        	$("#txt_11").html("");
	            for (var i = 0; i < response.length; i=i+2) {            	
					$("#txt_11").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
	            }   
	            $("#txt_11").trigger("chosen:updated");      	                             
	        }                   
	    });
    });
    /*igualar password*/
    $("#txt_6").focus(function (){
    	if($("#txt_5").val() == ""){
    		alert("Digite una contraseña");
    		$("#txt_5").focus();
    	}    	    	
    });    
    /*-----*/
    /*procesos de guardar buscar modificar*/    
	$("#btn_0").on("click",guardar);
	$("#btn_9").click(function(e){		
		$("#table").trigger('reloadGrid');
	})
    /*------*/
    /*jqgrid*/    
	jQuery(function($) {
	    var grid_selector = "#table";
	    var pager_selector = "#pager";
	    
	    //cambiar el tamaño para ajustarse al tamaño de la página
	    $(window).on('resize.jqGrid', function () {
	        //$(grid_selector).jqGrid( 'setGridWidth', $("#myModal").width());	        
	        $(grid_selector).jqGrid( 'setGridWidth', $("#myModal .modal-dialog").width()-30);
	        
	    })
	    //cambiar el tamaño de la barra lateral collapse/expand
	    var parent_column = $(grid_selector).closest('[class*="col-"]');
	    $(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
	        if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
	            //para dar tiempo a los cambios de DOM y luego volver a dibujar!!!
	            setTimeout(function() {
	                $(grid_selector).jqGrid( 'setGridWidth', parent_column.width() );
	            }, 0);
	        }
	    })

	    jQuery(grid_selector).jqGrid({	        
	        datatype: "xml",
	        url: 'xml_usuario.php',        
	        colNames: ['ID','CI','NOMBRES','TELÉFONO','CELULAR','id_ciudad','CIUDAD','DIRECCIÓN','CORREO','USUARIO','id_cargo','CARGO','estado','imagen','extranjero','clave'],
	        colModel:[      
	            {name:'txt_o',index:'txt_o',frozen:true,align:'left',search:false},
	            {name:'txt_1',index:'identificacion',frozen : true,align:'left',search:true},
	            {name:'txt_2',index:'nombres_completos',frozen : true,align:'left',search:true},
	            {name:'txt_3',index:'txt_3',frozen : true,align:'left',search:false},
	            {name:'txt_7',index:'txt_7',frozen : true,align:'left',search:false},
	            {name:'txt_11',index:'txt_11',frozen : true,align:'left',search:false},            
	            {name:'nombre_ciudad',index:'nombre_ciudad',frozen : true,align:'left',search:false},
	            {name:'txt_12',index:'txt_12',frozen : true,align:'left',search:false},
	            {name:'txt_8',index:'txt_8',frozen : true,align:'left',search:false},
	            {name:'txt_13',index:'usuario',frozen : true,align:'left',search:true},
	            {name:'txt_4',index:'txt_4',frozen : true,align:'left',search:false},
	            {name:'nombre_cargo',index:'nombre_cargo',frozen : true,align:'left',search:false},
	            {name:'estado',index:'estado',frozen : true,align:'left',search:false},
	            {name:'imagen',index:'imagen',frozen : true,align:'left',search:false},
	            {name:'extranjero',index:'extranjero',frozen : true,align:'left',search:false},
	            {name:'txt_5',index:'txt_5',frozen : true,align:'left',search:false},
	            

	        ],          
	        rowNum: 10,       
	        width:600,
	        shrinkToFit: false,
	        height:200,
	        rowList: [10,20,30],
	        pager: pager_selector,        
	        sortname: 'id_usuario',
	        sortorder: 'asc',
	        caption: 'LISTA DE USUARIOS',	        
	        
	        altRows: true,
	        multiselect: false,
	        multiboxonly: true,
	        viewrecords : true,
	        loadComplete : function() {
	            var table = this;
	            setTimeout(function(){
	                styleCheckbox(table);
	                updateActionIcons(table);
	                updatePagerIcons(table);
	                enableTooltips(table);
	            }, 0);
	        },
	        ondblClickRow: function(rowid) {     	            	            
	            var gsr = jQuery(grid_selector).jqGrid('getGridParam','selrow');                                              
            	var ret = jQuery(grid_selector).jqGrid('getRowData',gsr);       	            
	            $("#txt_o").val(ret.txt_o);
	            $("#txt_1").val(ret.txt_1);
	            $("#txt_2").val(ret.txt_2);
	            $("#txt_3").val(ret.txt_3);
	            $("#txt_4").val(ret.txt_4);
	            $("#txt_4").trigger("chosen:updated");            
	            $("#txt_5").val(ret.txt_5);
	            $("#txt_6").val(ret.txt_5);
	            $("#txt_7").val(ret.txt_7);
	            $("#txt_8").val(ret.txt_8);	            
	            $("#txt_12").val(ret.txt_12);
	            $("#txt_13").val(ret.txt_13);	            
	            if(ret.extranjero == "ON"){
	            	$("#form-field-checkbox").prop("checked",true);
	            }else{
	            	$("#form-field-checkbox").prop("checked",false);
	            }
	            $("#imagen").attr("src","img/"+ret.imagen);	
	            /**/
	            var prov = 0;
	            var pais = 0;
	            $.ajax({/*obtnengo el id de provincia*/
			        type: "POST",			        
			        url: "carga_ubicaciones.php?tipo=0&id="+ret.txt_11+"&fun=5",        
			        success: function(response) {         
			        	prov = response;
			        	$.ajax({/*obtnengo el id del pais*/
					        type: "POST",			        
					        url: "carga_ubicaciones.php?tipo=0&id="+prov+"&fun=6",        
					        success: function(response) {         
					        	pais = response;						        	
					        	/*cambio los combos*/
							    $.ajax({        
							        type: "POST",
							        dataType: 'json',        
							        url: "carga_ubicaciones.php?tipo=0&id=0&fun=1",        
							        success: function(response) {         			        	
							        	$("#txt_9").html("");
							            for (var i = 0; i < response.length; i=i+2) {            				            	
							            	if(response[i] == pais){
												$("#txt_9").append("<option value ="+response[i]+" selected>"+response[i+1]+"</option>");            																																
							            	}
											else{
												$("#txt_9").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
											}
							            }   
							            $("#txt_9").trigger("chosen:updated"); 
							            $.ajax({        
									        type: "POST",
									        dataType: 'json',        
									        url: "carga_ubicaciones.php?tipo=0&id="+pais+"&fun=2",        
									        success: function(response) {         			        	
									        	$("#txt_10").html("");
									            for (var i = 0; i < response.length; i=i+2) {            				            	
									            	if(response[i] == prov){
														$("#txt_10").append("<option value ="+response[i]+" selected>"+response[i+1]+"</option>");            																																
									            	}
													else{
														$("#txt_10").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
													}
									            }   
									            $("#txt_10").trigger("chosen:updated"); 
									            $.ajax({        
											        type: "POST",
											        dataType: 'json',        
											        url: "carga_ubicaciones.php?tipo=0&id="+prov+"&fun=3",        
											        success: function(response) {         			        	
											        	$("#txt_11").html("");
											            for (var i = 0; i < response.length; i=i+2) {            				            	
											            	if(response[i] == ret.txt_11){
																$("#txt_11").append("<option value ="+response[i]+" selected>"+response[i+1]+"</option>");            																																
											            	}
															else{
																$("#txt_11").append("<option value ="+response[i]+">"+response[i+1]+"</option>");            																																
															}
											            }   
											            $("#txt_11").trigger("chosen:updated"); 
											                                         
											        }
											    });	      
									                                         
									        }
									    });/**/		                            
							        }
							    });/**/							    
					        }                   
					    });
			        }                   
			    });			    	            
	            /**/
	            $('#myModal').modal('hide');
	            comprobarCamposRequired("form_usuario");  
	            $("#btn_0").text("");
	            $("#btn_0").append("<span class='glyphicon glyphicon-log-in'></span> Modificar");     	            
	        },
	        
	        caption: "LISTA BODEGAS"
	    });
		jQuery(grid_selector).jqGrid('hideCol', "txt_o");
		jQuery(grid_selector).jqGrid('hideCol', "txt_11");
		jQuery(grid_selector).jqGrid('hideCol', "txt_4");
		jQuery(grid_selector).jqGrid('hideCol', "estado");
		jQuery(grid_selector).jqGrid('hideCol', "imagen");
		jQuery(grid_selector).jqGrid('hideCol', "extranjero");		
		jQuery(grid_selector).jqGrid('hideCol', "txt_5");		


	    $(window).triggerHandler('resize.jqGrid');//cambiar el tamaño para hacer la rejilla conseguir el tamaño correcto

	    function aceSwitch( cellvalue, options, cell ) {
	        setTimeout(function(){
	            $(cell) .find('input[type=checkbox]')
	            .addClass('ace ace-switch ace-switch-5')
	            .after('<span class="lbl"></span>');
	        }, 0);
	    }	    	   
	    //navButtons
	    jQuery(grid_selector).jqGrid('navGrid',pager_selector,
	    {   //navbar options
	        edit: false,
	        editicon : 'ace-icon fa fa-pencil blue',
	        add: false,
	        addicon : 'ace-icon fa fa-plus-circle purple',
	        del: false,
	        delicon : 'ace-icon fa fa-trash-o red',
	        search: true,
	        searchicon : 'ace-icon fa fa-search orange',
	        refresh: true,
	        refreshicon : 'ace-icon fa fa-refresh green',
	        view: true,
	        viewicon : 'ace-icon fa fa-search-plus grey'
	    },
	    {	        
	        recreateForm: true,
	        beforeShowForm : function(e) {
	            var form = $(e[0]);
	            form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
	            style_edit_form(form);
	        }
	    },
	    {
	        //new record form
	        //width: 700,
	        closeAfterAdd: true,
	        recreateForm: true,
	        viewPagerButtons: false,
	        beforeShowForm : function(e) {
	            var form = $(e[0]);
	            form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar')
	            .wrapInner('<div class="widget-header" />')
	            style_edit_form(form);
	        }
	    },
	    {
	        //delete record form
	        recreateForm: true,
	        beforeShowForm : function(e) {
	            var form = $(e[0]);
	            if(form.data('styled')) return false;
	                
	            form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
	            style_delete_form(form);
	                
	            form.data('styled', true);
	        },
	        onClick : function(e) {
	            //alert(1);
	        }
	    },
	    {
	          recreateForm: true,
	        afterShowSearch: function(e){
	            var form = $(e[0]);
	            form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
	            style_search_form(form);
	        },
	        afterRedraw: function(){
	            style_search_filters($(this));
	        }
	        ,
	        //multipleSearch: true
	        overlay: false,
	        sopt: ['eq', 'cn'],
            defaultSearch: 'eq',            	       
	      },
	    {
	        //view record form
	        recreateForm: true,
	        beforeShowForm: function(e){
	            var form = $(e[0]);
	            form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
	        }
	    })	    
	    function style_edit_form(form) {
	        //enable datepicker on "sdate" field and switches for "stock" field
	        form.find('input[name=sdate]').datepicker({format:'yyyy-mm-dd' , autoclose:true})
	        
	        form.find('input[name=stock]').addClass('ace ace-switch ace-switch-5').after('<span class="lbl"></span>');
	        //don't wrap inside a label element, the checkbox value won't be submitted (POST'ed)
	        //.addClass('ace ace-switch ace-switch-5').wrap('<label class="inline" />').after('<span class="lbl"></span>');

	                
	        //update buttons classes
	        var buttons = form.next().find('.EditButton .fm-button');
	        buttons.addClass('btn btn-sm').find('[class*="-icon"]').hide();//ui-icon, s-icon
	        buttons.eq(0).addClass('btn-primary').prepend('<i class="ace-icon fa fa-check"></i>');
	        buttons.eq(1).prepend('<i class="ace-icon fa fa-times"></i>')
	        
	        buttons = form.next().find('.navButton a');
	        buttons.find('.ui-icon').hide();
	        buttons.eq(0).append('<i class="ace-icon fa fa-chevron-left"></i>');
	        buttons.eq(1).append('<i class="ace-icon fa fa-chevron-right"></i>');       
	    }

	    function style_delete_form(form) {
	        var buttons = form.next().find('.EditButton .fm-button');
	        buttons.addClass('btn btn-sm btn-white btn-round').find('[class*="-icon"]').hide();//ui-icon, s-icon
	        buttons.eq(0).addClass('btn-danger').prepend('<i class="ace-icon fa fa-trash-o"></i>');
	        buttons.eq(1).addClass('btn-default').prepend('<i class="ace-icon fa fa-times"></i>')
	    }
	    
	    function style_search_filters(form) {
	        form.find('.delete-rule').val('X');
	        form.find('.add-rule').addClass('btn btn-xs btn-primary');
	        form.find('.add-group').addClass('btn btn-xs btn-success');
	        form.find('.delete-group').addClass('btn btn-xs btn-danger');
	    }
	    function style_search_form(form) {
	        var dialog = form.closest('.ui-jqdialog');
	        var buttons = dialog.find('.EditTable')
	        buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'ace-icon fa fa-retweet');
	        buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'ace-icon fa fa-comment-o');
	        buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'ace-icon fa fa-search');
	    }
	    
	    function beforeDeleteCallback(e) {
	        var form = $(e[0]);
	        if(form.data('styled')) return false;
	        
	        form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
	        style_delete_form(form);
	        
	        form.data('styled', true);
	    }
	    
	    function beforeEditCallback(e) {
	        var form = $(e[0]);
	        form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
	        style_edit_form(form);
	    }



	    //it causes some flicker when reloading or navigating grid
	    //it may be possible to have some custom formatter to do this as the grid is being created to prevent this
	    //or go back to default browser checkbox styles for the grid
	    function styleCheckbox(table) {
	        /**
	                    $(table).find('input:checkbox').addClass('ace')
	                    .wrap('<label />')
	                    .after('<span class="lbl align-top" />')


	                    $('.ui-jqgrid-labels th[id*="_cb"]:first-child')
	                    .find('input.cbox[type=checkbox]').addClass('ace')
	                    .wrap('<label />').after('<span class="lbl align-top" />');
	         */
	    }
	    

	    //unlike navButtons icons, action icons in rows seem to be hard-coded
	    //you can change them like this in here if you want
	    function updateActionIcons(table) {
	        /**
	                    var replacement = 
	                    {
	                            'ui-ace-icon fa fa-pencil' : 'ace-icon fa fa-pencil blue',
	                            'ui-ace-icon fa fa-trash-o' : 'ace-icon fa fa-trash-o red',
	                            'ui-icon-disk' : 'ace-icon fa fa-check green',
	                            'ui-icon-cancel' : 'ace-icon fa fa-times red'
	                    };
	                    $(table).find('.ui-pg-div span.ui-icon').each(function(){
	                            var icon = $(this);
	                            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
	                            if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
	                    })
	         */
	    }
	    
	    //replace icons with FontAwesome icons like above
	    function updatePagerIcons(table) {
	        var replacement = 
	            {
	            'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
	            'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
	            'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
	            'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
	        };
	        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
	            var icon = $(this);
	            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
	            
	            if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
	        })
	    }

	    function enableTooltips(table) {
	        $('.navtable .ui-pg-button').tooltip({container:'body'});
	        $(table).find('.ui-pg-div').tooltip({container:'body'});
	    }

	    //var selr = jQuery(grid_selector).jqGrid('getGridParam','selrow');

	    $(document).one('ajaxloadstart.page', function(e) {
	        $(grid_selector).jqGrid('GridUnload');
	        $('.ui-jqdialog').remove();
	    });
	});
    /**/    
}
function guardar(){///funcion para guardar datos
	if($("#txt_5").val() == $("#txt_6").val())
	{
	    var resp=comprobarCamposRequired("form_usuario");	    
	    if(resp==true){    	
	        $("#form_usuario").on("submit",function (e){           	
	            var valores = $("#form_usuario").serialize();
	            var texto=($("#btn_0").text()).trim();   
				var formObj = $(this);		
				if(window.FormData !== undefined) {	
					var formData = new FormData(this); 		    					
					if(texto=="Guardar"){       
	                	guardar_datos(formData,"g",e);
		            }else{
		                guardar_datos(formData,"m",e);
		            }	    
					e.preventDefault();						
				}else{
				    var  iframeId = "unique" + (new Date().getTime());
				    var iframe = $('<iframe src="javascript:false;" name="'+iframeId+'" />');
				    iframe.hide();
				    formObj.attr("target",iframeId);
				    iframe.appendTo("body");
			    	iframe.load(function(e) {
			        	var doc = getDoc(iframe[0]);
				        var docRoot = doc.body ? doc.body : doc.documentElement;
				        var data = docRoot.innerHTML;
				    });			
				}	                    	            	            
		    });	  
		    $("#form_usuario").submit();	      	    
		    $("#form_usuario").unbind("submit")
	    }else{    	
	    	alert("Complete todos los campos requeridos")
	    	$('#form_usuario input:required').each(function(e){
	    		var com = $(this).parent().parent().attr("class");
	    		var patt = new RegExp("has-error");
    			var res = patt.test(com);    			
    			if(res == true){
    				$(this).focus();
    				return false;
    			}

	    	});
	    }
    }else{
    	$("#txt_6").val("");
    	$("#txt_6").focus();
    	alert("Repíta la contraseña ingresada")
    }
}
function guardar_datos(formData,tipo,p){
	$.ajax({
	    url: "usuario.php?tipo="+tipo,				    
	    type: "POST",
	    data:  formData,
	    mimeType:"multipart/form-data",
	    contentType: false,
	    cache: false,
	    processData:false,
	    success: function(data, textStatus, jqXHR)
	    {				    
	    	if( data == 0 ){
	    		alert('Datos Agregados Correctamente');	
	    		location.reload();
	    	}else{
	    		if( data == 1 ){
	    			alert('Este usuario ya existe. Ingrese otro');		    			
	    			$("#txt_13").val("");
	    			$("#txt_13").focus();
	    		}else{
	    			alert("Error al momento de enviar los datos. La página se recargara")
	    			location.reload();
	    		}
	    	}

		},
		error: function(jqXHR, textStatus, errorThrown) 
	    {
	    } 	
	}); 
}

