function verificarIdade(idade){
    if (idade <12){
        return "criança"

    }else if (idade<18){
        return "adolescente"

    }else if (idade<64){
        return "Adulto"

    }else{
        return "idoso"
    }

}