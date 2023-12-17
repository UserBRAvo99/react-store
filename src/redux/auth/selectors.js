export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUser = state => state.auth.user

export const selectIsRefresh = state => state.auth.isRefresh

export const selectCurrentItem = state => state.todoList.currentItem
export const selectTodosLoading = state => state.todoList.loading
