import styles from './Sidebar.module.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Button from '../Button/Button';


interface SidebarProps {
    className: string;
}

const Sidebar = ({className}: SidebarProps):JSX.Element => {
    
    const [name, setName] = useState('');
    const { searchCategories, searchBanners } = useActions();
    
    const { focus } = useTypedSelector(
        (state) => state.focus
    );
    const { data, error, loading } = useTypedSelector(
        (state) => focus === 'Categories' ? state.categories : state.banners
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        focus === 'Categories' ? searchCategories(name) : searchBanners(name);
    };

    useEffect(() => {
        focus === 'Categories' ? searchCategories(name) : searchBanners(name);   
    }, [focus]);
    
    return (
        <div className={cn(styles.sidebar, className)}>
            <h2>{focus}:</h2>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter a name'/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(({name}) => <div className = {styles.item} key={name}>{name}</div>)}
            <Button className = {styles.button} appearance = 'ghost'>
                Crete new
            </Button>
        </div>
    );
}

export default Sidebar;