import { TypedUseSelectorHook, useSelector } from "react-redux"
import { AppStore } from ".."

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector