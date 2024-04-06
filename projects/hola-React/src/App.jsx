import "./App.css"
import { Cart } from "./Card"

export function App () {
    const addAt = (userName) => `@ ${userName}`

    
   
    return(
        <section className="App">
            <Cart userName={"flor-de-maga"} name={"maga"} inicialIsFollowing addAt={addAt}/>
            <Cart userName={"skjfsjfj"} name={"adsfsfsd"} inicialIsFollowing={false} addAt={addAt} />

        </section>
    )
        
}