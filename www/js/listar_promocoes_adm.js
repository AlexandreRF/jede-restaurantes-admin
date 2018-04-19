var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtosadm"]', function (e) {
    firebase.database().ref('Promocoes').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
        
    
        snapshot.forEach(function(item){
                var listHtml = '<div class="row block block-strong">';
                listHtml += '<td class="label-cell col-20">'+item.key+'</td>';
                //listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Id +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Dia +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Mistura +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Acompanhamento +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});


function apagarrr(){
    
        var apagarrr = document.getElementById('excluirrr').value;
    
        apagardb(apagarrr);
    }
    
    function apagardb(apaga){
    
        return firebase.database().ref().child('Promocoes').child(apaga).remove();
    }
  