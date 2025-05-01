import {Todo} from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(
  {
    id,
    content,
    onClickDelete
  }
  : Props) {
  const onClickButton = () => {
    onClickDelete(id);
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