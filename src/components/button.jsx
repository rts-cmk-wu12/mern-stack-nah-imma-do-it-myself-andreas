export default function Button( {children:text, show, setShow} ) {
     function handleClick(event) {
        setShow(!show)
    } 

    return (
         <button onClick={handleClick}>{text}</button> 
    )
}

