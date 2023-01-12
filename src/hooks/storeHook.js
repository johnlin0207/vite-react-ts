import { useContext } from "react";
import StoreContext from "@/contexts/storeContext";
import { observer } from "mobx-react-lite";

function useStore() {
  const store = useContext(StoreContext);
  return store;
}

export { observer, useStore };
