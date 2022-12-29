import './App.css';
import React, { useState } from "react";



function App() {

  const [selects, setSelects] = useState();
  const [inputText1, setText1] = useState();
  const [inputText2, setText2] = useState();
  const [ans, setAns] = useState();

  const handleChange = (event) =>{
    setSelects(event.target.value);
  }

  const handleText1Change = (event) =>{
    setText1(event.target.value);
  }

  const handleText2Change = (event) =>{
    setText2(event.target.value);
    // console.log(data)
  }

  const handleAnsChange = (response) =>{
    // setAns(event.target.value);
    console.log('答案是: '+response);
  }

  const req = {action: 
    (selects==0)
    ? 'sum'
    : (selects==1)
      ? 'sub'
      : (selects==2)
        ? 'mul'
        :'div'
    ,a:parseFloat(inputText1)
    ,b:parseFloat(inputText2)
  }
   

  const callApi = (url) =>{
    fetch(url, {
        method:"POST",
        body: JSON.stringify(req),
        headers: new Headers({
          'Content-Type': 'application/json',
        })
    })
      .then(res=> res.json())
      .then(data => {
        handleAnsChange(data)
      }).catch(e => {
        alert(e);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
       
       <h1>這是一個計算機</h1>
       <p>{"第一輸入框 " + inputText1} </p>
       <p>{"index " + selects +" is selected"} </p>
       <p>{"第二輸入框: " + inputText2} </p>
        <p>
          <input style={{width:"100px", height:"20px",padding:"12"}}
          onChange={handleText1Change}
          />
          <select style={{width:"60px", height:"20px",padding:"12"}} 
           id="dropdownMenu" value={selects} onChange={handleChange}>
            <option value='0'>+</option>
            <option value='1'>-</option>
            <option value='2'>*</option>
            <option value='3'>/</option>
          </select>
          <input style={{width:"100px", height:"20px"}}
          onChange={handleText2Change}
          />
        </p>
        <p>
          <button  style={{width:"100px", height:"50px"}}
         
          onClick={callApi()}
          >Send!</button>
        </p>
        <p>{"答案 " + ans} </p>
      
      </header>
    </div>
  );
}

export default App;
