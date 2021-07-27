import Button from '../Button/Button';
import styles from './Header.module.css'
import cn from 'classnames'

interface HeaderProps {
    className: string;
}

const Header = ({className}: HeaderProps):JSX.Element => {
    return (
        <header className={cn(styles.header, className)}>
            <Button appearance='ghost' arrow='right'>Banners</Button>
            <Button appearance='ghost' arrow='right'>Categories</Button>  
        </header>  
    );
}

export default Header;