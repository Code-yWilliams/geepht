import { CurrentUser } from '@typings/CurrentUser'
import { atom } from 'jotai'

const currentUserAtom = atom<CurrentUser | null>(null)

export default currentUserAtom