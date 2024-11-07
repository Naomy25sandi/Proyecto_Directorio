import { useEffect, useState } from "react"
import { GetData } from "../Services/api"
import ListaCards from "../components/ListaCards"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
            <Navbar/>
            <ListaCards cards={centros} />
            <Footer/>
        </>
    )
}
export default Centros