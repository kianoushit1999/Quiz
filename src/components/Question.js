
import { useState } from 'react';
import Options from './Options';

function Question({qInfo}) {

    const ans = qInfo.correctOption
    const [selectedAns, setSelectedAns] = useState(null);

    function selectedAnsHandler(id) {
        setSelectedAns(id)
    }

    return (
        <div>
            <h4>{qInfo.question}</h4>
            {qInfo.options.map((value, index, array) => {
                return <Options key={index} ind={index} correctAnswerHandler={selectedAnsHandler} selectedAns={selectedAns} ans={ans}>{value}</Options>
            })}
        </div>
    )
}

export default Question;
