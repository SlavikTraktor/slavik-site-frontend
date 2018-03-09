const initialState = {
    list: [],
    header: "",
    desc: ""
}

export default function images(state = initialState, action) {
    switch (action.type) {
        case "ADD_IMAGE":
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case "GET_IMAGES_IDS_SUCCESS":
            return {
                ...state,
                list: action.payload
            }
        case "FAIL_DELETE_IMAGE":
            return state
        case "DELETE_IMAGE":
            state
                .list
                .splice(state.list.indexOf(action.payload), 1)
            return {
                    ...state,
                    list: [...state.list]
                }
        case "CLEAR_IMAGES_LIST":
            return {
                ...state,
                list: [],
                header: "",
                desc: ""
            }
        default:
            return state
    }
}