import React from "react";

function QuestionItem({ question, onDeleteQn, onUpdateQn }) {
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteQn(){
    fetch(`http://localhost:4000/questions/${encodeURIComponent(id)}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(question)
    })
      .then(res=>res.json())
      .then(()=>onDeleteQn(question))
  }

  function handleUpdateQn(e){
    const {value} = e.target
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({correctIndex:value})
    })
      .then(res=>res.json())
      .then(data=>onUpdateQn(data))
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onClick={handleUpdateQn} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteQn} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
