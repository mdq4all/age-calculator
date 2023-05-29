import { useState } from 'react';
import style from './app.module.css';
import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [dataComplete, setDataComplete] = useState(false);
  const[data, setData] = useState({
    day:"",
    month:"",
    year: ""
  });
  
   return (
    <div className={style.container}>
      <Form 
        setData={setData} 
        dataComplete={dataComplete} 
        setDataComplete={setDataComplete} />
      <Result data={data} dataComplete={dataComplete} />
    </div>
  );
}

export default App;
