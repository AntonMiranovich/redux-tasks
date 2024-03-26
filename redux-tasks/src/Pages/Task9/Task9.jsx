import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordValid } from "../../slice/validPass";

function Task9() {
  const password = useSelector((state) => state.validPass);
  const dispatch = useDispatch();

  function checkPassword() {
    try {
      if (!/[A-Z]+/gm.test(password))
        throw new Error("В пороле отсутствуют большие буквы");
      if (!/[a-z]+/gm.test(password))
        throw new Error("В пороле отсутствуют маленькие буквы");
      if (!/[0-9]+/gm.test(password))
        throw new Error("В пороле отсутствуют цифры");
      if (password.length < 8)
        throw new Error("В пороле отсутствуют большие буквы");
      return "Пороль соответствует";
    } catch (error) {
      return error.message;
    }
  }

  return (
    <>
      <h1>Task9</h1>
      <p>
        Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
        ввести пароль, который соответствует определенным требованиям (например,
        содержание букв, цифр и специальных символов).
      </p>

      <input
        type="text"
        onChange={(e) => dispatch(passwordValid(e.target.value))}
      />
      <button onClick={() => console.log(checkPassword())}>Check pass</button>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task9;
