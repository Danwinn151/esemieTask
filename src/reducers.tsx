const reducer = (state,action) => {
    if(action.type  === "GET_USERS"){
         return{...state, Cart:[]}
    }
    if(action.type === 'GET_SPECIFIC_USERINFO'){
       
    }
    
    return state

} 

export default reducer