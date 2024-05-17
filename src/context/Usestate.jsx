import { createContext, react} from 'react'

export const usercontext = createContext()

const cotextProvider = ({children})=>{


    <usercontext.Provider>
            {children}
    </usercontext.Provider>
}

export default cotextProvider;