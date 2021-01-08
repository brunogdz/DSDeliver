import './styles.css';
import { ReactComponent as TwitchIcon } from '../img/twitch.svg'
import { ReactComponent as LinkedinIcon } from '../img/Linkedin.svg'
import { ReactComponent as InstagramIcon } from '../img/Instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.twitch.tv/dmitritv" target="_new">
                    <TwitchIcon />
                </a>
                <a href="https://www.linkedin.com/in/bruno-gomes-de-azevedo-6603941a0/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="www.instagram.com/brunog98" target="_new">
                    <InstagramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;

