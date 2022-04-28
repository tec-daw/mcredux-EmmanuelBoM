export const addFaq = (faq) =>{
    return{
        type:'ADD',
        payload: faq
    }
}

export const removeFaq = (idx) =>{
    return{
        type:'REMOVE',
        payload: idx
    }
}

export const updateFaq = (faq, idx) =>{
    return{
        type:'UPDATE',
        payload: {
            qa: faq,
            index: idx
        }
    }
}

export const removeAll = () =>{
    return{
        type:'REMOVEALL'
    }
}