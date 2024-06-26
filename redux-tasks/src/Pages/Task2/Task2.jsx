import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../slice/counter2";

function Task2() {
  const count = useSelector((state) => state.couter2);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task2</h1>
      <p>
        Создайте компонент, который будет отображать числовое значение и кнопки
        "+1" и "-1". При нажатии на кнопку увеличивать и уменьшать значения
        счетчика.
      </p>

      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task2;
