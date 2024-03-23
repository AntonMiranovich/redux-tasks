import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fillingTheLine } from "../../slice/inpVal";

function Task3() {
  const count = useSelector((state) => state.inpVal);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Task3</h1>
      <p>
        Создайте компонент текстового поля, который позволяет пользователю
        вводить текст и отображает его в реальном времени.
      </p>

      <h1>{count}</h1>
      <input
        type="text"
        onChange={(e) => dispatch(fillingTheLine(e.target.value))}
      />

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task3;
