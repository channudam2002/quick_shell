// export default {
//     SET_USER_INFO(userInfo){
//         this._userInfo = userInfo
//     },
//     GET_USER_INFO(){
//         return this._userInfo
//     }
// }

const isAuthenticated = () => {
    let isAuthenticated = false
    axios.get(`https://webapi.shellify.systems/api/auth/user-profile`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        isAuthenticated = true
    }).catch(err=>{
        if(err.message == 'Request failed with status code 401'){
            isAuthenticated = false
        }
    })
    return isAuthenticated
}

export {isAuthenticated};