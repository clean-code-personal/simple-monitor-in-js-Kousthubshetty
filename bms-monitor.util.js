const{logMessage} = require('./bms-monitor.logs');

const factors = {
    temperature:{ name:'Temperature', min:0, max:45 },
    stateOfCharge:{ name:'State of Charge', min:20, max:80 },
    chargeRate:{ name:'Charge rate', min:0, max:0.8 }
};

function checkBattery(batteryName, factor, value){
    if (value === undefined){
        logMessage('error', batteryName, value, `${factors[factor].name} is unknown.`);
        return false;
    }
    if (value < factors[factor].min) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        return false;
    }
    if (value > factors[factor].max) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        return false;
    }
    return true;
}

module.exports={checkBattery};