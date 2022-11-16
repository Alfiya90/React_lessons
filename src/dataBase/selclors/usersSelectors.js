export const getAllUsers = (state) => {
    return state.usersPage.users};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export  const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getLoading = (state) => {
    return state.usersPage.isLoading;
}
export const getDisabling = (state) => {
    return state.usersPage.isDisabling
}