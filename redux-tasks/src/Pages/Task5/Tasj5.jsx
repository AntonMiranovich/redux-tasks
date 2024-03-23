import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkInp, getPalidrom } from "../../slice/palidrom2";

function Task5() {
  const count = useSelector((state) => state.palidrom2);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task5</h1>
      <p>
        Создайте компонент формы. По клику на кнопку собрать данные из input и
        проверить вводимую строку на палиндром
      </p>

      <button
        onClick={() => {
        dispatch(getPalidrom());
          console.log(count.isPalidrom);
        }}
      >
        check
      </button>

      <input onChange={(e) => dispatch(checkInp(e.target.value))} type="text" />

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task5;
