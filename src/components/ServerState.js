import { useEffect, useState } from "react";

const ServerState = ({serverPingingFn, serverOnlineFn, retries, intervalTimer}) => {
    let [retry, setRetries] = useState(retries);
    let [serverCheckTimer, setServerCheckTimer] = useState(null);

    useEffect(() => {
        const pingServer = async() =>{
            serverPingingFn(true);
            const res = await fetch(`${process.env.REACT_APP_ROUTE_PATH}/pingServer`);
            if(!res.ok){
                setRetries(retry => retry-1);
                serverOnlineFn(false);
                throw new Error("Trouble connecting to server...")
            }

            if(res.ok){
                setRetries(retries);
                serverOnlineFn(true);
            }
        }

        if(!serverCheckTimer){
            pingServer();
            setServerCheckTimer(setInterval(pingServer, intervalTimer*1000));
        }

        if(retry === 0){
            clearInterval(serverCheckTimer);
            serverOnlineFn(false);
            serverPingingFn(false);
            console.info("Server is offline...");
        }

    }, [retry, serverCheckTimer, serverPingingFn, serverOnlineFn, retries, intervalTimer])
}

export default ServerState