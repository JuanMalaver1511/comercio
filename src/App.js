import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
      <GlobalProvider>
        <div className="min-h-screen flex justify-center items-center">
            <div className="min-h-screen mx-auto max-w-6xl">
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-neutral-800 p-10 rounded-md w-full">
                  <Header />
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <IncomeExpenses />
                      <Balance />
                      <TransactionForm />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <ExpenseChart />
                      <TransactionList />
                    </div>
                  </div>
                </div>
              </div>
            </div>        
        </div>
      </GlobalProvider>
  );
}

export default App;