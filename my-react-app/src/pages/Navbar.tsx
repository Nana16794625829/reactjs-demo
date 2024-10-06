import {NavLink, rem} from "@mantine/core";
import classes from "../css/Navbar.module.css";
import {links} from "../utils/pageTitles.ts";

function Navbar() {

    const navLinks = links.map((item) => (
        <NavLink
            href={item.link}
            label={item.label}
            key={item.label}
            childrenOffset={28}
        >
            {item.child && item.child.map(subLink => (
                <NavLink
                    href={subLink.link}
                    label={subLink.label}
                    key={subLink.label}
                    styles={{
                        label: {
                            fontSize: rem(20),
                            color: '#00365e'
                        },
                    }}
                />
            ))}
        </NavLink>
    ));

    return (
        <div className={classes.navbar}>
            {navLinks}
        </div>
    )
}

export default Navbar;

