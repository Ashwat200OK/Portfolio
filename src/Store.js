import {configureStore} from '@reduxjs/toolkit'
import ScreenTheme from './Slices/Theme'

const Store =  configureStore({
    reducer : {
        screenTheme : ScreenTheme
    }
}) 

export default Store;