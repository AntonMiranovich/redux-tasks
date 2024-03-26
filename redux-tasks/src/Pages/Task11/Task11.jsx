import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLeng } from "../../slice/lengvich";

function Task11() {
  const lengvich = useSelector((state) => state.lengvich);
  const dispatch = useDispatch();

  const res = {
    Rus: {
         header: 'Типы данных',
         description: 'описаниеф типов данных'
    },
    En: {
        header: 'Data Types',
        description: 'description Data Types'
    }
 }

  return (
    <>
      <h1>Task11</h1>
      <p>
        Создайте компонент, который позволяет пользователю выбирать язык
        интерфейса. При выборе языка текст на странице должен изменяться
        соответствующим образом.
      </p>

      <h1>{res[lengvich].header}</h1>
      <p>{res[lengvich].description}</p>

      <button onClick={()=>dispatch(getLeng('Rus'))}>Русский</button>
      <button onClick={()=>dispatch(getLeng('En'))}>English</button>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task11;
