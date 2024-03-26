import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { plusSize, minusSize } from "../../slice/plusMinusSize";

function Task10() {
  const countSize = useSelector((state) => state.plusMinusSize);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task10</h1>
      <p>
        Создайте компонент, который позволяет пользователю управлять размером
        текста на странице с помощью кнопок "увеличить" и "уменьшить".
      </p>

      <button onClick={() => dispatch(plusSize())}>Увеличить</button>
      <button onClick={() => dispatch(minusSize())}>Уменьшить</button>
      <h1 style={{ fontSize: countSize }}>Random text</h1>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task10;
