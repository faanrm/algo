function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    var sommeK1: number = x1
    var sommeK2 : number = x2
    for(var i = 0 ; i < 10 ; i++ ){
        sommeK1 = v1 + sommeK1
        sommeK2 = v2 + sommeK2
        if(sommeK1 === sommeK2){
            return "YES"
        }
    }
    return "NO"
}