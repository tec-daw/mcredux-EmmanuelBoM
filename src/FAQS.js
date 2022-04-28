import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeAll, addFaq } from './actions/faqs';
import QuestionAnswer from './QuestionAnswer';

function FAQS() {

  const [inputVisibility, setInputVisibility] = useState(false)
  const [faq, setFaq] = useState("")

  const questionBank = useSelector((state)=>{
    return state.faqs.questions
  })

  function showInput(){
    setInputVisibility(true)
  }

  function hideInput(){
    setInputVisibility(false)
  }

  function handleChange(event){
    let newFaq = {
      ...faq,
      [event.target.name]: event.target.value,
  };

    setFaq(newFaq)
  }

  const dispatcher = useDispatch();
  return (
    <>

      {questionBank.map((result, i)=>{
        return(
          <ul>
            <QuestionAnswer faq={result} idx={i}></QuestionAnswer>
          </ul>
        )
        
      })}
      
      <h3>General Actions</h3>
      <button onClick={showInput}>Add question</button>
      <button onClick={()=>dispatcher(removeAll())}>Remove all</button>
      
      

      {inputVisibility ? <div>
        <input type="text" name="question" id="" placeholder='Question' onChange={handleChange}/>
        <input type="text" name="answer" id="" placeholder='Answer' onChange={handleChange}/>
        <button type="submit" onClick={()=>dispatcher(addFaq(faq))}>Add</button>
        <button type="submit" onClick={hideInput}>Cancel</button>
      </div> : null}

    </>
  )
}

export default FAQS