/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import configFile from "../config";

import apiGateway from './lib/apiGatewayCore/apiGatewayClient';
// import sigV4Client from './lib/apiGatewayCore/sigV4Client';
// import simpleHttpClient from './lib/apiGatewayCore/simpleHttpClient';
import apiGatewayUtils from './lib/apiGatewayCore/utils';
import uritemplate from './lib/url-template/url-template';


var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: configFile.accessKeyId,
            secretKey: configFile.secretAccessKey,
            // sessionToken: '',
            region: configFile.region,
            // apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://ixvrmrj6q3.execute-api.us-east-1.amazonaws.com/capstone-dev';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
        
    apigClient.apiPost = async function (params, body, additionalParams) {
        console.log('reached-1')

        try {
            if(additionalParams === undefined) { additionalParams = {}; }
            
            apiGatewayUtils.core.utils.assertParametersDefined(params, [], ['body']);
            
            var apiPostRequest = {
                verb: 'post'.toUpperCase(),
                path: pathComponent + uritemplate('/api').expand(apiGatewayUtils.core.utils.parseParametersToObject(params, [])),
                headers: apiGatewayUtils.core.utils.parseParametersToObject(params, []),
                queryParams: apiGatewayUtils.core.utils.parseParametersToObject(params, []),
                body: body
            };
            let result = await apiGatewayClient.makeRequest(apiPostRequest, authType, additionalParams, config.apiKey);
            console.log('reached-2')
            return result
        } catch(err) {
            console.log(err)
        }
       
        
       
    };    
    // apigClient.apiOptions = function (params, body, additionalParams) {
    //     if(additionalParams === undefined) { additionalParams = {}; }
        
    //     apiGatewayUtils.core.utils.assertParametersDefined(params, [], ['body']);
        
    //     var apiOptionsRequest = {
    //         verb: 'options'.toUpperCase(),
    //         path: pathComponent + uritemplate('/api').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
    //         headers: apiGatewayUtils.core.utils.parseParametersToObject(params, []),
    //         queryParams: apiGatewayUtils.core.utils.parseParametersToObject(params, []),
    //         body: body
    //     };
        
        
    //     return apiGatewayClient.makeRequest(apiOptionsRequest, authType, additionalParams, config.apiKey);
    // };
    

    return apigClient;
};


export default apigClientFactory;