import './navbarJSX.css'
import favicon from './assets/img/favicon3.jpg'

const Navbar = ()=> {
    return (
        <nav className="navBar">
            <div className=" container centrar ">
                <img className="favIcon col-1" src={favicon}/>
                <div className="col-11">
                <h1>Los Herederos de Baden Powell</h1>
                    <button>Pasapañuelos</button>
                    <button>Mates</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar