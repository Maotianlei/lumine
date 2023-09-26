/** @format */

import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'lunmine',
    description: 'lunmine power',
};
function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
