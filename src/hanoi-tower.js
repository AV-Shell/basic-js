module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let obj = {
        'turns' : 0 ,
        'seconds' : 0,
    }
    // console.log ('hanoi in', disksNumber, turnsSpeed );
    for(let i=1; i<=disksNumber;i++){
        obj.turns = obj.turns*2 +1;
    }
    // console.log('myseconds',obj.turns * 3600 / turnsSpeed);
    obj.seconds = Math.floor(obj.turns * 3600 / turnsSpeed);
    // console.log('myseconds',obj.seconds);
    return obj;
}
