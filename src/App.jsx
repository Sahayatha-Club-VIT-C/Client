import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
function App() {
  const [item,setItems]=useState(Data);
  const departments = [...new Set(Data.map((val) => val.Club_Department))];
  const filterItems=(cat)=>{
    const newItems=Data.filter((newval)=>newval.Club_Department==cat)
    setItems(newItems)
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='text-center col-12 fw-bold mt-3 mb-5'>Members</h1>
        <Buttons departments={departments}
          filterItems={filterItems}
          setItems={setItems}
        />
        <Card item={item} />
      </div>

    </div>
  )
}

export default App
