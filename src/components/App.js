import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
      .then(res=>res.json())
      .then(data=>setQuestions(data))
  }, [])
  // console.log(question)
  function handleAddQuestion(qnObj){
    setQuestions(question=>([...question, qnObj]))
  }

  function handleDeleteQn(qnQbj){
    const filterdQn=questions.filter(qn=>qn.id!==qnQbj.id)
    setQuestions(filterdQn)
  }

  function handleUpdateQn(qnObj){
    const updatedQn=questions.map(qn=>{
      if(qn.id===qnObj.id){
        return qnObj
      }else{
        return qn
      }
    })
    setQuestions(updatedQn)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList onUpdateQn={handleUpdateQn} onDeleteQn={handleDeleteQn} questions={questions} />}
    </main>
  );
}

export default App;
