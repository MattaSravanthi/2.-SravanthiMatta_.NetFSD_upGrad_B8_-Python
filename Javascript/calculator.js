let m=10;
let n=20;
let operator='-'
function Calculator(m,n,operator){
    switch(operator){
        case '+':return m+n;
        case '-':return m-n;
        case '*':return m*n;
        case '/':return m/n;
    }

}
console.log(Calculator(m,n,operator))