import currentUserAtom from "@atoms/currentUserAtom"
import { CurrentUser } from "@typings/CurrentUser"
import { useAtom } from "jotai"

const useCurrentUser = (): CurrentUser => {
  const [currentUser] = useAtom(currentUserAtom)
  if (!currentUser) throw new Error("No current user has been set")
  return currentUser
}

export default useCurrentUser