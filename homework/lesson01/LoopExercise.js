
let ForLoopStars = () => {
    let text = "";
    let i;
    let n = 8;
    for (i = 0; i < n; i++) {

        if (i <= n / 2) {
            text += "*".repeat(i);
            text += "<br>";
        } else {
            text += "*".repeat(n - i);
            text += "<br>";
        }
    }

    console.log(text);
};
ForLoopStars();


let WhileLoopStars = () => {

    let text = "";
    let i = 0;
    let n = 8;
    while (i < n) {
        if(i <= n/2)
        {
            text += "*".repeat(i);
            text += "<br>";
        }
        else
        {
            text += "*".repeat(n-i);
            text += "<br>";
        }
        i++;
    }

    console.log(text);
};
WhileLoopStars();


let DoWhileLoopStars = () => {


    let text = "";
    let i = 0;
    let n = 8;
    do{
        if(i <= n/2)
        {
            text += "*".repeat(i);
            text += "<br>";
        }
        else
        {
            text += "*".repeat(n-i);
            text += "<br>";
        }
        i++;
    } while (i < n);

    console.log(text);
};
DoWhileLoopStars();

