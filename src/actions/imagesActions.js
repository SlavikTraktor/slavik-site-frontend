import api from "../api/index"

export function addImageAction(file, header, desc, token) {
  return dispatch => {
    const data = new FormData()
    data.append('file', file)
    api
      .createImage(data, token)
      .then(res => {
        dispatch({type: "ADD_IMAGE", payload: res.data})
        return res.data
      })
      .then(name => api.setMetaImage({image: name, desc: desc, header: header, token: token}))
      .then(()=>dispatch({type: "SET_META"}))
  }
}

export function getImagesListAction() {
  return (dispatch) => {
    api
      .listImagesId()
      .then(ids => {
        return ids
          .data
          .map(el => (el.title))
      })
      .then(res => dispatch({type: "GET_IMAGES_IDS_SUCCESS", payload: res}))
  }
}

export function clearImageListAction() {
  return {type: "CLEAR_IMAGES_LIST"}
}

export function deleteImageAction(img, token) {
  return (dispatch) => {
    api
      .deleteImage({image: img, token: token})
      .then(res => {
        if (res.data !== 'OK') 
          throw new Error('Nope')
      })
      .then(() => dispatch({type: "DELETE_IMAGE", payload: img}))
      .catch(() => dispatch({type: "FAIL_DELETE_IMAGE"}))
  }
}

export function setMetaImageAction(img, header, desc, token) {
  return (dispatch) => {
    api
      .setMetaImage({image: img, desc: desc, header: header, token: token})
      .then(dispatch({type: "SET_META"}))
  }
}

export function getMetaImageAction(img){
  return (dispatch) => {
    api.getMetaImage(img)
      .then(res => ({header: res.data.header, desc: res.data.desc}))
      .then(data => dispatch({type: "GET_META_IMAGE", payload: data}))
  }
}

export function clearDescAction(){
  return dispatch => dispatch({type: "CLEAR_META_IMAGE"})
}