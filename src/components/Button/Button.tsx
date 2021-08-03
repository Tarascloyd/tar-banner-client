import styles  from './Button.module.css';
import cn from 'classnames'
import { ReactNode } from 'react';
import {ReactComponent as Arrow} from './arrow.svg';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
	link?: string;
}

const Button = ({ appearance, arrow = 'none', size = 'small', children, link = 'about', ...props }: ButtonProps): JSX.Element => {
	return (
		<button className = {cn(styles.button, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost',
		})} {...props}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
			[styles.right]: arrow == 'right',
			[styles.down]: arrow == 'down',
		})}>
				<Arrow/>
			</span>}
		</button>
	);
};

export default Button;