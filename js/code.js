//enviamos datos, haciendo una regarga del formulario
$('#form-login').submit(function(e){
    e.preventDefault();
    //limpia el campo de espaciosn en blanco .trim
    var usuario = $.trim($("#floatingInput").val());
    var password = $.trim($("#floatingPassword").val());  
    if (usuario.lenght == "" || password ==""){
        Swal.fire({
            icon:'warning',
            title:'RELLENA LOS CAMPOS',
        });
        return false;
    }else{
        $.ajax({
            url:"bd/login.php",
            type:"POST",
            datatype:"json",
            data:{usuario:usuario,password:password},
            success:function(data){
                if(data == "null"){
                    Swal.fire({
                        icon:'error',
                        title:'Usuario y/o password incorrectos',
                    });            
                }else{
                    Swal.fire({
                        icon:'success',
                        title:'CONEXION EXITOSA',
                        confirmButtonText:'INGRESAR',
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "perfil/index.html";
                        }
                    })           
                }
            }
        });
    }
});