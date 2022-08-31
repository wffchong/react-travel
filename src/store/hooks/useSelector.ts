import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { RootStateType } from '../index'

export const useSelector: TypedUseSelectorHook<RootStateType> = useReduxSelector
