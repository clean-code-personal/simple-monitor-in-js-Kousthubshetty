var logs=[];

function logMessage(type, batteryName, value, message){
    let log={};
    log['batteryName']=batteryName;
    log['message']=`[${type.toUpperCase()}] ${batteryName.toUpperCase()} --> ${message} (value:${value})`;
    log['time']=new Date();
    log['value']=value;
    log['type']=type;
    logs.push(log);
}

function showLogs(){
    for(let log of logs){
        switch(log['type']){
            case 'warning':console.warn(log['message']);
                break;
            case 'error':console.error(log['message']);
                break;
            default: console.log(`[${log['type'].toUpperCase()}]`, log['message']);
        }
    }
}

module.exports={logMessage,showLogs};