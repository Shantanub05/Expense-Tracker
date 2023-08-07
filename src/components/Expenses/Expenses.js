import ExpenseItem from '../Expenses/ExpenseItem'
import Card from '../UI/Card'
import '../Expenses/Expenses.css'

const Expenses = ({expense}) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
    </Card>
  );
}

export default Expenses
