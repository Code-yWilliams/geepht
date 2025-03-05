import { AppConfig } from '@typings/AppConfig'
import { atom } from 'jotai'

const configAtom = atom<AppConfig | null>(null)

export default configAtom