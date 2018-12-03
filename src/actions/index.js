import * as types from '../types'

export const getLasestRates =
  (base = 'EUR') =>
    dispatch => {
      dispatch((() => ({ type: types.GET_RATES__PROCESS }))())
      fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .then(response => {
          if (!response.ok) { throw response }
          return response.json()
        })
        .then(data =>
          dispatch((() => ({
            type: types.GET_RATES__SUCCESS
          }))())
        )
        .catch(err =>
          err.text()
             .then(errorMessage =>
               dispatch((() => ({
                 type: types.GET_RATES__FAILURE
               }))())
             ))
    }
