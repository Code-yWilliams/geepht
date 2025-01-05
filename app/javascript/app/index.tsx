import "@mantine/core/styles.css";

import { CurrentUser } from "app/javascript/App/typings/CurrentUser";
import { AppConfig } from "@typings/AppConfig";

import { MantineProvider } from "@mantine/core";

interface AppProps {
  currentUser: CurrentUser;
  config: AppConfig;
}

const App = ({ currentUser, config }: AppProps) => {
  console.log({ currentUser, config });
  return <MantineProvider>Bean Burrito</MantineProvider>;
};

export default App;
