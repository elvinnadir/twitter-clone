import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "~/store/modal";
import apperance from "~/store/apperance";



const store = configureStore({
    reducer: {
        auth,
        modal,
        apperance
    }
})

export default store;