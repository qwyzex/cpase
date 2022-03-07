import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/Form";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>cPase</title>
            </Head>
            <Form />
        </div>
    );
};

export default Home;
