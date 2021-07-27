import styles from './Sidebar.module.css';
import cn from 'classnames';
interface SidebarProps {
    className: string;
}

const Sidebar = ({className}: SidebarProps):JSX.Element => {
    return (
        <main className={cn(styles.main, className)}>
            <p>Sidebar stuff</p>
        </main>  
    );
}

export default Sidebar;