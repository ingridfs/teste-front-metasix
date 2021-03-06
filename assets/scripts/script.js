const headers = new Headers();
headers.append(); // chave da API
const apiConnection = new Request(link, {headers}); //link: link da API

function listQuestion(list) {
    //var arrayList = Array.from(list)
    console.log(list.results);
    list.results.forEach(item => {
    document.getElementById("pergunta").innerHTML += ' \
      <div  class="row listar-faq-linha"> \
        <div class="col-9">\
          <span>' + item.question + '</span>\
        </div>\
        <div class="col listar-faq-item">\
          <span id="order">' + item.position + '</span>\
        </div>\
        <div class="col listar-faq-item">\
          <button id="btn-editar" class="btn-listagem"><span><i class="fas fa-edit"></i></span></button>\
        </div>\
        <div class="col listar-faq-item">\
          <button id="btn-apagar" class="btn-listagem"><span><i class="fas fa-trash"></i></span></button>\
        </div>\
      </div>'
    });
}

fetch(apiConnection)
  .then(response => {
    return response.json()
  })
  .then(list => {
    listQuestion(list)
  })
  
  

// btn-editar
// btn-apagar