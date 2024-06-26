import Header from './Header';
import DateCounter from './DateCounter';
import Main from './Main';

import { useFetchData } from './Hooks/useFetchData';

function App() {

  const [setUrl, response] = useFetchData("http://localhost:5454/questions")

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question ?</p>
        {response.status.toLowerCase() === 'loading' && <div>LOADING ...........</div>}
        {response.questions.map((value, index, array) => {
          return <div key={index}> {value.question} </div>
        })}
      </Main>
    </div>
  );
}

export default App;
