import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQn, onUpdateQn}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions?.map(qn=>{
        return(
          <QuestionItem onUpdateQn={onUpdateQn} onDeleteQn={onDeleteQn} key={qn.id} question={qn}/>
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
