import styles from './Footer.module.css';
import cn from 'classnames';

interface FooterProps {
    className: string;
}

const Footer = ({className}: FooterProps): JSX.Element => {
	return (
        <footer className={cn(styles.footer, className)}>
            <p>Made by TarasCloyd 2021</p>
        </footer>
	);
};

export default Footer;