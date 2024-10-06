//alert("TEXTO");//se tiver funcionando um alerta vai aparecer

const urlserverGetObterLista="http://localhost:8080/lista/obterListaEItens/"

const UrlserverPost2= "http://localhost:8080/produtos/lista2"
var dbNomeDaLista=dbNomeDaLista;
var dbLista=dbLista;


var conta=0;

document.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") 
    {
      buscar();
  }
});

function buscar()
{ 
  var input_lista_nomelista = document.getElementById(`inputnomelista`).value
  console.log(input_lista_nomelista);
  console.log(input_lista_nomelista+toString(urlserverGetObterLista));
  const urlserverGetObterLista_nomelista = `${urlserverGetObterLista}${input_lista_nomelista}`;
  console.log(urlserverGetObterLista_nomelista);

  fetch(urlserverGetObterLista_nomelista)
    .then(response => {
        if (!response.ok) 
          {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Manipular os dados recebidos
        console.log(data);
        

        // Acessar os dados
        dbNomeDaLista = data.dbNomeDaLista;
        dbLista = data.dbLista;
        console.log("dbNOME",dbNomeDaLista);
        console.log("dbLISTA",dbLista);

        //alert(console.log(dbLista,dbNomeDaLista));//habilitar para teste
        constroiTabela(dbNomeDaLista,dbLista);
      
      })

    }

    function constroiTabela(dbNomeDaLista, dbLista) {
      console.log("dbNomeDaLista", dbNomeDaLista.nomeDaSuaLista);
      console.log("dbNomeDaLista", dbNomeDaLista.id);
  
      var divlista = document.createElement("div");
      divlista.id = "divlista";
  
      var input_lista_numero = document.createElement("input");
      input_lista_numero.type = "text";
      input_lista_numero.id = "inputnomelista2"//`input_numero${dbNomeDaLista.id}`;
      input_lista_numero.className = "inputnomelista2";
      input_lista_numero.placeholder = "Nome Lista";
      input_lista_numero.value = dbNomeDaLista.nomeDaSuaLista;
      input_lista_numero.readOnly = true;
  
      var input_lista_id_ = document.createElement("input");
      input_lista_id_.type = "text";
      input_lista_id_.id = `input_id${dbNomeDaLista.id}`;
      input_lista_id_.className = "inputlistamodelo";
      input_lista_id_.placeholder = "ID";
      input_lista_id_.value = dbNomeDaLista.id;
      input_lista_id_.readOnly = true;
  
      // divlista.appendChild(input_lista_id_);
      divlista.appendChild(input_lista_numero);
  
      document.getElementById("conteudo_itemlista_linha").appendChild(divlista);
      constroilista();
    }


      function constroilista()
      {
        
      

        for (i=0;i<dbLista.length;i++ )
      {
        var divlista2 = document.createElement("div");
        divlista2.id = "divlista";
        console.log("i vale = ",i);

        // "id": 2,
//         "idDbNomeLista": 2,
//         "nomeDaSuaLista": "teste 3",
//         "itemLista": "teste 1",
//         "quemVaiComprar": "novo teste",
//         "sugestaoDeLugar": "santo"

        var input_lista_id = document.createElement("input");
        input_lista_id.type="text";
        input_lista_id.id=`input_numero${i}`;
        input_lista_id.class="inputlistamodelo";
        input_lista_id.placeholder ="id";
        input_lista_id.value=dbLista[i].id;
        input_lista_id.readOnly=true;
        input_lista_id.labels="id";

        var input_lista_idDbNomeLista = document.createElement("input");
        input_lista_idDbNomeLista.type="text";
        input_lista_idDbNomeLista.id=`input_numero${i}`;
        input_lista_idDbNomeLista.class="inputlistamodelo";
        input_lista_idDbNomeLista.placeholder ="id";
        input_lista_idDbNomeLista.value=dbLista[i].idDbNomeLista;
        input_lista_idDbNomeLista.readOnly=true;

        var 
        input_lista_nomeDaSuaLista = document.createElement("input");
        input_lista_nomeDaSuaLista.type="text";
        input_lista_nomeDaSuaLista.id=`input_numero${i}`;
        input_lista_nomeDaSuaLista.class="inputlistamodelo";
        input_lista_nomeDaSuaLista.placeholder ="nomeDaSuaLista";
        input_lista_nomeDaSuaLista.value=dbLista[i].nomeDaSuaLista;
        input_lista_nomeDaSuaLista.readOnly=true;

        var input_lista_itemLista = document.createElement("input");
        input_lista_itemLista.type="text";
        input_lista_itemLista.id=`input_numero${i}`;
        input_lista_itemLista.class="inputlistamodelo";
        input_lista_itemLista.placeholder ="itemLista";
        input_lista_itemLista.value=dbLista[i].itemLista;
        input_lista_itemLista.readOnly=true;

        var 
        input_lista_quemVaiComprar = document.createElement("input");
        input_lista_quemVaiComprar.type="text";
        input_lista_quemVaiComprar.id=`input_numero${i}`;
        input_lista_quemVaiComprar.class="inputlistamodelo";
        input_lista_quemVaiComprar.placeholder ="id";
        input_lista_quemVaiComprar.value=dbLista[i].quemVaiComprar;
        input_lista_quemVaiComprar.readOnly=true;


        var 
        input_lista_sugestaoDeLugar = document.createElement("input");
        input_lista_sugestaoDeLugar.type="text";
        input_lista_sugestaoDeLugar.id=`input_numero${i}`;
        input_lista_sugestaoDeLugar.class="inputlistamodelo";
        input_lista_sugestaoDeLugar.placeholder ="id";
        input_lista_sugestaoDeLugar.value=dbLista[i].sugestaoDeLugar;
        input_lista_sugestaoDeLugar.readOnly=true;


        console.log(input_lista_id,input_lista_idDbNomeLista,input_lista_itemLista,
          input_lista_nomeDaSuaLista,input_lista_quemVaiComprar,input_lista_sugestaoDeLugar)

        divlista2.appendChild(input_lista_id);
        divlista2.appendChild(input_lista_idDbNomeLista);
        divlista2.appendChild(input_lista_nomeDaSuaLista);
        divlista2.appendChild(input_lista_itemLista);
        divlista2.appendChild(input_lista_quemVaiComprar);
        divlista2.appendChild(input_lista_sugestaoDeLugar);

        document.getElementById("conteudo_itemlista_linha").appendChild(divlista2);
         

      }

      

      // var tamanhodalista = dbLista.dbLista.legth;
      // console.log(tamanhodalista);

      

      console.log(dbLista[0])
      console.log(dbLista.length)

      //continuar para correr o array pegar os dados e contruir a lista de itens dbLista.length



      // alert(console.log(tamanhodalista));



  }
    





        

//   "dbNomeDaLista": {
//     "id": 2,
//     "nomeDaSuaLista": "teste 3"
// },
// "dbLista": [
//     {
//         "id": 2,
//         "idDbNomeLista": 2,
//         "nomeDaSuaLista": "teste 3",
//         "itemLista": "teste 1",
//         "quemVaiComprar": "novo teste",
//         "sugestaoDeLugar": "santo"
//     },
//     {

  // console.log(container)
//   var divlista=document.createElement("div");
//   divlista.id = "divlista";
//   // divlista.textContent ="NOVA DIV";
//   console.log(divlista)
//   console.log(conta);
//   // console.log(input_lista_numero.id)
  
//   // input_lista_item.id,input_lista_compra.id,input_lista_local.id);

//   var input_lista_numero = document.createElement("input");
//   input_lista_numero.type="text";
//   input_lista_numero.id=`input_numero${conta}`;
//   input_lista_numero.class="inputlistamodelo";
//   input_lista_numero.placeholder ="Posição";
//   input_lista_numero.value=`${conta}`;
//   input_lista_numero.readOnly=true;


//   var input_lista_item = document.createElement("input");
//   input_lista_item.type="text";

//   input_lista_item.id=`input_item${conta}`;
//   input_lista_item.class="inputlistamodelo";
//   input_lista_item.placeholder ="Item lista"
  

//   var input_lista_compra = document.createElement("input");
//   input_lista_compra.type="text";
//   input_lista_compra.id=`input_compra${conta}`;
//   input_lista_compra.class="inputlistamodelo";
//   input_lista_compra.placeholder ="Quem vai comprar?"

//   var input_lista_local = document.createElement("input");
//   input_lista_local.type="text";
//   input_lista_local.id=`input_local${conta}`;
//   input_lista_local.class="inputlistamodelo";
//   input_lista_local.placeholder ="Sugestão de lugar"

//   divlista.appendChild(input_lista_numero);
//   divlista.appendChild(input_lista_item);
//   divlista.appendChild(input_lista_compra);
//   divlista.appendChild(input_lista_local);
  



//   // input_lista_compra,input_lista_item,input_lista_local,

//   document.getElementById("conteudo_itemlista_linha").appendChild(divlista);
  
  
//   conta++;

// }

// function botaosalvar()
// {
//   var dbLista = new Array();
//   var dbNomeDaLista;
  

//   for (var quantidade_linhas =0; quantidade_linhas< conta;quantidade_linhas++)
//   {
//     // Obtém os valores dos inputs
//     var input_lista_numero = document.getElementById(`input_numero${quantidade_linhas}`).value;
//     var input_lista_compra = document.getElementById(`input_compra${quantidade_linhas}`).value;
//     var input_lista_local = document.getElementById(`input_local${quantidade_linhas}`).value;
//     var input_lista_item = document.getElementById(`input_item${quantidade_linhas}`).value;
//     var input_lista_nomelista = document.getElementById(`inputnomelista`).value;


//      // Cria um objeto JSON com os valores obtidos

//     var lista = 
//     {
//       // "numero":input_lista_numero,
//       "quemVaiComprar":input_lista_compra,
//       "sugestaoDeLugar":input_lista_local,
//       "itemLista":input_lista_item,
//       // "nomeLista":input_lista_nomelista,
//     };

//     dbNomeDaLista=
//     {
//       "nomeLista":input_lista_nomelista

//     };


//     //Salva o valor das informaçoes do json no array

//     dbLista[quantidade_linhas] = lista;
    



//     // console.log(quantidade_linhas);
//   }

//   const data = {
//     "dbNomeDaLista": {
//       "nomeDaSuaLista": dbNomeDaLista.nomeLista
//     },
//     "dbLista": dbLista
//   };
  
  
 

  
 
  

   


//   // console.log({dbNomeDaLista,dbLista});
//   // console.log(dbNomeDaLista.constructor.name);
//   // console.log(dbLista.constructor.name);


//   console.log("Estou no POST")
//   const configuracao = {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//       'headerLista': 'Dado'
//   },
//   body: JSON.stringify(data
    
      
//       // "dbLista":[dbLista]

    


// //     {"dbNomeDaLista": {
// //     "nomeDaSuaLista":"Lista de presente do Gabriel"},
// //     "dbLista": 
// //   [
// //     {
// //  "itemLista":"PLAYSTATION5510",
// //  "quemVaiComprar":"TAISE",
// //  "sugestaoDeLugar":"MAGAZINE" },
// // {
  
// //  "itemLista":"PLAYSTATION10",
// //  "quemVaiComprar":"GEPETO",
// //  "sugestaoDeLugar":"MAGAZINE"

// // }
// //   ]}

// )
// };

// // Enviando a requisição
// fetch(UrlserverPostCriarLista, configuracao)
//   // .then(response => response.json())
//   .then(data => {
//     console.log('Sucesso:', data);
//     alert('Sucesso: A operação foi concluída com êxito!');
//     limparLista();

    
//   })
//   .catch(error => console.error('Erro:', error));

// }

// function limparLista()
// {
//   window.location.href = '/paginas/criarLista/criarLista.html';



// }




// let divusuario = document.getElementById("aqui_json")

// // function POST()
// // {
// // fetch(Urlserver, 
// //     {
// //     method: 'POST',
// //     headers: {

// //       'Content-Type': 'application/json'
// //       // Puedes ajustar los encabezados según tus necesidades
// //     },
// //     body: JSON.stringify({nome:"ola"})
// //   })
// //   .then(response => response.json())
// //   .then(data => {
// //     // Almacenar la respuesta en una variable
// //     var respuestaJSON = data;
// //     // Mostrar la respuesta en una div
// //     var resultadoDiv = document.getElementById('aqui_json');
// //     resultadoDiv.inputMode = JSON.stringify(respuestaJSON);
// //   })
// //   .catch(error => {
// //     console.error('Error:', error);
// //   });
// // }

// // function POST()
// // {
// // fetch(Urlserver,{
// //     headers:
// //     {
// //         'Accept':'application/json',
// //         'Content-Type': 'application/json'
// //     },
// //     method:"Post",
// //         body: JSON.stringify (
// //             {nome:"ola"
               
// //             })

// //     //converte string para json
// // }).then((response)=>
// // {response.json().
// //     then((dados)=>
// //     {console.log(dados)
// //         //let recebidos = dados//divusuario.innerHTML+=`<li>${response.JSON}</li>`

// //         //divusuario.innerHTML += usurios
// //         console.log(recebidos)
// //         //console.log
    
// //     })
// // }
// // )}