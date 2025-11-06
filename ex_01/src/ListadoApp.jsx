import { useState } from "react";

const Items = ({ nombre, visto }) => {
    return (
        <li className="blanco">{nombre} {visto ? '✅' : '❌'}</li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'Tarea nueva', visto: false }])
    }
    let listadoSecciones = [
        { nombre: 'Instaacones necesarias', visto: true },
        { nombre: 'Uso de Vites', visto: true },
        { nombre: 'Comonentes', visto: true },
        { nombre: 'Varibes en JSX', visto: true },
        { nombre: 'Props', visto: true },
        { nombre: 'Events', visto: true },
        { nombre: 'useState', visto: true },
        { nombre: 'Redux', visto: true },
        { nombre: 'customHooks', visto: true },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Listado de temas del curso</h1>
            <ol>
                {arreglo.map((item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>))}
                {/* En el mapeo se utiliza key solo si e nombre es unico*/}
            </ol>

            <button onClick={() => addTask()}>Agregar Tarea</button>
        </>
    )
}