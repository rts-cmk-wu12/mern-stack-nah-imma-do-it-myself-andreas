import { useState } from 'react'
import Burgermenu from './burgermenu'
import BurgerMenuButton from './burgermenubutton'

function PrimaryMenu() {
 
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  return (
    <>
    <BurgerMenuButton
    burgerMenuOpen={burgerMenuOpen}
    setBurgerMenuOpen={setBurgerMenuOpen}/>

    <Burgermenu 
    setBurgerMenuOpen={setBurgerMenuOpen} 
    burgerMenuOpen={burgerMenuOpen}/>
    
    </>
  )
}

export default PrimaryMenu
