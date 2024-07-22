// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`);
}
function wrapAdjective(main) {
    return function (adjective ="special") {
        return `You are ${main}${adjective}${main}!`
    }
}

   


