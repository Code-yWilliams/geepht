import { RouterProvider, createRouter } from '@tanstack/react-router'
import { MantineProvider } from "@mantine/core";
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import "@mantine/core/styles.css";

import currentUserAtom from '@atoms/currentUserAtom'
import configAtom from '@atoms/configAtom';
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
  const [_, setCurrentUserAtom] = useAtom(currentUserAtom)
  useEffect(() => setCurrentUserAtom(currentUser), [currentUser])

  const [__, setConfigAtom] = useAtom(configAtom)
  useEffect(() => setConfigAtom(config), [config])

  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
};

export default App;


