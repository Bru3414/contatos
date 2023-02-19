const form = document.getElementById('form');
var linhas ='';
var numOrganizado = '';
var addContatos = 0;
var num = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');

    addContato();
    atualizaTabela();

})

function addContato() {

    const arrayNum = numero.value.split('');
    var sobraNum = '';

    switch (arrayNum.length) {

        case 10: {

            for (var i = 2; i < arrayNum.length; i++) {

                if (i == arrayNum.length - 4) {
                    sobraNum += '-';
                }

                sobraNum += arrayNum[i]
            }

            numOrganizado = `(${arrayNum[0]+arrayNum[1]})${sobraNum}`

            break;
        }

        case 11: {

            for (var i = 2; i < arrayNum.length; i++) {

                if (i == arrayNum.length - 4) {
                    sobraNum += '-';
                }

                sobraNum += arrayNum[i]
            }

            numOrganizado = `(${arrayNum[0]+arrayNum[1]})${sobraNum}`

            break;
        }

        case 12: {

            for (var i = 4; i < arrayNum.length; i++) {

                if (i == arrayNum.length - 4) {
                    sobraNum += '-';
                }

                sobraNum += arrayNum[i]
            }

            numOrganizado = `+${arrayNum[0]+arrayNum[1]}(${arrayNum[2]+arrayNum[3]})${sobraNum}`;

            break;
        }

        case 13: {

            for (var i = 4; i < arrayNum.length; i++) {

                if (i == arrayNum.length - 4) {
                    sobraNum += '-';
                }

                sobraNum += arrayNum[i]
            }

            numOrganizado = `+${arrayNum[0]+arrayNum[1]}(${arrayNum[2]+arrayNum[3]})${sobraNum}`;

            break;
        }

        default: {

        for (var i = 0; i < arrayNum.length; i++) {

            if (i == arrayNum.length - 4) {
                sobraNum += '-';
            }

            sobraNum += arrayNum[i]
        }

        numOrganizado = sobraNum;

        break;
        }
    } 

    if (arrayNum.length < 8 || arrayNum.length > 13 || num.includes(numero.value) ) {

        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = num.includes(numero.value) ? `O número: ${numOrganizado} já existe` : 'O número deve conter de 8 a 13 caracteres';

    }else {

        document.getElementById('error').style.display = 'none';

        var linha = '';

        linha += '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${numOrganizado} <img src="./images/telefone.png"></td>`;
        linha += '</tr>';

        linhas += linha;

        num.push(numero.value);

        addContatos++;
    }

    nome.value = '';
    numero.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    const qtdContatos = document.getElementById('qtd-contatos');
    corpoTabela.innerHTML = linhas;
    qtdContatos.innerHTML = `Quantidade de contatos: ${addContatos}`;
}