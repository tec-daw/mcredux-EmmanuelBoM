const initialState = {
    questions: [
        {
            question: "Which are the three Deathly Hallows?",
            answer: "The Invisibility Cloth, The Resurrection Stone & The Elder Wand"
        },
        {
            question: "Which spell did Hermione use to make her parents forget her?",
            answer: "Obliviate"
        }
    ]
};

const faqsReducer = ( state = initialState, action) => {
         switch(action.type){
            case 'ADD': {
                let newQuestions = [
                    ...state.questions
                    ]
                newQuestions.push(action.payload)
                 return{
                     ...state,
                     questions: newQuestions
                 }
             }

            case 'REMOVE': {
                let newQuestions = [
                    ...state.questions
                    ]
                let finalArr=[]
                for(let i=0; i< newQuestions.length;i++){
                    if(i!=action.payload){
                        finalArr.push(newQuestions[i])
                    }
                }
                return{
                    ...state,
                    questions: finalArr
                }
             }

             case 'UPDATE': {
                let newQuestions = [
                    ...state.questions
                    ]
                newQuestions[action.payload.index] = action.payload.qa
                 return{
                     ...state,
                     questions: newQuestions
                 }
             }

             case 'REMOVEALL': {
                let newQuestions = []
                return{
                    ...state,
                    questions: newQuestions
                }
             }

            default: {
                return state;
            }
         }
     
};

export default faqsReducer;