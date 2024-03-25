import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {inp1Val, inp2Val, resultSumInp } from "../../slice/sumInp";

function Task8() {
  const inpVal = useSelector((state)=>state.sumInp);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task8</h1>
      <p>
        Создайте компонент, который отображает сумму значений input. Компонент
        состоит из Input для ввода математического значения и кнопки сложения
        для высчитывания результата внутри строки.
      </p>

<input value={inpVal.inp1} type="text" onChange={(e)=>dispatch(inp1Val(e.target.value))}/>
<input value={inpVal.inp2} type="text" onChange={(e)=>dispatch(inp2Val(e.target.value))}/>
<button onClick={()=>dispatch(resultSumInp())}>Узнать математическое значение</button>
<h1>{inpVal.res}</h1>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task8;
