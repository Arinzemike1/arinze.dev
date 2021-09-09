import Head from 'next/head'

const Header = ({ pageTitle }) => {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="web development, programming" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default Header;
