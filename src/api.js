import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0418e6f8-3a33-4887-983b-7935ce803114'
    },
    withCredentials: true
})

export const api = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then((response) => {
            return response.data
        })
    },
    getUsersOnChangePage(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    getUserOne(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    userDelete(userId) {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    onUserSubscribe(userId) {
        return instance.post(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    isAuthMe() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => {
                return response
            })
    },
    logout() {
        return instance.delete('auth/login',)
            .then(response => {
                return response.data
            })
    }


}

