function calcularImc(){
    let pessoa = {
        nome: formImc.nome.value,
        idade: formImc.idade.value,
        sexo: formImc.sexo.value,
        altura: formImc.altura.value,
        peso: formImc.peso.value
    };
    //pessoamaiorm = pessoa.idade  > 20 && pessoa.sexo === "Imasc"
    // let pessoamaiorm
    //if (pessoamaiorm === true){
    //
    //}
    //else if (pessoamenorm){
    //
    //}
    //
    //
    //
    let imc = pessoa.peso/pessoa.altura**2;
    let classificacao;
    if (imc < 18.5){
        classificacao = "Abaixo do Peso";
    }
    else if (imc >= 18.5 && imc < 25){
        classificacao = "Peso Ideal";
    }
    else if (imc >= 25,0 && imc < 29,9){
        classificacao = "Sobrepeso";
    }
    else if (imc >= 30,0 && imc < 34,9){
        classificacao = "Obesidade Grau I";
    }
    else if (imc >= 35,0 && imc < 39,9){
        classificacao = "Obesidade Grau II";
    }
    else{ (imc > 40,0)
        classificacao = "Obesidade Grau III";
    }
   
    document.getElementById("resultado").innerHTML = "Olá "+pessoa.nome+" seu IMC é de: "+imc.toFixed(2)+" sua classificação  é: "+classificacao;
    
    
}