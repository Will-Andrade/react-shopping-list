import { FormEvent, useState } from "react";

function App(): JSX.Element {
  const [items, setItems] = useState<string[]>([]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.currentTarget.newItem.value;
    
    if (inputValue.trim().length > 0) {
      setItems([...items, inputValue]);
    }
  };

  const onDeleteHandler = (itemData: string) => {
    setItems(items.filter(item => item !== itemData));
  }

  return (<>
    <h1>Shopping List</h1>

    <section>
      <h2>Items to buy</h2>

      <form onSubmit={onSubmitHandler}>
        <input 
          type="text" 
          name="newItem" 
          placeholder="Add a new item" 
          required 
        />
        <button type="submit">Add</button>
      </form>

      {items.length > 0 &&
        <ul>
          {items.map((item, index) => (
            <li key={`${index}-${item}`}>
              {item}
              <button type="button" onClick={() => onDeleteHandler(item)}>x</button>
            </li>
          ))}
        </ul>
      }
    </section>
  </>);
}

export default App;
