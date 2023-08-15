import { rootReducer, store } from "./store";

export type RootState = ReturnType<typeof rootReducer>

export type appDispatch = typeof store.dispatch