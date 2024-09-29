//alert("TEXTO");//se tiver funcionando um alerta vai aparecer
const Urlserver = "http://localhost:8080/User/post"
const UrlserverPost= "http://localhost:8080/produtos/nome_lista"
const UrlserverPost2= "http://localhost:8080/produtos/lista2"
var conta=0;


function additem()
{ 

  // console.log(container)
  var divlista=document.createElement("div");
  divlista.id = "divlista";
  // divlista.textContent ="NOVA DIV";
  console.log(divlista)
  console.log(conta);
  // console.log(input_lista_numero.id)
  
  // input_lista_item.id,input_lista_compra.id,input_lista_local.id);

  var input_lista_numero = document.createElement("input");
  input_lista_numero.type="text";
  input_lista_numero.id=`input_numero${conta}`;
  input_lista_numero.class="inputlistamodelo";
  input_lista_numero.placeholder ="Posição";
  input_lista_numero.value=`${conta}`;
  input_lista_numero.readOnly=true;


  var input_lista_item = document.createElement("input");
  input_lista_item.type="text";

  input_lista_item.id=`input_item${conta}`;
  input_lista_item.class="inputlistamodelo";
  input_lista_item.placeholder ="Item lista"
  

  var input_lista_compra = document.createElement("input");
  input_lista_compra.type="text";
  input_lista_compra.id=`input_compra${conta}`;
  input_lista_compra.class="inputlistamodelo";
  input_lista_compra.placeholder ="Quem vai comprar?"

  var input_lista_local = document.createElement("input");
  input_lista_local.type="text";
  input_lista_local.id=`input_local${conta}`;
  input_lista_local.class="inputlistamodelo";
  input_lista_local.placeholder ="Sugestão de lugar"

  divlista.appendChild(input_lista_numero);
  divlista.appendChild(input_lista_item);
  divlista.appendChild(input_lista_compra);
  divlista.appendChild(input_lista_local);
  



  // input_lista_compra,input_lista_item,input_lista_local,

  document.getElementById("conteudo_itemlista_linha").appendChild(divlista);
  
  
  conta++;

}


function botaosalvar()
{
  var dbLista = new Array();
  var dbNomeDaLista;
  

  for (var quantidade_linhas =0; quantidade_linhas< conta;quantidade_linhas++)
  {
    // Obtém os valores dos inputs
    var input_lista_numero = document.getElementById(`input_numero${quantidade_linhas}`).value;
    var input_lista_compra = document.getElementById(`input_compra${quantidade_linhas}`).value;
    var input_lista_local = document.getElementById(`input_local${quantidade_linhas}`).value;
    var input_lista_item = document.getElementById(`input_item${quantidade_linhas}`).value;
    var input_lista_nomelista = document.getElementById(`inputnomelista`).value;


     // Cria um objeto JSON com os valores obtidos

    var lista = 
    {
      // "numero":input_lista_numero,
      "quemVaiComprar":input_lista_compra,
      "sugestaoDeLugar":input_lista_local,
      "itemLista":input_lista_item,
      // "nomeLista":input_lista_nomelista,
    };

    dbNomeDaLista=
    {
      "nomeLista":input_lista_nomelista

    };


    //Salva o valor das informaçoes do json no array

    dbLista[quantidade_linhas] = lista;
    



    // console.log(quantidade_linhas);
  }

  const data = {
    "dbNomeDaLista": {
      "nomeDaSuaLista": dbNomeDaLista.nomeLista
    },
    "dbLista": dbLista
  };

  // console.log({dbNomeDaLista,dbLista});
  // console.log(dbNomeDaLista.constructor.name);
  // console.log(dbLista.constructor.name);


  console.log("Estou no POST")
  const configuracao = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'headerLista': 'Dado'
  },
  body: JSON.stringify(data

)
};

// Enviando a requisição
fetch(UrlserverPost, configuracao)
  // .then(response => response.json())
  .then(data => console.log('Sucesso:', data))
  .catch(error => console.error('Erro:', error));


}




let divusuario = document.getElementById("aqui_json")

