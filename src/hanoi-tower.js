module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let obj = {
        'turns' : 0 ,
        'seconds' : 0,
    }
    // console.log ('hanoi in', disksNumber, turnsSpeed );
    for(let i=1; i<=disksNumber;i++){
        obj.turns = obj.turns*2 +1;
    }
    obj.seconds = obj.turns/ (turnsSpeed/ 3600);
    return obj;
}