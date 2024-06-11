import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
// import { TableSelection } from "../components/TableSelection";
import { theme } from "./theme";
import Expense from "./components/expensetracker/Expense";
// import { TableSelection } from "./components/TableSelection";
// import Poll from "./components/Polls/Poll";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {/* <TableSelection /> */}
      {/* <Poll />*/}
      <Expense />
    </MantineProvider>
  );
}
