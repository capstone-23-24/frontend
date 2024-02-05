import axios from 'axios'
import config from './config'
import apigClientFactory from './apiGateway/apigClient';


export const invoke_endpoint = async (params = undefined, body, additionalParams = undefined) =>   {
    
    
    const apigClient = apigClientFactory.newClient(); 

    try {
        await apigClient.apiPost(params, body, additionalParams)
        .then(response => {
            // Handle successful response
            console.log(response);
        })
        .catch(error => {
                // Handle error
                console.error(error);
        });
        console.log('reached')
    } catch (err)   {
        return `Error in call: ${err}`
    }

}





