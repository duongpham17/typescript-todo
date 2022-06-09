import React, {useState} from 'react'

const useStateString = () => {

  const [input, setInput] = useState<string | null>("");
  const [textarea, setTextarea] = useState<string | null>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextarea(e.target.value);

  return (
    <div>
      <input type="text" placeholder="What is your name" name="input" onChange={onChangeInput} />
      <span>Hello, {input}</span>
      <br/>
      <textarea placeholder="What is your name" name="textarea" onChange={onChangeTextarea} />
      <span>Hello, {textarea}</span>
    </div>
  )
}

export default useStateString