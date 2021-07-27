import styles  from './Button.module.css';
import cn from 'classnames'
import { ReactNode } from 'react';

interface ButtonProps {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
	link?: string;
}

const Button = ({ appearance, arrow = 'none', size = 'small', children, link = 'about' }: ButtonProps): JSX.Element => {
	return (
		<button className = {cn(styles.button, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost',
		})}>
			{children}
			{arrow !== 'none' && <span className={'arrow ' + arrow}>
				<img src="/arrow.svg" alt="arrow"/>
			</span>}
		</button>
	);
};

export default Button;