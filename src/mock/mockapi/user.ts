/** @format */

import Mock from 'mockjs';
import { isSSR } from '@/utils/is';
import setupMock from '../setupMock';

if (!isSSR) {
    setupMock({
        setup: () => {
            // 登录
            Mock.mock(new RegExp('/api/user/login'), params => {
                const { username, password } = JSON.parse(params.body);
                if (!username) {
                    return {
                        code: 'error',
                        msg: '用户名不能为空',
                    };
                }
                if (!password) {
                    return {
                        code: 'error',
                        msg: '密码不能为空',
                    };
                }
                if (username === 'admin' && password === 'admin') {
                    return {
                        code: 'success',
                    };
                }
                return {
                    code: 'error',
                    msg: '账号或者密码错误',
                };
            });
            // 用户信息
            Mock.mock(new RegExp('/api/user/userInfo'), () => {
                return Mock.mock({
                    name: '貌天雷',
                    job: 'frontend',
                    jobName: '前端开发工程师',
                    email: 'mao_tianlei@163.com',
                    avatar: 'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
                    verified: true,
                    phoneNumber: /177[*]{6}[0-9]{2}/,
                    accountId: /[a-z]{4}[-][0-9]{8}/,
                    registrationTime: Mock.Random.datetime(
                        'yyyy-MM-dd HH:mm:ss',
                    ),
                });
            });
        },
    });
}
