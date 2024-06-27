function NextButton({ dispatch, onReset, numQuestions, ind }) {
  if (ind < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "next" });
          onReset();
        }}
      >
        Next
      </button>
    );

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "finished" });
      }}
    >
      Finish
    </button>
  );
}

export default NextButton;
