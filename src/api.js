import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '0418e6f8-3a33-4887-983b-7935ce803114'
    },
    withCredentials:true
})

export const api = {
    getUsers(currentPage, pageSize){return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then((response) => {return response.data})
    },
    getUsersOnChangePage(pageNumber, pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {return response.data})
    },
    getUserOne(userId){
        return instance.get(`profile/${userId}`)
            .then((response) => {return response.data})
    },
    userDelete(userId){return instance.delete(`follow/${userId}`)
        .then((response) => {return response.data})
        },
    onUserSuscribe(userId) {
        return instance.post( `follow/${userId}`)
            .then((response) => {return response.data})
    },
    isAuthMe(){
        return instance.get(`auth/me`, {withCredentials: true})
            .then(response => {return response.data})
    }

}
