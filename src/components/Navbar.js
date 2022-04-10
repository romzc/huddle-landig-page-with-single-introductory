import Logo from '../images/logo.svg'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <img src={Logo}/>
        </nav>
    )
}

export { Navbar }