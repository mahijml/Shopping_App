
export const addItem = (product) =>{
    return {
        type : "ADDITEM",
        payload : product,
    }
}

export const delItem = (product) =>{
    return {
        type : "DELITEM",
        payload : product,
    }
}
export const delCart = (product) =>{
    return {
        type : "DELCART",
        payload : product,
    }
}
export const clearCart = () =>{
    return {
        type : "CLEARCART"
    }
}