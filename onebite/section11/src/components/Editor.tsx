import {ReactElement, useContext, useState} from "react";
import {TodoDispatchContext, useTodoDispatch} from "../App";

interface Props {
  // children: ReactElement;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChangeInput}
      />
      <button
        type="button"
        onClick={onClickButton}
      >추가</button>
    </div>
  )
}