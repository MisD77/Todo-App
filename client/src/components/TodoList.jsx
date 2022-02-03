
function TodoList({ todo }) {
if (!todo || todo.length === 0)
{
    return <p>No Todo Item</p>
}

  return <div>List</div>;
}

export default TodoList;
