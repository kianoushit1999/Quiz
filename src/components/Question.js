import { useEffect, useState } from "react";
import Options from "./Options";
import NextButton from "./NextButton";

function Question({ qInfo, dispatch, onSetPoint, numQuestions, ind }) {
  const ans = qInfo.correctOption;
  const [selectedAns, setSelectedAns] = useState(null);

  function selectedAnsHandler(id) {
    setSelectedAns(id);
  }

  function resetSelectedAnsHandler() {
    setSelectedAns((selectedAns) => null);
  }

  useEffect(() => {
    if (selectedAns === ans) onSetPoint((points) => points + qInfo.points);
  }, [ans, onSetPoint, selectedAns, qInfo]);

  return (
    <div>
      <h4>{qInfo.question}</h4>
      {qInfo.options.map((value, index, array) => {
        return (
          <Options
            key={index}
            ind={index}
            correctAnswerHandler={selectedAnsHandler}
            selectedAns={selectedAns}
            ans={ans}
          >
            {value}
          </Options>
        );
      })}

      {selectedAns !== null && (
        <>
          <NextButton
            dispatch={dispatch}
            onReset={resetSelectedAnsHandler}
            numQuestions={numQuestions}
            ind={ind}
          ></NextButton>
          <button className="btn" onClick={()=>{
            dispatch({
                type:'restart'
            })
            onSetPoint(points => 0)
          }}>Restart</button>
        </>
      )}
    </div>
  );
}

export default Question;
