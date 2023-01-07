import React from "react";

function NavMenu({setContent}){
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => setContent("list")}>Listar</button>
                    </li>
                    <li>
                        <button onClick={() => setContent("edit")}>Editar</button>
                    </li>
                    <li>
                        <button onClick={() => setContent("add")}>Añadir</button>
                    </li>
                    <li>
                        <button onClick={() => setContent("delete")}>Eliminar</button>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export { NavMenu }