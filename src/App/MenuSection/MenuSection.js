import React from "react"
import { NavMenu } from "./NavMenu"
import { MenuForm } from "./MenuForm/MenuForm"
import { CreateForm } from "./MenuForm/CreateForm"

function MenuSection(){
    const useNavBar = () => {
        const [ createForm, setCreateForm ] = React.useState(false)
        const [ editForm, setEditForm ] = React.useState(false)
        const [ listForm, setListForm ] = React.useState(false)
        const [ deleteForm, setDeleteForm ] = React.useState(false)
    
        const setForm = (choose) => {
          if(choose==="list"){
            setListForm(true)
          }else{
            
            setListForm(false)
          }
          if(choose==="add"){
            setCreateForm(true)
          }else{
            
            setCreateForm(false)
          }
          if(choose==="edit"){
            setEditForm(true)
          }else{
            
            setEditForm(false)
          }
          if(choose==="delete"){
            setDeleteForm(true)
          }else{
            
            setDeleteForm(false)
          }
        }

        return ({
            createForm,
            editForm,
            listForm,
            deleteForm,
            setForm
        })
        
    }

    const {createForm, setForm} = useNavBar()

    return (
        <React.Fragment>
            <NavMenu setContent={setForm}/>
            {!!createForm && <MenuForm><CreateForm/></MenuForm>}
        </React.Fragment>
    )
}


export { MenuSection }