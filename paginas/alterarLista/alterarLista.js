//alert("TEXTO");//se tiver funcionando um alerta vai aparecer

const urlserverGetObterLista="http://localhost:8080/lista/obterListaEItens/"
const UrlserverPutAlterarLista="http://localhost:8080/lista/alterarListaItens/"

const UrlserverPost2= "http://localhost:8080/produtos/lista2"



var dbNomeDaLista=dbNomeDaLista;
var dbLista=dbLista;
var buscar_realizada_sucesso=false;
var itens_lista=0;
var editar_status = false


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
  if(buscar_realizada_sucesso==false)
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
        buscar_realizada_sucesso=true;
        alert(buscar_realizada_sucesso,console.log("busca realizada com sucesso",buscar_realizada_sucesso));
      
      })
    

    }
  }

    function constroiTabela(dbNomeDaLista, dbLista) 
    {
      
      
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
        itens_lista=i;
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
        input_lista_id.id=`input_lista_id${i}`;
        input_lista_id.class="inputlistamodelo";
        input_lista_id.placeholder ="id";
        input_lista_id.value=dbLista[i].id;
        input_lista_id.readOnly=true;
        input_lista_id.className= "formater"

        var input_lista_idDbNomeLista = document.createElement("input");
        input_lista_idDbNomeLista.type="text";
        input_lista_idDbNomeLista.id=`input_lista_idDbNomeLista${i}`;
        input_lista_idDbNomeLista.class="inputlistamodelo";
        input_lista_idDbNomeLista.placeholder ="id";
        input_lista_idDbNomeLista.value=dbLista[i].idDbNomeLista;
        input_lista_idDbNomeLista.readOnly=true;
        input_lista_idDbNomeLista.className= "formater";

        var 
        input_lista_nomeDaSuaLista = document.createElement("input");
        input_lista_nomeDaSuaLista.type="text";
        input_lista_nomeDaSuaLista.id=`input_lista_nomeDaSuaLista${i}`;
        input_lista_nomeDaSuaLista.class="inputlistamodelo";
        input_lista_nomeDaSuaLista.placeholder ="nomeDaSuaLista";
        input_lista_nomeDaSuaLista.value=dbLista[i].nomeDaSuaLista;
        input_lista_nomeDaSuaLista.readOnly=true;

        var input_lista_itemLista = document.createElement("input");
        input_lista_itemLista.type="text";
        input_lista_itemLista.id=`input_lista_itemLista${i}`;
        input_lista_itemLista.class="inputlistamodelo";
        input_lista_itemLista.placeholder ="itemLista";
        input_lista_itemLista.value=dbLista[i].itemLista;
        input_lista_itemLista.readOnly=true;

        var 
        input_lista_quemVaiComprar = document.createElement("input");
        input_lista_quemVaiComprar.type="text";
        input_lista_quemVaiComprar.id=`input_lista_quemVaiComprar${i}`;
        input_lista_quemVaiComprar.class="inputlistamodelo";
        input_lista_quemVaiComprar.placeholder ="id";
        input_lista_quemVaiComprar.value=dbLista[i].quemVaiComprar;
        input_lista_quemVaiComprar.readOnly=true;


        var 
        input_lista_sugestaoDeLugar = document.createElement("input");
        input_lista_sugestaoDeLugar.type="text";
        input_lista_sugestaoDeLugar.id=`input_lista_sugestaoDeLugar${i}`;
        input_lista_sugestaoDeLugar.class="inputlistamodelo";
        input_lista_sugestaoDeLugar.placeholder ="id";
        input_lista_sugestaoDeLugar.value=dbLista[i].sugestaoDeLugar;
        input_lista_sugestaoDeLugar.readOnly=true;

        // var botao_editar_lista = document.createElement("button");
        // botao_editar_lista.innerHTML = "Editar";
        // botao_editar_lista.onclick = aoClicar;
        // // botao_editar_lista.className="botaosEditar";
        // botao_editar_lista.id="botaosEditar";
        // divlista2.appendChild(botao_editar_lista);


        console.log(input_lista_id,input_lista_idDbNomeLista,input_lista_itemLista,
          input_lista_nomeDaSuaLista,input_lista_quemVaiComprar,input_lista_sugestaoDeLugar)

        divlista2.appendChild(input_lista_id);
        divlista2.appendChild(input_lista_idDbNomeLista);
        divlista2.appendChild(input_lista_nomeDaSuaLista);
        divlista2.appendChild(input_lista_itemLista);
        divlista2.appendChild(input_lista_quemVaiComprar);
        divlista2.appendChild(input_lista_sugestaoDeLugar);

        

          
          

        document.getElementById("conteudo_itemlista_linha").appendChild(divlista2);

       // Adiciona o botão de editar
    
         

      }

      let divlistabutton = document.createElement("div");
      divlistabutton.id = "divListaButton";

      

      let botao_editar_lista = document.createElement("button");
          botao_editar_lista.innerHTML = "Editar";
          botao_editar_lista.onclick = editar;
          // botao_editar_lista.className="botaosEditar";
          botao_editar_lista.id="botaosEditar";

          let botao_salvar_lista = document.createElement("button");
          botao_salvar_lista.innerHTML = "Salvar";
          botao_salvar_lista.onclick = salvar;
          // botao_editar_lista.className="botaosEditar";
          botao_salvar_lista.id="botaosSalvar";  



          
          document.getElementById("conteudo_itemlista_linha").appendChild(divlistabutton);
          document.getElementById("divListaButton").appendChild(botao_editar_lista);
          document.getElementById("divListaButton").appendChild(botao_salvar_lista);

      

      // var tamanhodalista = dbLista.dbLista.legth;
      // console.log(tamanhodalista);

      

      console.log(dbLista[0])
      console.log(dbLista.length)

      //continuar para correr o array pegar os dados e contruir a lista de itens dbLista.length



      // alert(console.log(tamanhodalista));



  }
  function editar() 
  {
    editar_status = true;

    for(i=0;i<=itens_lista;i++)
    {
      console.log("valor da lista ="+itens_lista,"valor de i ="+i);
      
      let input_lista_id=document.getElementById(`input_lista_id${i}`);
      let input_lista_idDbNomeLista=document.getElementById(`input_lista_idDbNomeLista${i}`);
      let input_lista_nomeDaSuaLista=document.getElementById(`input_lista_nomeDaSuaLista${i}`);
      let input_lista_itemLista=document.getElementById(`input_lista_itemLista${i}`);
      let input_lista_quemVaiComprar=document.getElementById(`input_lista_quemVaiComprar${i}`);
      let input_lista_sugestaoDeLugar=document.getElementById(`input_lista_sugestaoDeLugar${i}`);
  
      input_lista_id.readOnly=true;
      input_lista_idDbNomeLista.readOnly=true;
      input_lista_nomeDaSuaLista.readOnly=true;
      input_lista_itemLista.readOnly=false;
      input_lista_quemVaiComprar.readOnly=false;
      input_lista_sugestaoDeLugar.readOnly=false;
      

      



    }

  
    alert("O botão editar foi clicado! ",console.log(itens_lista));
  }
  function salvar() {
    if(editar_status==true)
      {
        alert("O botão salvar foi clicado! E o editar esta ativo");

        var dbLista = new Array();
        
        
      
        for ( x =0; x<=itens_lista;x++)
        {
          console.log("valor da lista ="+itens_lista,"valor de x ="+x);
          // Obtém os valores dos inputs
          let input_lista_id=document.getElementById(`input_lista_id${x}`);
          let input_lista_idDbNomeLista=document.getElementById(`input_lista_idDbNomeLista${x}`);
          let input_lista_nomeDaSuaLista=document.getElementById(`input_lista_nomeDaSuaLista${x}`);
          let input_lista_itemLista=document.getElementById(`input_lista_itemLista${x}`);
          let input_lista_quemVaiComprar=document.getElementById(`input_lista_quemVaiComprar${x}`);
          let input_lista_sugestaoDeLugar=document.getElementById(`input_lista_sugestaoDeLugar${x}`);
      
      
           // Cria um objeto JSON com os valores obtidos
      
          var lista = 
          {
            "id": input_lista_id.value,
            "idDbNomeLista":input_lista_idDbNomeLista.value,
            "nomeDaSuaLista":input_lista_nomeDaSuaLista.value,
            "itemLista":input_lista_itemLista.value,
            "quemVaiComprar": input_lista_quemVaiComprar.value,
            "sugestaoDeLugar": input_lista_sugestaoDeLugar.value
          };
      
          
      
      
          //Salva o valor das informaçoes do json no array
      
          dbLista[x] = lista;
          
      
      
      
          // console.log(quantidade_linhas);
        }
      
        const data = 
        {
          "dbLista": dbLista
        };

        salvar_enviar(data);
      }
      //enviar dados salvar lista
      else
      {
        alert("O botão salvar foi clicado! Mas editar não foi ativado");
      }
      console.log(dbLista);
    
    
  }

  function salvar_enviar(data)
  {
    console.log("Estou no POST")
  const configuracao = 
  {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        // 'headerLista': 'Dado'
    },
    body: JSON.stringify(data)
  };

// Enviando a requisição
fetch(UrlserverPutAlterarLista, configuracao)
  // .then(response => response.json())
  .then(data => {
    console.log('Sucesso:', data);
    alert('Sucesso: A operação foi concluída com êxito!');
    // limparLista();

    
  })
  .catch(error => console.error('Erro:', error));

}

