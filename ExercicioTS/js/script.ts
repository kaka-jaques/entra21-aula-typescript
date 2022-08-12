function somar (numA:number, numB:number,) :number{
    return numA+numB;
}

function subtrair (numA:number, numB:number) {
    return numA-numB;
}

function dividir (numA:number, numB:number) {
    return numA/numB;
}

function multiplicar(numA:number, numB:number) {
    return numA*numB;
}

$("#somar").on("click", function(){
    $("#result").attr("value", 123123)
})