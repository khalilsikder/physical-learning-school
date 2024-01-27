import { Link } from 'react-router-dom';
import logoImg from '../../../assets/phyLogo.jpg'
const Logo = () => {
    return (
        <Link className='hidden md:block' to='/'><img src={logoImg} alt="logo" width='50' height='50'/></Link>
    );
};

export default Logo;