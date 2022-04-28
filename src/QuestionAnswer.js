import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { removeFaq, updateFaq } from './actions/faqs';


function QuestionAnswer(props) {

    useEffect(()=>{
      setFaq({
        question: props.faq.question,
        answer: props.faq.answer
      })
    },[])
    const dispatcher = useDispatch();
    const [inputVisibility, setInputVisibility] = useState(false)
    const [faq, setFaq] = useState({})


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

    
    
  return (
    <div>
        <li>
            <h3>{props.faq.question}</h3>
        </li>
        <p>{props.faq.answer}</p>
        <button onClick={()=>dispatcher(removeFaq(props.idx))}>Remove question</button>
        <button onClick={showInput}>Update Question</button>
        {inputVisibility ? <div>
          <input type="text" name="question" id="" placeholder='Question' defaultValue={props.faq.question} onChange={handleChange}/>
          <input type="text" name="answer" id="" placeholder='Answer' defaultValue={props.faq.answer} onChange={handleChange}/>
          <button type="submit" onClick={()=>dispatcher(updateFaq(faq,props.idx))}>Update</button>
          <button type="submit" onClick={hideInput}>Cancel</button>
      </div> : null}
    </div>
  )
}

export default QuestionAnswer