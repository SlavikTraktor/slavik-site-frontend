import axios from "axios"

import {apiPrefix} from "../etc/config.json"

export default {
    listImagesId() {
        return axios.get(`${apiPrefix}/images`)
    },
    getImage(id) {
        return axios.get(`${apiPrefix}/images/${id}`)
    },
    createImage(data, token) {
        return axios.post(`${apiPrefix}/images/create/${token}`, data)
    },
    setMetaImage(data){
        return axios.post(`${apiPrefix}/images/meta/`, data)
    },
    getMetaImage(data){
        return axios.get(`${apiPrefix}/images/meta/`, data)
    },
    deleteImage(data){
        return axios.post(`${apiPrefix}/images/delete`, data)
    },
    adminLogin(data) {
        return axios.post(`${apiPrefix}/admin/login`, data)
    },
    adminLogout(data) {
        return axios.post(`${apiPrefix}/admin/logout`, data)
    }
}