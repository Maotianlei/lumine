/** @format */
import React from 'react';
import store from '@/store/index';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { GlobalContext } from '@/context';
import useStorage from '@/utils/hooks/useStorage';
import '@/style/reset.scss';
import '@/style/global.scss';
import '@/style/themes.scss';

function App({ Component, pageProps }: AppProps) {
    const [lang, setLang] = useStorage('lunmine-lang', 'en-US');
    const [theme, setTheme] = useStorage('lunmine-theme', 'light');
    const contextValue = { lang, setLang, theme, setTheme };

    return (
        <Provider store={store}>
            <GlobalContext.Provider value={contextValue}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </Provider>
    );
}

export default App;
