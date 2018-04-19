var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="pedidos"]', function (e) {
    firebase.database().ref('pedido').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-20">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Email +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Telefone +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Endereco +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Prato +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});