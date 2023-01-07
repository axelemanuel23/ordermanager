import React from 'react'
import { NavApp } from './NavApp/NavApp'
import { MenuSection } from './MenuSection/MenuSection'
import './App.css'

function App() {
  const useNavBar = () => {
    const [ menuContent, setMenuContent ] = React.useState(false)
    const [ topicContent, setTopicContent ] = React.useState(false)
    const [ sauceContent, setSauceContent ] = React.useState(false)
    const [ orderContent, setOrderContent ] = React.useState(false)

    const setContent = (choose) => {
      if(choose==="menu"){
        setMenuContent(true)
      }else{
        
        setMenuContent(false)
      }
      if(choose==="topic"){
        setTopicContent(true)
      }else{
        
        setTopicContent(false)
      }
      if(choose==="sauce"){
        setSauceContent(true)
      }else{
        
        setSauceContent(false)
      }
      if(choose==="order"){
        setOrderContent(true)
      }else{
        
        setOrderContent(false)
      }
    }

    return ({
      menuContent,
      topicContent,
      sauceContent,
      orderContent,
      setContent
    })
  }

  const { menuContent, setContent } = useNavBar()
  
  return (
    <React.Fragment>
      <NavApp setContent={setContent}/>
      <main className='mainContainer-main'>
        {!!menuContent && <MenuSection/>}
      </main>
    </React.Fragment>
  );
}

export { App };
