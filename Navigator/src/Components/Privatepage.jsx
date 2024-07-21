import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authcontext'

const Privatepage = ({children}) => {
    const {token}=useContext(AuthContext)

    if(!token)
    {
        window.location.href="/login"
    }
    else
    {
        return children
    }
}

export default Privatepage
