import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, inpVal, delVal } from "../../slice/ulTasks";

function Task12() {
  const list = useSelector((state) => state.ulTasks);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Task12</h1>
      <p>
        Реализуйте компонент "Список задач", который позволяет пользователю
        добавлять, удалять и отмечать задачи как выполненные.
      </p>

      <input type="text" onChange={(e) => dispatch(inpVal(e.target.value))} />
      <button onClick={() => dispatch(addTask())}>Add Task</button>

      <div>
        {list.arr.map((el) => (
          <div>
            <p>{el}</p>
            <button id={el} onClick={(e) => dispatch(delVal(e.target.id))}>Delete</button>
          </div>
        ))}
      </div>

      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Task12;
