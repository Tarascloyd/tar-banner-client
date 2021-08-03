import { Provider } from 'react-redux';
import { store } from '../../state';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = (): JSX.Element => {
	return (
        <Provider store={store}>
            <div className={styles.wrapper}>
                <Header className={styles.header}/>
                <Sidebar className={styles.sidebar}/>
                <Main className={styles.main}/>
                <Footer className={styles.footer}/>
            </div>
        </Provider>
	);
};

export default Layout;