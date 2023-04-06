import { StoreType } from "@/store"
import { actionSystemSlice } from "@/store/features/system.slice"

export class ServiceAbstract {
  constructor(readonly store: StoreType) { }

  loadingPageStart() {
    this.store.dispatch(actionSystemSlice.setLoadingPage(true))
  }
  loadingPageEnd() {
    this.store.dispatch(actionSystemSlice.setLoadingPage(false))
  }

  loadingStart() {
    this.store.dispatch(actionSystemSlice.setLoading(true))
  }
  loadingEnd() {
    this.store.dispatch(actionSystemSlice.setLoading(false))
  }
}