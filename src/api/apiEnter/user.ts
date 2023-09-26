/** @format */

import { APIFactory } from '../request';
import { apiCallbackType } from '../requesttype';

// 登录
export function loginApi(payload: Object, callback: apiCallbackType) {
    APIFactory('post', '/api/user/login', payload, callback);
}

// 查询用户信息
export function userInfoApi(payload: Object, callback: apiCallbackType) {
    APIFactory('post', '/api/user/userInfo', payload, callback);
}
