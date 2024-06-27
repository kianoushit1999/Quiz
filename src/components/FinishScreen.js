function FinishScreen({ points, sumOfPoints }) {
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {sumOfPoints  }
    </p>
  );
}

export default FinishScreen;
