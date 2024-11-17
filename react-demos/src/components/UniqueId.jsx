import { useId } from "react"

const UniqueId = () => {
const id = useId()
const id2 = useId()

  return (
    <div>

    <label htmlFor={id}>Do you like React?</label>
    <input type="checkbox" id={id}/>

    <br />
    <label htmlFor={id2}>Do you hate React?</label>
    <input type="checkbox" id={id2}/>


    </div>
  )
}

export default UniqueId