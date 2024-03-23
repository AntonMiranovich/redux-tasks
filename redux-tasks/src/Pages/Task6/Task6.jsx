import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { show, hide } from "../../slice/witchText";

function Task6() {
  const count = useSelector((state) => state.witchText);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task6</h1>
      <p>
        Создайте компонент, который предоставляет две кнопки: "Показать" и
        "Скрыть". При нажатии на "Показать" отображается текст, а при нажатии на
        "Скрыть" текст скрывается
      </p>

      <button onClick={() => dispatch(show())}>show</button>
      <button onClick={() => dispatch(hide())}>hide</button>
      <h1>{count ? "TEXT" : ""}</h1>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task6;
