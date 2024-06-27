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

        case "active": 
            return {
                ...state,
                status: "active"
            }

        case "next":
            return {
                ...state,
                index: state.index++
            }

        case "finished":
            return {
                ...state,
                status: "finished"
            }
        default:
            throw new Error('Unknown error occured.')
    }
  }, {
    questions:[],
    status: 'Loading', //Loading , error, ready, active, finished
    index: 0
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

  return [setUrl, response, dispatch];
}
