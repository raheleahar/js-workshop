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

//----------------
const Stars=() => {
//     let st ='';
//     for (let i = 1; i < 8 ; i++) {
//         if (i<=4){
//             for (let j=0; j<i ;j++){            
//                 st=st+'*';
//             }      
//         }else{
//             for (let j=0; j<(8-i) ;j++){ 
//                 st=st+'*';                
//             }  
//         }
//         console.log(st);
//         st='';
//     }
// }

// Stars();
