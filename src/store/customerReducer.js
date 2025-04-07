const defaultState = {
  customers: [{name: "Карл"}]
}

const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"


export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_MANY_CUSTOMERS:
        return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(c => c.id !== action.payload)}
  
  
      default:
        return state
    }
  }


export const addManyCustomersAction = (payload) => {
  return {
    type: ADD_MANY_CUSTOMERS,
    payload
  }
}

export const addCustomerAction = (payload) => {
  return {
    type: ADD_CUSTOMER,
    payload
  }
}


export const removeCustomerAction = (payload) => {
  return {
    type: REMOVE_CUSTOMER,
    payload
  }
}
  