import "@mantine/core/styles.css";

import { CurrentUser } from "app/javascript/app/typings/CurrentUser";
import { AppConfig } from "app/javascript/app/typings/AppConfig";

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
