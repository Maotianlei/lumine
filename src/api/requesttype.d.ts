/** @format */

export interface resType {
    data: {
        msg?: string;
        code: string;
    };
}

export interface retType {
    data?: {
        msg?: string;
        code: number;
    };
}

export interface apiCallbackType {
    success?: (res: Object, payload: Object) => void;
    error?: (ret: Object | undefined, payload: Object) => void;
}
