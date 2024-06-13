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
import { useTodos } from "../store";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  created_at: Date;
};

export function TableSelection() {
  const { todos, createTodo, deleteTodo, completeTodo, editTodo } = useTodos(
    (state) => state
  );
  const [todo, setTodo] = useState("");

  const [edit, setEdit] = useState<Todo>();
  const [selection, setSelection] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "remaining" | "completed">(
    "all"
  );

  function addTodo() {
    createTodo(todo);
  }

  function todoCompleted(checked: boolean, todo: Todo) {
    completeTodo(checked, todo);
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
      // setTodos(todos.map((todo) => ({ ...todo, completed: false })));
    } else {
      setSelection(todos.map((todo) => todo.id.toString()));
    }
  };

  function handleEditValue(value: Todo) {
    setEdit(value);
  }

  function handleEdit() {
    if (edit) editTodo(edit);
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
        <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
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
