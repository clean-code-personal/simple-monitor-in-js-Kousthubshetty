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
        if (log['type'] == 'warning'){
            console.warn(log['message']);
        }else if (log['type'] == 'error'){
            console.error(log['message']);
        }
    }
}

module.exports={logMessage,showLogs};