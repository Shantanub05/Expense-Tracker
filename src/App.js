
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
const expense = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
]

  return (
    <div>
    <NewExpense />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
