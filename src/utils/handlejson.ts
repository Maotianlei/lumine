/** @format */

// 获取json的指定值，获取不到返回vdefault
export function getJsonKey(json: Object, key: string, vdefault: any) {
    return json?.[key] != undefined ? json[key] : vdefault;
}

// 合并json，排在越后面的权重越高
export function mergejson(...args: Object[]) {
    return Object.assign({}, ...args);
}
