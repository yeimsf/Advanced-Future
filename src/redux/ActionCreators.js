import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchAppartments = () => (dispatch) => {
    dispatch(appartmentsLoading(true));

    return fetch(baseUrl + 'appartments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(appartments => dispatch(addAppartments(appartments)))
        .catch(error => dispatch(appartmentsFailed(error.message)));
}
export const postAppartment = (appartment,methodType) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

      return fetch(baseUrl + 'appartments/', {
          method: "POST",
          body: JSON.stringify({appartment}),
          headers: {
            "Content-Type": "application/json",
            'Authorization': bearer
          },
          credentials: "same-origin"
      })
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
      })
}
export const putAppartment = (appartmentId, appartment) => (dispatch) => {
  const bearer = 'Bearer ' + localStorage.getItem('token');
  return fetch(baseUrl + 'appartments/' + appartmentId ,{
    method: "PUT",
    body: JSON.stringify({appartment}),
    headers: {
      "Content-Type": "application/json",
      'Authorization': bearer
    },
    credentials: "same-origin"
  })
  .then(response => {
    if(response.ok){
      return response;
    }else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },error => {
    throw error;
  })
}
export const delAppartment = (appartmentId) => (dispatch) => {
  const bearer = 'Bearer' + localStorage.getItem('token');
  return fetch(baseUrl + 'appartments/' + appartmentId ,{
    method: "DELETE",
    body: JSON.stringify({ "_id": appartmentId }),
    headers: {
      "Content-Type": "application/json",
      'Authorization': bearer
    },
    credentials: "same-origin"
  })
  .then(response => {
    if(response.ok){
      return response;
    }else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },error => {
    throw error;
  })
}
export const appartmentsLoading = () => ({
    type: ActionTypes.APPARTMENTS_LOADING
});

export const appartmentsFailed = (errmess) => ({
    type: ActionTypes.APPARTMENTS_FAILED,
    payload: errmess
});

export const addAppartments = (appartments) => ({
    type: ActionTypes.ADD_APPARTMENT,
    payload: appartments
});
export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}
