/** @format */

import Nprogress from 'nprogress';

export function addload(): void {
    Nprogress.start();
}

export function removeload(): void {
    Nprogress.done();
}
