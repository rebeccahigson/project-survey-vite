import { useState } from "react";

/*export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            You clicked the button {count} times!
        </button>
    )
}*/

export const Testing = () => {
    //Primitive data types
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  
  // Arrays
  const [items, setItems] = useState ([])
  
  // object
  const [user, setUser] = useState({name: "", age: 0})
  
  // complex data structures
  //const [users, setUsers] = useState = [{name: "kit", age: 2}, {name: "Rebecca", age: 36}]
  
  // functions
  const [callback, setCallback] = useState(() => console.log("default function"))
  
  
  
  
    return (
      <div className="data">
        <div>
            text: {text}
            <button onClick={() => setText(text + "hello")}>append "hello"</button>
        </div>

        <div>
            {isVisible ? <p>visible</p> : null}
            <button onClick={() => setIsVisible(!isVisible)}>toggle visibility</button>
        </div>

        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setItems([...items, "😱"])}>add item</button>
        </div>

        <div>
          <p>Name:{user.name}</p>
          <p>Age:{user.age}</p>
          <button onClick={() => setUser({...user, name: "rebecca"}) }>set name</button>
          <button onClick={() => setUser({...user, age: "40"}) }>set age</button>
        </div>

        <div>
            <button onClick={callback}>run callback</button>
            <button onClick={() => setCallback(() => console.log("updated function"))}>update callback</button>
        </div>
      </div>
      
    )
  }
