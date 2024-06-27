
import Options from './Options';

function Question({qInfo}) {
    return (
        <div>
            <h4>{qInfo.question}</h4>
            {qInfo.options.map((value, index, array) => {
                return <Options key={index}>{value}</Options>
            })}
        </div>
    )
}

export default Question;
