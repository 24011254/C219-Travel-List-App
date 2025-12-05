import Item from "./Item";

export default function PackingList({
  items,
  sortBy,
  setSortBy,
  handleDeleteItem,
  handleUpdateItem,
  handleClearItems,
}) {
  return (
    <div className="list">
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItems}>Clear list</button>
      </div>

      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

//Reference: OpenAI. (2024). ChatGPT (May 12 version) [Large language model]. https://chat.openai.com/