import { FaHamburger } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

const style = {
    button: {
        border: "none",
        background: "none",
        cursor: "pointer"
    }
}

export default function BurgerMenuButton({ setBurgerMenuOpen, burgerMenuOpen }){
    return (
        <button style={style.button} onClick= {() => setBurgerMenuOpen(prevState => !prevState) }>
            {burgerMenuOpen ? <GrClose/> : <FaHamburger/> }
        </button>
    )
}
