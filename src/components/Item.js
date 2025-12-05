export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleUpdateItem(item.id)}
      />
      {item.description} ({item.quantity})
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

//Reference: OpenAI. (2024). ChatGPT (May 12 version) [Large language model]. https://chat.openai.com/