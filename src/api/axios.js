import apigClientFactory from './apiGateway/apigClient';


export const invoke_endpoint = async (params = undefined, body, additionalParams = undefined) =>   {

    const apigClient = apigClientFactory.newClient(); 

    let result;

    try {
        await apigClient.apiPost(params, body, additionalParams)
        .then(response => {
            // Handle successful response
            console.log(response);
            result = response;
        })
    } catch (err)   {
        return `Error in call: ${err}`
    }

    return result;
}





