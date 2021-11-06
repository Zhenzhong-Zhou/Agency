import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Agency</title>
                <link rel="icon" href="/icon.png"/>
            </Head>
            Homepage
        </div>
    )
};

export default Home;