import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        } else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Nyheter: Filmer som kommer
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Ungdom Lær med film
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("tv")}
                    >
                        Filmatisert litteratur og forfattere
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Barnefilm: For de aller minste
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Dokumentar og Prisvinnere
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Samisk film/urbefolkning
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Eksperimentell film
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Kjærlighet. Klima og miljø 
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Kortfilmer og Kortdok eller Humorfilmer
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Krig og konflikt
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Kunst og arkitektur
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Kvinnelig regissør
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Stop motion og animasjonsfilmer

                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                       Portretter. LHBTQ+. Musikkfilm
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Animasjonsfilmer for barn
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Hele Katalog: Filmdatabasen
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Søk etter filmer, TV-programmer, kanaler og mer....."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
