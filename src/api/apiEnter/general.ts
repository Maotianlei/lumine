/** @format */

import { APIFactory, APIAsyncFactory } from '../request';
import { apiCallbackType } from '../requesttype';

// 通用接口post
export function postApi(payload: Object, callback: apiCallbackType) {
    APIFactory('post', '/other/getcomapi', payload, callback);
}

// 通用接口get
export function getApi(payload: Object, callback: apiCallbackType) {
    APIFactory('get', '/other/getcomapi', payload, callback);
}

// 通用同步接口post
export async function postApiAsync(payload: Object) {
    return await APIAsyncFactory('post', '/other/getcomapi', payload);
}

// 通用同步接口post
export async function pgetApiAsync(payload: Object) {
    return await APIAsyncFactory('get', '/other/getcomapi', payload);
}
