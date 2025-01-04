import { CurrentUser } from "@typings/CurrentUser";
import { AppConfig } from "@typings/AppConfig";

interface AppProps {
  currentUser: CurrentUser;
  config: AppConfig;
}

const App = ({ currentUser, config }: AppProps) => {
  console.log({ currentUser, config });
  return <>Bean Burrito</>;
};

export default App;
