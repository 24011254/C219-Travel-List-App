export default function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage =
    totalItems === 0 ? 0 : Math.round((totalPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 && totalItems > 0
          ? "You got everything!"
          : `You have ${totalItems} items in the list. You already packed ${totalPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}

//Reference: OpenAI. (2024). ChatGPT (May 12 version) [Large language model]. https://chat.openai.com/