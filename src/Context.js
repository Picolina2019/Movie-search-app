import React,{createContext,useReducer} from 'react';

let reducer=(state,action)=>{
  switch (action.type){
      case 'FETCH_SUCCESS':
          return {
              ...state,
              loading:false,
              results:action.payload
          }
          case 'FETCH_ERROR':
              return{
                ...state,
                  loading:false,
                  error:true
              }
              case 'FETCH_ID':
                  return{
                    ...state,
                      results:action.payload,
                      loading:false,
                      query:""
                  }
              case 'SET_QUERY':
                  return{
                      ...state,
                      query:action.payload
                  }
                  case 'SET_SELECTED':
                      return{
                        ...state,
                          selected:action.payload
                      }
                      case 'CLOSE':
                          return{
                              ...state,
                              selected:{}
                          }
              default:
                  return state
  }
  }
  const initialState={
    query:'',
    results:[],
    selected:{},
    loading:true,
    error:false
  }

export const MyContext= createContext(initialState)
export const MyProvider= ({children})=>{
  const [state,dispatch]=useReducer(reducer,initialState)
  

return (
<MyContext.Provider value={{state,dispatch}}>
  {children}
</MyContext.Provider>
);
}