import React from "react"
import axios from "axios"
import { Ingredients } from "./Ingredients"
import { AddIngredients } from "./AddIngredients"


function CreateForm(){

    const [ mealIngredients, setMealIngredients ] = React.useState([])
 
    const eventHandler = () => {
        const data = {
            name: document.querySelector("#nameMenu-text").value,
            basePrice:document.querySelector("#priceMenu-text").value,
            healthFilter:{
                meal: document.querySelector("#meatFilterMenu").value || false,
                dairy: document.querySelector("#dairyFilterMenu").value || false,
                flavour: document.querySelector("#flavourFilterMenu").value || false
            },
            ingredients:[...mealIngredients]
        }
        console.log(data)
        addMenu(data)
    }



    const addMenu = async (data) => {
        try {
            const res = await axios.post("https://axelemanuel23githubio-backend-production.up.railway.app/api/v1/meals", data ,{
                mode: "cors",
                credentials: "include",
                headers: {
                    "APIKEY": "axel",
                }
            })
            if(!!res){
                console.log(res)
                alert("Agregado")
            }else{
                alert("hubo un error")
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <React.Fragment>
                <label>
                    Nombre
                    <input id="nameMenu-text" type="text"></input>
                </label>
                <label>
                    Precio
                    <input id="priceMenu-text" type="number"></input>
                </label>
                <p>
                    Filtros
                    <label>
                        Carnes
                        <input id="meatFilterMenu" type="checkbox"></input>
                    </label>
                    <label>
                        Lacteos
                        <input id="dairyFilterMenu" type="checkbox"></input>
                    </label>
                    <label>
                        Harinas
                        <input id="flavourFilterMenu" type="checkbox"></input>
                    </label>
                </p>
                <p>
                    Ingredientes:
                </p>
                {
                    !!mealIngredients && mealIngredients.map( (ingredient) => ( 
                                                            <Ingredients key={ingredient.text} text={ingredient.text}/> 
                                                        ))
                }
                <AddIngredients ingredients={mealIngredients} setIngredients={setMealIngredients}/>
                <button onClick={eventHandler}>Crear Menu</button>
            
                
        </React.Fragment>
    )
}

export { CreateForm }