import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';
import axios from 'axios';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        /**
        * @Post /login
        */
        const LOGIN_ENDPOINT = 'http://localhost:9000/login';
        axios({
            method: 'post',
            url: LOGIN_ENDPOINT,
            data: {
                username: username,
                password: password
            }
        })
        .then((res) => {
            console.log(res)
            if (
                res.status === 200 &&
                res.data.accessToken &&
                res.data.accessTokenExpiresAt &&
                res.data.tokenType
            ) {
                let jwt = res.data.accessToken;
                let expire_at = res.data.accessTokenExpiresAt;
                let token_type = res.data.tokenType;

                localStorage.setItem('username', username);
                localStorage.setItem('access_token', jwt);
                localStorage.setItem('expire_at', expire_at);
                localStorage.setItem('token_type', token_type);
                return Promise.resolve();
            }
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject('Unkown method');
        });
        return Promise.resolve();
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('expire_at');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
