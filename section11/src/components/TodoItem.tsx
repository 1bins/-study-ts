import {Todo} from "../types";
import {useTodoDispatch} from "../App";

interface Props extends Todo {}

export default function TodoItem(
  {
    id,
    content,
  }
  : Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(id);
  }

  return (
    <div>
      {id}번: {content}
      <button
        type="button"
        onClick={onClickButton}
      >삭제</button>
    </div>
  )
}