import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../store/store'

export const myAppSelector: TypedUseSelectorHook<RootStore> = useSelector
export const myAppDispatch = () => useDispatch<AppDispatch>()
