export default {
    SET_USER_INFO(userInfo){
        this._userInfo = userInfo
    },
    GET_USER_INFO(){
        return this._userInfo
    }
}