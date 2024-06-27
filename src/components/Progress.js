function Progress({points, numQuestions, ind, sumOfPoints}) {
    return (
        <header className="progress">

            <progress max={numQuestions} value={ind + 1} />
            <p>
                Question <strong> {ind + 1} </strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}</strong> / {sumOfPoints}
            </p>
        </header>
    )
}

export default Progress;
