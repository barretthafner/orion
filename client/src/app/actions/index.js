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
          username: credentials.username,
          password: credentials.password
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
          loginSuccess(data)
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

export const logout = () => {
  return (dispatch) => {
    const url = '/api/logout';
    return fetch(url)
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
      })
      .then(() => {
        return dispatch(
          logoutSuccess()
        );
      })
      .catch((error) => {
        return dispatch(
          logoutError(error)
        );
      });
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    error
  }
}

export const getUsersList = () => {
  return (dispatch) => {
    const url = '/api/user';
    return fetch(url)
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
          getUsersListSuccess(data)
        );
      })
      .catch((error) => {
        return dispatch(
          getUsersListError(error)
        );
      });
  }
}

export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const getUsersListSuccess = (usersList) => {
  return {
    type: GET_USERS_LIST_SUCCESS,
    usersList
  }
}
export const GET_USERS_LIST_ERROR = 'GET_USERS_LIST_ERROR';
export const getUsersListError = (error) => {
  return {
    type: GET_USERS_LIST_ERROR,
    error
  }
}

export const deleteCurrentUser = (user) => {
  return (dispatch) => {
    const url = '/api/user/' + user.id;
    return fetch(url, {
        method: 'delete'
    })
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
      })
      .then(() => {
        return dispatch(
          deleteCurrentUserSuccess()
        );
      })
      .catch((error) => {
        return dispatch(
          deleteCurrentUserError(error)
        );
      });
  }
}

export const _SUCCESS = '_SUCCESS';
export const deleteCurrentUserSuccess = () => {
  return {
    type: _SUCCESS,

  }
}
export const _ERROR = '_ERROR';
export const deleteCurrentUserError = (error) => {
  return {
    type: _ERROR,
    error
  }
}

