import React, { Component } from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';

import './App.css';

import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import customRoutes from './routes';
import englishMessages from './i18n/en';
import products from './products';
import jsonServerProvider from 'ra-data-json-server';

const i18nProvider = locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
};

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    const accessToken = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null; 
    const tokenType = localStorage.getItem("token_type") ? localStorage.getItem("token_type") : null;
    options.headers.set('Authorization', `${tokenType} ${accessToken}`);

    return fetchUtils.fetchJson(url, options);
}

class App extends Component {
    state = { dataProvider: null };

    componentWillMount() {
        const dataProvider = jsonServerProvider('http://localhost:9000', httpClient);
        this.setState({ dataProvider });
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
            <Admin
                title="Commander"
                dataProvider={dataProvider}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authProvider={authProvider}
                loginPage={Login}
                appLayout={Layout}
                locale="en"
                i18nProvider={i18nProvider}
            >
                <Resource name="products" {...products} />
            </Admin>

        );
    }
}

export default App;
