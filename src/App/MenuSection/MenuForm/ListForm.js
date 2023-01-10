import React from "react"
import axios from "axios"

function ListForm(){

    const [menus, setMenus] = React.useState([])

    React.useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://axelemanuel23githubio-backend-production.up.railway.app/api/v1/meals", {
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "APIKEY": "axel",
                    }}
                )
                if(!!res){
                    setMenus(res.data.data)
                }
            }catch(err){
                console.log(err)
            }
        }
        getData()
    },[])

    return (
        <React.Fragment>
            <ul>
            {
                !!menus && menus.map(
                    (menu) => (
                        <li key={menu._id}>
                            <p>Nombre: {" " + menu.name}
                            </p>
                            <p>
                                Precio: {" " + menu.basePrice}
                            </p>
                            <ul> 
                                Ingredientes:
                                {menu.ingredients.map( 
                                    (ingredient) => (
                                        <li key={ingredient}>{ingredient}</li>
                                    )
                                )}
                            </ul>
                            <ul>
                                Contiene:
                                {
                                    Object.entries(menu.healthFilter).map( (condition) => 
                                    (
                                        <li key={condition}>
                                            <p>{condition[0]}</p>
                                                {
                                                    !!condition[1] && <p>Si</p>

                                                }
                                        </li>
                                    ) )
                                // Object.keys(res.data.data[0].healthFilter)[0]
                                }
                            </ul>
                        </li>
                    )
                )
            }
            </ul>
        </React.Fragment>
    )
}

export { ListForm }