import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "b18ec17b-1437-4ed0-a09c-9d0b79b953c9" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const followAPI = {
    unFollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
};
