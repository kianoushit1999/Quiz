import { useEffect, useReducer, useState } from "react";

export function useFetchData(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [response, dispatch] = useReducer((state, action)=>{
    switch (action.type) {
        case "fetched":
            return {
                ...state,
                questions: action.payload,
                status: 'ready'
            }

        case "failed":
            return {
                questions: [],
                status: 'error'
            }
        default:
            throw new Error('Unknown error occured.')
    }
  }, {
    questions:[],
    status: 'Loading', //Loading , error, ready, active, finished
  })

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
        type: 'fetched',
        payload: data
    }))
    .catch((error) => {
        dispatch({
            type: 'failed',
        })
    })
  }, [url]);

  return [setUrl, response];
}
