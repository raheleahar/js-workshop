
function forloop(max_line,character) {
    let text = "";
    let i;
    for (i = 0; i < max_line; i++) {
        if (i < max_line/2) text += character.repeat(i+1) + "<br>" ;
        else text += character.repeat(max_line - i) + "<br>" ;
    }
    console.log(text);
}


function whileloop(max_line,character) {
    let text = "" ;
    let i = 0;
    while (i < max_line) {
        if (i < max_line/2) text += character.repeat(i+1) + "<br>" ;
        else text += character.repeat(max_line - i) + "<br>" ;
        i +=1
    }
    console.log(text);
}

function dowhileloop(max_line,character) {
    let text = "" ;
    let i = 0;
    do {
        if (i < max_line/2) text += character.repeat(i+1) + "<br>" ;
        else text += character.repeat(max_line - i) + "<br>" ;
        i +=1
    }while (i < max_line)
    console.log(text);
}

forloop(7,"*")
whileloop(7,"*")
dowhileloop(7,"*")