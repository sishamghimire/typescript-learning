
type combinable= number|string

function combine(
    input1:combinable, 
    input2:combinable
    ){
    let result;
    if(typeof input1=== 'number'&& typeof input2 ==='number'){
        result = input1 + input2;

    } else{
        result =input1.toString() + input2.toString();
            }
    return result;
        }
const combinedAges = combine(30,26);
console.log(combinedAges);
 
const combinedNames =combine ('Sisham','Ghimire');
console.log(combinedNames);