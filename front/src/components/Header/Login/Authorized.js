import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"


function Authorized(){

const clientState = useSelector(state=>state.client.clientData)
console.log(clientState)

return(
    <>

    </>
)
}

export default Authorized