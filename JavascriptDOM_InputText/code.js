const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputNumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result;
            document.getElementById('output').textContent=fr.result;
        }

        var info =  document.getElementById('output').textContent;

        if (info == "") {
            console.log("Entrei no IF");
            throw 'NÃO FOI POSSIVEL LER O ARQUIVO SELECIONADO';
        }
  
    }

    catch (error){
        console.log(error);
        alert(error);
    }
    finally{
        alert("obrigado pela visita !")
    }
    
    
}


function clickNumberButton(){
    
    document.getElementById("outputNumber").innerHTML = " ";
    number = document.getElementById("inputNumber").value;
    try {
        if(number == '') throw 'informe um valor';  
        if(number <= 5 || number >= 10) throw 'Informe um valor de MAIOR que cinco e MENOR que dez!';


    }
    catch(erro){
        document.getElementById("outputNumber").innerHTML = erro; 
        console.log("Erro" + erro)  
    }
    finally{
        alert("O numero escolhido foi" + number);
    }
















    /*cincoAdez = document.getElementById("input5a10").value; 
    try {
        if (cincoAdez == 0) throw 'informe um valor';
        console.log(erro);
    }
    catch{
        console.log(erro);
        document.getElementById('output5a10').innerHTML = erro;
    }

    try {

    }

    catch{
        console.log("Botão Number");
        
    }*/
  
}

