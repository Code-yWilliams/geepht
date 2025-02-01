import { RouterProvider, createRouter } from '@tanstack/react-router'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { CurrentUser } from "app/javascript/app/typings/CurrentUser";
import { AppConfig } from "./typings/AppConfig";


import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, basepath: "/app" })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


interface AppProps {
  currentUser: CurrentUser;
  config: AppConfig;
}

const App = ({ currentUser, config }: AppProps) => {
  // TODO: create a context to access currentUser and config
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
};

export default App;


