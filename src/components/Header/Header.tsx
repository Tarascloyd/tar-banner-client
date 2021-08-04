import Button from '../Button/Button';
import styles from './Header.module.css';
import cn from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface HeaderProps {
    className: string;
}

const Header = ({className}: HeaderProps):JSX.Element => {
    
    const { changeFocus } = useActions();
    const { focus } = useTypedSelector(
        (state) => state.focus
    );

    return (
        <header className={cn(styles.header, className)}>
            <Button appearance = {focus === 'Banners' ? 'primary' : 'ghost'}
                    arrow = {focus === 'Banners' ? 'down' : 'right'}
                    onClick={() => changeFocus('Banners')}>
                Banners
            </Button>
            <Button appearance = {focus === 'Categories' ? 'primary' : 'ghost'}
                    arrow = {focus === 'Categories' ? 'down' : 'right'}
                    onClick={() => changeFocus('Categories')}>
                Categories
            </Button>  
        </header>  
    );
}

export default Header;