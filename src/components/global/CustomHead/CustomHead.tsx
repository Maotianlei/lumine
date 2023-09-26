/** @format */

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/useRedux';
import { changeSettings } from '@/store/globalState';

type propsType = {
    title: string;
};

function CustomHead(props: propsType) {
    const PageSetting = useAppSelector(state => state.globalState.settings);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(changeSettings({ title: props.title }));
    }, []);

    return (
        <Head>
            <title>{PageSetting.title}</title>
        </Head>
    );
}

export default CustomHead;
