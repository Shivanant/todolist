
module.exports=getdate;

function getdate(){

var today=new Date;

var options ={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day=today.toLocaleDateString("en-US",options)

return day;
// var day="";
// var currday=today.getDay();

// switch (currday) {
//     case 0:
//         day="sunday"
        
//         break;
//         case 1:
//             day="monday"
            
//             break;
//              case 2:
//             day="tuesday"
            
//             break; 
//             case 3:
//             day="wed"
            
//             break; 
//             case 4:
//             day="thu"
            
//             break;
//             case 5:
//             day="fri"
            
//             break;
//             case 6:
//             day="sat"
            
//             break;

//     default:
//         console.log("error"+currday);
//         break;
// }

}