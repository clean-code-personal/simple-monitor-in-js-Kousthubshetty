const{logMessage} = require('./bms-monitor.logs');

const factors = {
    temperature:{ name:'Temperature', min:0, max:45 },
    stateOfCharge:{ name:'State of Charge', min:20, max:80 },
    chargeRate:{ name:'Charge rate', min:0, max:0.8 }
};

function isDefined(batteryName, factor, value){
    if (value === undefined){
        logMessage('error', batteryName, value, `${factors[factor].name} is unknown.`);
        return false;
    }else {
        return true;
    }
}

function checkBattery(batteryName, factor, value){
    let isOk=isDefined(batteryName, factor, value)

    if (value < factors[factor].min) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        isOk= false;
    }else if (value > factors[factor].max) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        isOk= false;
    }
    return isOk;
}

module.exports={checkBattery};