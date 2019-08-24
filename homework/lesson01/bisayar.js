function PrintStar()
{
 let starCount = 1;let i = 1;let j = 4;
let firsttext="";
let secondtext ="";

let samplemintext ="";
let samplemaxtext ="****";
    while(starCount < 5)
    {
        samplemintext+= "*";
        firsttext += samplemintext;
        firsttext +=  "\n";

 		samplemaxtext=samplemaxtext.substring(0, 4 - starCount );
        secondtext += samplemaxtext;
        secondtext +=  "\n";
        starCount ++;
    }
console.log(firsttext + secondtext);
}


PrintStar();