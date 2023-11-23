// const{checkBattery} = require('./bms-monitor.util');
const{logMessage} = require('./bms-monitor.logs');

const factors = {
    temperature:{ name:'Temperature', min:0, max:45 },
    stateOfCharge:{ name:'State of Charge', min:20, max:80 },
    chargeRate:{ name:'Charge rate', min:0, max:0.8 }
};
// function isDefined(value){
//     if (value === undefined){
//         // logMessage('error', batteryName, value, `${factors[factor].name} is unknown.`);
//         console.log('error', batteryName, value, `${factors[factor].name} is unknown.`);
//         return false;
//     }else {
//         return true;
//     }
// }
function checkBattery(batteryName, factor, value){
    let isOk=true
    // if (value === undefined){
    //     // logMessage('error', batteryName, value, `${factors[factor].name} is unknown.`);
    //     console.log('error', batteryName, value, `${factors[factor].name} is unknown.`);
    //     return false;
    // }else 
    if (value < factors[factor].min) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        // console.log('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        isOk= false;
    }else if (value > factors[factor].max) {
        logMessage('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        // console.log('warning', batteryName, value, `${factors[factor].name} is out of range!`);
        isOk= false;
    }
    return isOk;
}

function batteryIsOk(batteryName,{temperature, soc, chargeRate}) {
    let temperatureIsOk = checkBattery(batteryName,'temperature',temperature);
    let socIsOk = checkBattery(batteryName,'stateOfCharge',soc);
    let chargeRateIsOk = checkBattery(batteryName,'chargeRate',chargeRate);

    return temperatureIsOk && socIsOk && chargeRateIsOk;
}

// showLogs();

module.exports={batteryIsOk};