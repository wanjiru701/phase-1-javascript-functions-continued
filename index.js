// code your solution here
function saturdayFun(msg=`roller-skate`) 
{
return  `This Saturday, I want to ${msg}!`;
} 
saturdayFun(`bathe my dog`)

function mondayWork(msg=`go to the office`)
{
    return `This Monday, I will ${msg}.`;
}
mondayWork(`work from home`);

function wrapAdjective(main= `*`) {
    return function(adj=`a hard worker`){
        return `You are ${main}${adj}${main}!`;
    }
}
wrapAdjective("%")("a dedicated programmer");