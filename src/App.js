import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
    <><addvertisement>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</addvertisement><div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
        </div>
      </div>
    </div><addvertisement>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</addvertisement></>
  );
}

export default App;
