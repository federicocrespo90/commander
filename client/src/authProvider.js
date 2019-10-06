import { AUTH_LOGIN } from 'react-admin';
import MAIN_ENDPOINT from './constants';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${MAIN_ENDPOINT}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ accessToken }) => {
                localStorage.setItem('access_token', accessToken);
            });
    }
    return Promise.resolve();
}