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
          loginSuccess(data.credentials)
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
export const loginSuccess = (credentials) => {
  return {
    type: LOGIN_SUCCESS,
    credentials
  }
}
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}
