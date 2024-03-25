import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailValid } from "../../slice/validationEmail";

function Task7() {
  const resInp = useSelector((state) => state.validationEmail);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task7</h1>
      <p>
        Создайте компонент, который отображает проверку почты (true, false) на
        валидность регулярному выражению. Валидатор состоит из Input для ввода
        почты и кнопки для запуска валидатора.
      </p>

      <input
        type="text"
        onChange={(e) => dispatch(emailValid(e.target.value))}
      />
      <button
        onClick={() =>
          console.log(/^[A-Za-z0-9]+\@+[a-z]+\.[a-z]{2,5}/gm.test(resInp))
        }
      >
        Check Input
      </button>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task7;
