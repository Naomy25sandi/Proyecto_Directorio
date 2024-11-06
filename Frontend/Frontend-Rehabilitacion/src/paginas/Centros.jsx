import { useEffect, useState } from "react"
import { GetData } from "../Services/api"
import ListaCards from "../components/ListaCards"

const Centros = () => {
    const [centros, setCentros] = useState([])

    useEffect(() => {
        const traerTodosCentros = async () => {
            const peticion = await GetData('centros/api/centros/')
            setCentros(peticion)
        }
        traerTodosCentros()
    }, [])
    return (
        <>
            <ListaCards cards={centros} />
        </>
    )
}
export default Centros