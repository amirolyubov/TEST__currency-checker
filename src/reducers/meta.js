import * as types from '../types'

const initialState = {
  requestingRates: false
}

const meta = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RATES__PROCESS:
      return {
        ...state,
        requestingRates: true
      }
    case types.GET_RATES__SUCCESS:
    case types.GET_RATES__FAILURE:
      return {
        ...state,
        requestingRates: false
      }
    default:
      return {
        ...state
      }
  }
}

export default meta
