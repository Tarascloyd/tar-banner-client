import styles from './Sidebar.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';


interface SidebarProps {
    className: string;
}

const Sidebar = ({className}: SidebarProps):JSX.Element => {
    
    const [name, setName] = useState('');
    const { searchCategories } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.categories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchCategories(name);
    };
    
    return (
        <div className={cn(styles.main, className)}>
            <form onSubmit={onSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(({name}) => <div key={name}>{name}</div>)}
        </div>
    );
}

export default Sidebar;