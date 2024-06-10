import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { TableSelection } from "../components/TableSelection";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <TableSelection />
    </MantineProvider>
  );
}
