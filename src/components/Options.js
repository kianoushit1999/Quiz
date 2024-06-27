function Options({ children, ind, correctAnswerHandler, selectedAns, ans }) {
  return (
    <div className="options">
      <button
        className={`btn btn-option ${ind === selectedAns && "answer"} ${
          selectedAns !== null ? (ind === ans ? "correct" : "wrong") : ""
        }`}
        onClick={() => correctAnswerHandler(ind)}
        disabled={selectedAns !== null}
      >
        {children}
      </button>
    </div>
  );
}

export default Options;
