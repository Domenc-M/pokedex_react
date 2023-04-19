import '../scss/header.scss'

function autocompleteSearch() {
    console.log("haha");
}

const HeaderLayout =() => {
    return(
        <header>
            <h1>Pokédex</h1>
            <input type="text" onChange={autocompleteSearch} placeholder="Search..."/>
        </header>
    )
}

export default HeaderLayout;