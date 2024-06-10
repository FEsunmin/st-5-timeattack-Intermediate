import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract } from "./redux/slices/calculatorSlice";
import "./App.css";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [amount, setAmount] = useState(0);
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handelAdd = () => {
    dispatch(add(Number(amount)));
  };

  const handleSubtract = () => {
    dispatch(subtract(Number(amount)));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />{" "}
        만큼을
        <button onClick={handelAdd}>더할게요</button>
        <button onClick={handleSubtract}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
