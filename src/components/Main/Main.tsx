import styles from './Main.module.css';
import cn from 'classnames';
interface MainProps {
    className: string;
}

const Main = ({className}: MainProps):JSX.Element => {
    return (
        <main className={cn(styles.main, className)}>
            <p>Main stuff</p>
        </main>  
    );
}

export default Main;