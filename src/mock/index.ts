/** @format */

import Mock from 'mockjs';
import { isSSR } from '@/utils/is';

import './mockapi/user';

if (!isSSR) {
    Mock.setup({
        timeout: '500-1500',
    });
}
