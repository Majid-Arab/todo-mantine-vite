import { useState } from "react";
import {
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Text,
  rem,
  Button,
  Radio,
} from "@mantine/core";
import { TodoInput } from "./TodoInput";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  created_at: Date;
};

const initialData: Todo[] = [
  {
    id: 1,
    todo: "Robert Wolfkisser",
    completed: false,
    created_at: new Date(),
  },
  {
    id: 2,
    todo: "Jill Jailbreaker",
    completed: false,
    created_at: new Date(),
  },
  {
    id: 3,
    todo: "Henry Silkeater",
    completed: false,
    created_at: new Date(),
  },
];

export function TableSelection() {
  const [todos, setTodos] = useState<Todo[]>(initialData);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState<Todo>();
  const [selection, setSelection] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "remaining" | "completed">(
    "all"
  );

  function addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      todo,
      completed: false,
      created_at: new Date(),
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  function todoCompleted(checked: boolean, todo: Todo) {
    const newTodos = todos.map((todoF) =>
      todoF.id === todo.id ? { ...todoF, completed: checked } : todoF
    );
    setTodos(newTodos);
  }

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((todo) => todo !== id)
        : [...current, id]
    );

  const toggleAll = () => {
    if (selection.length === todos.length) {
      setSelection([]);
      setTodos(todos.map((todo) => ({ ...todo, completed: false })));
    } else {
      setSelection(todos.map((todo) => todo.id.toString()));
    }
  };

  function handleEditValue(value: Todo) {
    setEdit(value);
  }

  function handleEdit() {
    const task = todos.map((todoE) => {
      if (edit?.id === todoE.id) {
        todoE.todo = edit.todo;
      }
      return todoE;
    });
    setTodos(task);
  }

  function handleDelete(id: number) {
    const deleteTodo = todos.filter((item) => item.id !== id);
    setTodos(deleteTodo);
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "remaining") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const rows = filteredTodos.map((todo) => (
    <Table.Tr key={todo.id}>
      <Table.Td>
        <Checkbox
          id={todo.id.toString()}
          type="checkbox"
          checked={selection.includes(todo.id.toString())}
          onChange={(e) => {
            todoCompleted(e.target.checked, todo);
            toggleRow(todo.id.toString());
          }}
        />
      </Table.Td>
      <Table.Td>
        <Group gap="sm">
          <Text size="sm" fw={500}>
            {todo.todo}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>{todo.created_at.toLocaleString()}</Table.Td>
      <Table.Td>
        <Button variant="filled" onClick={() => handleEditValue(todo)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDelete(todo.id)}>
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group>
        <TodoInput
          value={todo}
          onClick={addTodo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <TodoInput
          value={edit?.todo}
          onClick={handleEdit}
          onChange={(e) => setEdit({ ...edit!, todo: e.target.value })}
        />

        <Radio
          label="All"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        <Radio
          label="Remaining"
          checked={filter === "remaining"}
          onChange={() => setFilter("remaining")}
        />
        <Radio
          label="Completed"
          checked={filter === "completed"}
          onChange={() => setFilter("completed")}
        />
      </Group>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === todos.length}
                indeterminate={
                  selection.length > 0 && selection.length !== todos.length
                }
              />
            </Table.Th>
            <Table.Th>Task</Table.Th>
            <Table.Th>Date/Time</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
