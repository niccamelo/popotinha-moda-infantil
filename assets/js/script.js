
document.getElementById('infoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos do formulário
    const roupa = document.getElementById("Roupa").value;
    const descricao = document.getElementById("Descricao").value;
    const valor = document.getElementById("Valor").value;
    const fileInput = document.getElementById("formFile");
    const tamanho = document.getElementById("Tamanho").value;
    const file = fileInput.files[0];

    // Cria um FileReader para ler o conteúdo do arquivo
    const reader = new FileReader();
    reader.onload = function (e) {
        // Cria um elemento para exibir as informações salvas
        const savedInfoDiv = document.getElementById('SavedInfo');
        const info = document.createElement('div');

        info.innerHTML = `<div class="col w-200">
                      <div class="card ">
                      <button class="deleteButton">Excluir</button>
                      <img src="${e.target.result}" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title"> ${roupa}</h5>
                      <p class="card-text"> ${descricao}</p>
                      <p class="card-text"> R$ ${valor}</p>
                      <p class="card-text"><b> ${tamanho}</b></p>
                      </div>
                      </div>
                      </div>`;

        // Adiciona as informações salvas à div
        savedInfoDiv.appendChild(info);

        // Adiciona um ouvinte de eventos ao botão de excluir
        const deleteButton = info.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function () {
            savedInfoDiv.removeChild(info);
        });



    };
    // Lê o conteúdo do arquivo como uma URL de dados
    reader.readAsDataURL(file);

    // Limpa o formulário
    document.getElementById('infoForm').reset();



});

//function getCheckedValues() {
//    var form = document.getElementById('infoForm');
//    var checkboxes = form.querySelectorAll('input[type="checkbox"]');
//   var resultDiv = document.getElementById('result');
//   var selectedValues = [];

//    checkboxes.forEach(function(checkbox) {
//        if (checkbox.checked) {
//            selectedValues.push(checkbox.value);
//        }
//    });

//    resultDiv.innerHTML = 'Selecionado: ' + (selectedValues.length > 0 ? selectedValues.join(', ') : 'Nenhuma opção selecionada');
//}

document.getElementById('infoFormVerao').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos do formulário
    const roupa1 = document.getElementById("Roupa1").value;
    const descricao1 = document.getElementById("Descricao1").value;
    const valor1 = document.getElementById("Valor1").value;
    const fileInput1 = document.getElementById("formFile1");
    const tamanho1 = document.getElementById("Tamanho1").value;
    const file1 = fileInput1.files[0];


    // Cria um FileReader para ler o conteúdo do arquivo
    const reader = new FileReader();
    reader.onload = function (e) {
        // Cria um elemento para exibir as informações salvas
        const savedInfoDivVerao = document.getElementById('SavedInfoVerao');
        const info1 = document.createElement('div');

        info1.innerHTML = `<div class="col w-200">
        <div class="card ">
        <button class="deleteButton">Excluir</button>
        <img src="${e.target.result}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"> ${roupa1}</h5>
        <p class="card-text"> ${descricao1}</p>
        <p class="card-text"> R$ ${valor1}</p>
        <p class="card-text"><b> ${tamanho1}</b></p>
        </div>
        </div>
        </div>`;

        // Adiciona as informações salvas à div
        savedInfoDivVerao.appendChild(info1);

        // Adiciona um ouvinte de eventos ao botão de excluir
        const deleteButton = info1.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function () {
            savedInfoDivVerao.removeChild(info1);
        });

    };
    // Lê o conteúdo do arquivo como uma URL de dados
    reader.readAsDataURL(file1);

    // Limpa o formulário
    document.getElementById('infoFormVerao').reset();


    var confirma = document.getElementById('adicionaVerao');
    var resultado = document.getElementById('resultado');
    confirma.addEventListener('click', function () {
        var checkados1 = document.querySelectorAll('input:checked');
        resultado.innerHTML = [].map.call(checkados1, function (el) {
            return el.value;
        }).join(', ');
    });


});