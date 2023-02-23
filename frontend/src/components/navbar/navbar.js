import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarStyles from './navbar.module.css';

import { useSession, signOut, signIn } from 'next-auth/react';

import { useRouter } from 'next/router';

// Material UI
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import MobileMenu from './mobileMenu/mobileMenu';
import ScrollToTop from './scrollToTop/scrollToTop';
import { NextResponse } from 'next/server';

export default function Navbar(props) {
    const { data: session, status } = useSession();

    const [anchorUser, setAnchorUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };

    const menu = (
        <div className={navbarStyles.navbarMenu}>
            <ul>
                <li>
                    <Link className={currentRoute === "/" ? navbarStyles.navbarActive : ""} href="/">Home</Link>
                </li>
                <li>
                    <Link className={currentRoute === "/all-listings" ? navbarStyles.navbarActive : ""} href="/all-listings">All Listings</Link>
                </li>
                <li>
                    <Link className={currentRoute === "/how-it-works" ? navbarStyles.navbarActive : ""} href="/how-it-works">How It Works</Link>
                </li>
                <li>
                    <Link className={currentRoute === "/contact-us" ? navbarStyles.navbarActive : ""} href="/contact-us">Contact Is</Link>
                </li>
            </ul>
        </div>
    )

    return (
        <AppBar position='fixed'>
            <nav className={navbarStyles.navbar}>
                <div className={navbarStyles.navbarLogo}>
                    <Image
                        src={'/images/book-direct-and-save-logo.png'}
                        alt="Book Direct and Save Logo"
                        width={200}
                        height={58}
                    />
                </div>
                <div className={navbarStyles.navbarLinks}>
                    <div className={navbarStyles.navbarDesktop}>
                        {menu}
                    </div>

                    <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}>
                        {menu}
                    </MobileMenu>



                    <div className={navbarStyles.navbarSmallMenu}>
                        {session ? (
                            <>
                                <IconButton
                                    id="profile-avatar"
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar alt="User Profile" />
                                </IconButton>
                                <Menu
                                    className={navbarStyles.navbarProfileMenu}
                                    id="menu-appbar"
                                    anchorEl={anchorUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <Link className={currentRoute === "/" ? navbarStyles.navbarActive : ""} href="/">Show Profile</Link>
                                    <ul>
                                        <li>
                                            <Link className={currentRoute === "/my-listings" ? navbarStyles.navbarActive : ""} href="/admin/my-listings">My Listings</Link>
                                        </li>
                                        <li>Pages</li>
                                        <li>Goes</li>
                                        <li>Here</li>
                                        <li
                                            className={navbarStyles.navbarLogOutButton}
                                            onClick={() => {
                                                signOut();
                                            }}
                                        >
                                            Log Out
                                        </li>
                                    </ul>
                                </Menu>
                            </>
                        ) : (
                            <div className={navbarStyles.navbarLoginRegister}>
                                <span style={{ cursor: "pointer" }} onClick={() => signIn()}>Log In</span>

                                <Link className={currentRoute === "/register" ? navbarStyles.navbarActive : ""} href="/register">Register</Link>
                            </div>
                        )}
                    </div>




                </div>


                <ScrollToTop {...props}>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollToTop>
            </nav>
        </AppBar>
    )
}
