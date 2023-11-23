const {expect} = require('chai');
const {batteryIsOk}=require('./bms-monitor');
const{checkBattery}=require('./bms-monitor.util');
const{showLogs}=require('./bms-monitor.logs');

expect(batteryIsOk('PowerMax', {temperature:25, soc:70, chargeRate:0.7})).to.be.true;

expect(batteryIsOk('EnergyCell', {temperature:50, soc:40, chargeRate:0})).to.be.false;
expect(batteryIsOk('TurboVolt', {temperature:26, soc:85, chargeRate:0})).to.be.false;
expect(batteryIsOk('ElectronBoost', {temperature:10, soc:42, chargeRate:0.95})).to.be.false;
expect(batteryIsOk('SolarFlare', {temperature:55, soc:100, chargeRate:0.9})).to.be.false;

// expect(batteryIsOk('QuantumCell', {soc:70, chargeRate:0.7})).to.be.false;

// expect(checkBattery('TitanCell', 'stateOfCharge', undefined)).to.be.false;
// expect(checkBattery('TitanCell', 'stateOfCharge', 30)).to.be.true;

showLogs();