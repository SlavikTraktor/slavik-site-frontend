import api from "../api/index"

export function setTokenAction(log, pass) {
    return (dispatch) => {
        api
            .adminLogin({login: log, password: pass})
            .then(res => {
                if (res.data.token !== null) {
                    window
                        .localStorage
                        .setItem('slavik_token', res.data.token)
                    dispatch({type: "SET_TOKEN", payload: res.data.token})
                } else 
                    dispatch({type: "FAIL_LOGIN", payload: res.data.error})
            })
    }
}
export function logOutAction(token) {
    return (dispatch) => {
        api
            .adminLogout({token: token})
            .then(res => {
                if (res.data.error !== false) 
                    dispatch({type: "LOG_OUT_FAILED"})
                else 
                    dispatch({type: "LOG_OUT"})
            })
            .then(() => window.localStorage.removeItem('slavik_token'))
    }
}
