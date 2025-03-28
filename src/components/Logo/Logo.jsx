import s from './Logo.module.css'
import Logo1 from '/Logo1.png'

const Logo = () => {
    return (
        <div className={s.logo}>
            <img src={Logo1} alt="Oleh Shyian Logo" />
        </div>
    )
}

export default Logo;