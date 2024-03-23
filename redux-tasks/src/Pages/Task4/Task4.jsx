import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkInp } from "../../slice/palidrom";

function Task4() {
  const count = useSelector((state) => state.palidrom);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task4</h1>
      <p>
        Создайте компонент формы. По клику на кнопку собрать данные из input и
        проверить вводимую строку на палиндром
      </p>

      <button
        onClick={() =>
          console.log(
            count === count.split("").reverse().join("") ? true : false
          )
        }
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

export default Task4;
