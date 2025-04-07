import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App" >
      <div style={{marginRight: "25px"}} >{cash}</div>
        <div>
          <button onClick={ () => addCash(5)}>Пополнитьsdg счет</button>
          <button onClick={ () => getCash(5)}>Снять со счета</button>
        </div>
        {customers.length > 0 
        ?
        <div>
          Пользователи есть
        </div> 
        :
        <div> 
          Пользователей нет
        </div>}
    </div>
  );
}

export default App;
