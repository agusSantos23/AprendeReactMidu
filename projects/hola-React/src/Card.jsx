import { useState } from "react"

export function Cart ({userName = "nose", name, addAt, inicialIsFollowing}){

    const imgScr = `https://media.admagazine.com/photos/650a96a14e52ff077a4d305d/16:9/w_2560%2Cc_limit/${userName}.jpg`


    const [isFollowing,setIfFollowing] = useState(inicialIsFollowing);


    const text = isFollowing ? "Siguiendo": "Seguir"
    const buttonClassName = isFollowing 
    ? "ag-followCard-button is-following"
    : "ag-followCard-button"

    const click = () => {
        setIfFollowing(!isFollowing)
    }


    return(
        <article className="ag-followCard">
            <header className="ag-followCard-header">

                <img className="ag-followCard-avatar" src={imgScr} alt="flor" />
            
                <div className="ag-followCard-info"> 
                    <strong>{name}</strong>
                    <span>{addAt(userName)}</span>
                </div>


            </header>


            <aside>
                <button onClick={click} className={buttonClassName}>
                    {text}
                    <span className="ag-followCard-button-stop">Dejar de seguir</span>    
                </button>
            </aside>
        </article>
    )
}


