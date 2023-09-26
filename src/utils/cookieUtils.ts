/** @format */

import Cookies from 'js-cookie';

// 储存用户信息
export function set_usercookie(params: Object): void {
    Cookies.set('token', JSON.stringify(params));
}

// 获取用户信息
export function get_usercookie(): string {
    let usercookie = Cookies.get('token');
    if (usercookie) {
        return JSON.parse(usercookie);
    }
    return '';
}

// 删除用户信息
export function del_usercookie(): void {
    Cookies.remove('token');
}

// 储存other
export function set_othercookie(key: string, params: any): void {
    Cookies.set(key, params);
}

// 获取other
export function get_othercookie(key: string): string | undefined {
    return Cookies.get(key);
}

// 删除other
export function del_othercookie(key: string): void {
    Cookies.remove(key);
}
