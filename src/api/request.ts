/** @format */

import axios from 'axios';
import axiosRetry from 'axios-retry';
import { addload, removeload } from '@/utils/nprocess';
import { mergejson } from '@/utils/handlejson';
// import { messagetip } from '@/utils/stylemethods';
import { get_usercookie } from '@/utils/cookieUtils';
import defaultSettings from '@/settings.json';
import { resType, retType, apiCallbackType } from './requesttype';

const axiosInstance = axios.create({
    baseURL: defaultSettings.baseURL,
    timeout: 5000,
    headers: {
        Authorization: get_usercookie(),
    },
});

axiosRetry(axiosInstance, { retries: 2 });

// Do something before request is sent,调接口前处理
axiosInstance.interceptors.request.use(
    function (config) {
        addload();
        return config;
    },
    function (error) {
        removeload();
        return Promise.reject(error);
    },
);

// Do something with response data,调完接口处理
axiosInstance.interceptors.response.use(
    function (response) {
        removeload();
        return response;
    },
    function (error) {
        removeload();
        return Promise.reject(error);
    },
);

// 默认提示
const defaultcallback = {
    success: (res: resType['data']) => {
        // messagetip('success', res.msg);
    },
    error: (res: resType['data']) => {
        // messagetip('error', res?.msg);
    },
};

export function APIFactory(
    type: string,
    url: string,
    payload: object,
    callback: apiCallbackType,
) {
    let callbackfn = mergejson(defaultcallback, callback);
    axiosInstance[type](url, payload)
        .then(function (res: resType) {
            if (res.data.code == 'error') {
                //登录失效
                callbackfn.error(res.data, payload);
                return;
            }
            callbackfn.success(res.data, payload);
        })
        .catch(function (err: string, ret: retType) {
            callbackfn.error(ret?.data, payload);
        });
}

export async function APIAsyncFactory(
    type: string,
    url: string,
    payload: object,
) {
    return await axiosInstance[type](url, payload)
        .then(function (res: resType) {
            let returnparam = { res: res.data, payload };
            if (res.data.code == 'error') {
                return returnparam;
            }
            return returnparam;
        })
        .catch(function (err: string, ret: retType) {
            let returnparam = { res: ret?.data, payload };
            return returnparam;
        });
}
