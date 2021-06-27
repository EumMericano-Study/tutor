import React from "react";
class Todo extends React.Component {
  state = { desc: "", currentId: 1, todoList: [] };

  onAdd = () => {
    const { desc, currentId, todoList } = this.state;
    const todo = { id: currentId, desc };
    this.setState({
      todoList: [...todoList, todo],
      currentId: currentId + 1,
      desc: "",
    });
  };

  onDelete = (event) => {
    const { todoList } = this.state;
    const id = Number(event.target.dataset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    this.setState({ todoList: newTodoList });
  };

  onChangeInput = (event) => {
    const desc = event.target.value;
    this.setState({ desc });
  };

  render() {
    const { desc, todoList } = this.state;
    return (
      <div>
        <h3>할 일 목록</h3>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={this.onDelete}>
                삭제 ❌
              </button>
            </li>
          ))}
        </ul>
        <input type="text" value={desc} onChange={this.onChangeInput} />
        <button onClick={this.onAdd}>추가</button>
      </div>
    );
  }
}

export default Todo;
