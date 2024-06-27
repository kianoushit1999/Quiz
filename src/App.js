import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";

import { useFetchData } from "./Hooks/useFetchData";
import StartScreen from "./StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";

function App() {
  const [setUrl, response, dispatch] = useFetchData(
    "http://localhost:5454/questions"
  );
  const [points, setPoints] = useState(0);

  const numQuestions = response.questions.length;
  const sumOfPoints = response.questions.reduce(
    (previousValue, currentValue) => previousValue + currentValue.points,
    0
  );

  const activeHandler = () => {
    dispatch({
      type: "active",
    });
  };

  return (
    <div className="app">
      <Header />
      <Main>
        {response.status.toLowerCase() === "loading" && <Loader />}
        {response.status.toLowerCase() === "error" && <Error />}
        {response.status.toLowerCase() === "ready" && (
          <StartScreen>
            <h3>{numQuestions} questions to test your knowledge</h3>{" "}
            <button className="btn btn-ui" onClick={activeHandler}>
              Let's start
            </button>
          </StartScreen>
        )}
        {response.status.toLowerCase() === "active" && (
          <>
            <Progress
              points={points}
              numQuestions={numQuestions}
              ind={response.index}
              sumOfPoints={sumOfPoints}
            />
            <Question
              dispatch={dispatch}
              qInfo={response.questions[response.index]}
              onSetPoint={setPoints}
              numQuestions={numQuestions}
              ind={response.index}
            />
          </>
        )}

        {response.status.toLowerCase() === "finished" && <p>Finished ...</p>}
      </Main>
    </div>
  );
}

export default App;
