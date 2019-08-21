const Stars=() => {
    let st ='';
    for (let i = 1; i < 8 ; i++) {
        if (i<=4){
            st='*'.repeat(i);             
        }else{
            st='*'.repeat(8-i);  
        }
        console.log(st);
    }
}

Stars();
