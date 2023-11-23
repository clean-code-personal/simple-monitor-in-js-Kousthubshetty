const{checkBattery} = require('./bms-monitor.util');

function batteryIsOk(batteryName,{temperature, soc, chargeRate}) {
    let temperatureIsOk = checkBattery(batteryName,'temperature',temperature);
    let socIsOk = checkBattery(batteryName,'stateOfCharge',soc);
    let chargeRateIsOk = checkBattery(batteryName,'chargeRate',chargeRate);

    return temperatureIsOk && socIsOk && chargeRateIsOk;
}

module.exports={batteryIsOk};