import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(cash + 51);

  console.log(customers[0].name + "fq")

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name: name, 
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => addCash(5)}>Пополнить счет</button>
        <button onClick={() => getCash(5)}>Снять со счета</button>
        <div style={{ marginRight: "25px" }}>{cash}</div>
      </div>
      <div>
        <button onClick={() => addCustomer("Джон")}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>

      {customers.length > 0 ? (
        <div>
        {customers.map(customer =>
          <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
        )}
        </div>
      ) : (
        <div>Покупателей нет</div>
      )}
      </div>
    </div>
  );
}

export default App;
