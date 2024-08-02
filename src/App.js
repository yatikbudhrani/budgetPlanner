import Budget from "./component/Budget";
import BudgetContext from "./context/BudgetContext";

function App() {
  return (
    <div className="App">
      <BudgetContext>
        <Budget />
      </BudgetContext>
    </div>
  );
}

export default App;
