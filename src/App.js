import Header from "./Header";
import DateCounter from "./DateCounter";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";

import { useFetchData } from "./Hooks/useFetchData";
import StartScreen from "./StartScreen";
import Question from "./Question";

function App() {
  const [setUrl, response, dispatch] = useFetchData(
    "http://localhost:5454/questions"
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
        <p>1/15</p>
        <p>Question ?</p>
        {response.status.toLowerCase() === "loading" && <Loader />}
        {response.status.toLowerCase() === "error" && <Error />}
        {response.status.toLowerCase() === "ready" && (
          <StartScreen>
            <h3>
              {response.questions.length} questions to test your knowledge
            </h3>{" "}
            <button className="btn btn-ui" onClick={activeHandler}>
              Let's start
            </button>
          </StartScreen>
        )}
        {response.status.toLowerCase() === 'active' && <Question />}
      </Main>
    </div>
  );
}

export default App;
