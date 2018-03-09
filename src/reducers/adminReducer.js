const initialState = {
    token: null,
    error: null
}
initialState.token = window
    .localStorage
    .getItem('slavik_token')

export default function admin(state = initialState, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload,
                error: null
            }
        case "FAIL_LOGIN":
            return{
                ...state,
                error: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                token: null
            }
        case "LOG_OUT_FAILED":
            return state
        default:
            return state
    }
}