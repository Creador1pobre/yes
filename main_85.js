menu_list_array = [ 
"Veg Margarita Pizza",
"PolliPizza",
"Pizza un queso",
"Pizza del mes",
"Pizza de chicago (estilo Chicago)",
"Pizza de mario (Champiñones)"                  
                                          ]; //Agrega más nombres de pizzas

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Da un nombre de identificación apropiado, como  
    document.getElementById("mostrar_menú").innerHTML = htmldata;
}

function add_suggestion(){
    //Da un nombre de identificación apropiado, como 
	var item = document.getElementById("agregar_elemento").value;
    //Usa la función push() para llevar el elemento a la menu_list_array.
    menu_list_array.     push(item);
}

