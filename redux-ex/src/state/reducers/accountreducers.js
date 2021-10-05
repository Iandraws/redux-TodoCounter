const reducer = (state=0,action)=>{
    switch (action.type) {
        case "incresse":
            return state+action.payload
            case "decresse":
                return state-action.payload
        default:
            return state
    }
}

export default reducer ;