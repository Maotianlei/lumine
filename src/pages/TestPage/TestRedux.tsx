/** @format */

import React from 'react';
import { updateUserInfo, delUserInfo } from '@/store/userInfo';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/useRedux';
function TestRedux() {
    const count = useAppSelector(state => state.userInfo);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() =>
                        dispatch(updateUserInfo({ name: '222', phone: '111' }))
                    }>
                    Increment
                </button>
                <span>
                    {count.name}
                    {count.phone}
                </span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(delUserInfo())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default TestRedux;
