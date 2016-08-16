import 'isomorphic-fetch';

export const register = (credentials) => {
  return (dispatch) => {
    const url = '/api/register';
    return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          credentials: credentials
        })
      })
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return dispatch(
          registerSuccess(data)
        );
      })
      .catch((error) => {
        return dispatch(
          registerError(error)
        );
      });
  }
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user
  }
}
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    error
  }
}


export const login = (credentials) => {
  return (dispatch) => {
    const url = '/api/login';
    return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          credentials: credentials
        })
      })
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch(
          loginSuccess(data.user)
        );
      })
      .catch((error) => {
        return dispatch(
          loginError(error)
        );
      });
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}


