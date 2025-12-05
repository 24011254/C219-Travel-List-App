import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (!confirmed) return;
    setItems([]);
  }

  let sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={sortedItems}
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        handleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

//Reference: OpenAI. (2024). ChatGPT (May 12 version) [Large language model]. https://chat.openai.com/
