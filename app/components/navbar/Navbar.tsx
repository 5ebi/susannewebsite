import styles from './navbar.module.css';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}
