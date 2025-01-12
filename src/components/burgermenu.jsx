import BurgerMenuButton from "./burgermenubutton"
import {Link} from "react-router"

export default function Burgermenu( { setBurgerMenuOpen, burgerMenuOpen}){
        const style = {
                section: {
                    height: "100vh",
                    backgroundColor: "forestgreen",
                    padding: "2rem, 1rem",
                    transform: burgerMenuOpen ? "translateX(0%)" : "translateX(-100%)",
                    position: "absolute",
                    width: "40%",
                    top: 0,
                    left: 0,
                    right: 0,
                    buttom: 0,
                    transition: "transform 200ms ease-out"
                },
                link: {
                    color: "white"
                },
               
            }
        return(
         
        <section style={style.section}>
            <h2>Menu</h2>
            <BurgerMenuButton 
            setBurgerMenuOpen={setBurgerMenuOpen}  
            burgerMenuOpen={burgerMenuOpen}/>
            <nav onClick={() => setBurgerMenuOpen(prevState => !prevState)}>
                <ul>
                    <li><Link to="/" style={style.link}>Posts</Link></li>
                    <li><Link to="/newposts"style={style.link}>Make Post</Link></li>
                </ul>
            </nav>
        </section>
    )
}
