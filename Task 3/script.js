let cur='';
let prev='';
let operator='';
const display=document.getElementById('display');
const numButtons=document.querySelectorAll('.button.number');
const opBtn=document.querySelectorAll('.button.operator');
const clearBtn=document.querySelector('.button.clear');
const equalBtn=document.querySelector('.button.equal');

numButtons.forEach(button => {
    button.addEventListener('click',function() {
        const value=button.textContent;
        cur+=value;
        display.textContent=cur;
    });
});

opBtn.forEach(button => {
    button.addEventListener('click',function() {
        const value=button.textContent;
        if (cur){
            if (prev){
                cur=calculate(prev,cur,operator);
            }
            prev=cur;
            cur='';
            operator=value;
        }
    });
});

clearBtn.addEventListener('click',function() {
    cur='';
    prev='';
    operator='';
    display.textContent='0';
});

equalBtn.addEventListener('click',function() {
    if (cur && prev && operator) {
        const ans=calculate(prev,cur,operator);
        display.textContent=ans;
        cur=ans;
        prev='';
        operator='';
    }
});

function calculate(a,b,op) {
    a=parseFloat(a);
    b=parseFloat(b);
    if (op=='+'){
        return a+b;
    }
    else if (op=='-'){
        return a-b;
    }
    else if (op=='*'){
        return a*b;
    }
    else if (op=='/'){
        return a/b;
    }
    else{
        return 0;
    }
}
