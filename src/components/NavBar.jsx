import Cart from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return(
        <header>
            <nav className="bg-purple-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><h1 className="self-center text-2xl font-semibold whitespace-nowrap text-slate-50">VinylVerse</h1></Link>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li><Link to="/category/vinyl" className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'>Vinyls</Link></li>
                            <li><Link to="/category/accessories" className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'>Accessories</Link></li>
                            <li><Link to="/cart" className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'><Cart products='1'/></Link></li>
                        </ul>
                    </div>    
                </div>
            </nav>
        </header>
    )
}


export default NavBar