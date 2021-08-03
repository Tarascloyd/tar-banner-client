import Button from '../Button/Button';
import styles from './Header.module.css';
import cn from 'classnames';
import { useState } from 'react';

interface HeaderProps {
    className: string;
}

const Header = ({className}: HeaderProps):JSX.Element => {
    
    const [focus, setFocus] = useState<String>('banners');

    return (
        <header className={cn(styles.header, className)}>
            <Button appearance = {focus == 'banners' ? 'primary' : 'ghost'}
                    arrow = {focus == 'banners' ? 'down' : 'right'}
                    onClick={() => setFocus('banners')}>
                Banners
            </Button>
            <Button appearance = {focus == 'categories' ? 'primary' : 'ghost'}
                    arrow = {focus == 'categories' ? 'down' : 'right'}
                    onClick={() => setFocus('categories')}>
                Categories
            </Button>  
        </header>  
    );
}

export default Header;