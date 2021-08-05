import styles from './Main.module.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Button from '../Button/Button';


interface MainProps {
    className: string;
}

const Main = ({className}: MainProps):JSX.Element => {

    const { searchCategories } = useActions();
    
    const { data, error, loading } = useTypedSelector(
        (state) => state.categories
    );

    useEffect(() => {
        searchCategories('');   
    }, []);

    return (
        <main className={cn(styles.main, className)}>
            <h3>Create new banner</h3>
            <hr/>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
            <form className = {styles.form}>
                <div className = {styles.component}>
                    <label className = {styles.label}>Name</label>
                    <input className = {styles.input} name='name' type='text' placeholder = 'Enter Name'></input>

                    <label className = {styles.label}>Price</label>
                    <input className = {styles.input} name='price' type='number' placeholder = 'Enter Price'></input>

                    <label className = {styles.label}>Category</label>
                    <select className = {styles.select} name='category'>
                        {data.map(({name, id}) => <option key={name} value={id}>{name}</option>)}
                    </select>

                    <label className = {styles.label}>Text</label>
                    <textarea  className = {styles.textarea} name='price' rows = {10} placeholder = 'Enter Text'></textarea >
                </div>
                <div className = {styles.buttons}>
                    <Button className = {styles.button} appearance = 'ghost'>
                        Save
                    </Button>
                    <Button className = {styles.button} appearance = 'ghost'>
                        Delete
                    </Button>
                </div>
            </form>}
        </main>  
    );
}

export default Main;