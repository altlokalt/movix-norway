import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">TV. Filmer. Serier. Sport. Samlet.</li>
                    <li className="menuItem">Trenger kun vanlig internett.</li>                  
                    <li className="menuItem">Utforske felles arena.</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <h3>Over 5 380 199- filmer & serier. Tilgjengelige kun for deg</h3>
                <br/>
                <div className="infoText">
                Visste du at: Alle med nasjonalt lånekort på norske bibliotek kan se kort- og dokumentarfilm gratis gjennom strømmetjenesten Filmbib. 
                <br/>
                Hos oss selv og det er en Klassisk film eller alternativ samtidsfilm. Du får nytte slik de er ment å vises. Uten ekstra kostnad.
                <br/>
                Vi lister opp de mest sette norske svensk, dansk, finsk filmer og serier «alle» bør se hvert år.
                <br/>
                Vi har som mål å bli «selskapet» for alle aktører i den kommersielle filmbransjen, samtidig som vi tar vare på de kulturelle, politiske forpliktelsene og forventningene som er i stadig endring. 
                <br/>
                Er du en av dem som har lidenskap for film? Du er på rett sted
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
