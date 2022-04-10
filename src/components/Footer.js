import Facebook from '../images/facebook.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'

const Footer = () => {
    return ( 
       <footer className='footer'>
           <img src={Facebook} />
           <img src={Twitter} />
           <img src={Instagram} />
       </footer>
    )
}

export { Footer }