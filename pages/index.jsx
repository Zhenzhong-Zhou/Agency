import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Intro from "../components/Intro";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Agency</title>
                <meta name={"description"} content={"The best Guzheng Channel!"}/>
            </Head>
            <Intro/>
        </div>
    );
};

export default Home;