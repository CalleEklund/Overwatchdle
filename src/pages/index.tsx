import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
const Home: NextPage = () => {
  return (

    <>
      <Head>
        <title>Overwatchdle</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jaldi:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex min-h-screen flex-col bg-mainmenu bg-cover bg-no-repeat">
        <header className="flex justify-between my-12 mx-16">
          <p className="text-5xl font-bold [text-shadow:_2px_2px_2px_rgb(255_255_255_/_30%)]">Overwatchdle <span className="text-orange">2</span></p>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row">
              <div className="h-16 w-16 bg-black bg-darklogo bg-cover" />
              <div className="h-16 w-64 bg-white flex items-center pl-4">
                <p className="text-xl font-semibold">Bob</p>
              </div>
            </div>


            <div className="flex flex-row gap-2">
              <div className="h-16 w-16 bg-white flex items-center justify-center">
                <Image src="/friends-icon.png" alt="alt" width="36" height="36" quality={100} />
              </div>
              <div className="h-16 w-16 bg-orange flex items-center justify-center">
                <Image src="/medal-icon.png" alt="alt" width="36" height="36" quality={100} />
              </div>
            </div>
          </div>
        </header>
        <section className="flex flex-auto items-center h-full">
          <div className="flex flex-col gap-12 pl-8">
            <Link href="/agehol"><button className="text-5xl text-whiterounded-lg font-Jaldi font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_40%)] transition ease-in-out delay-150 hover:scale-110" >Higher or Lower</button></Link>
            <Link href="/"><button className="text-5xl text-whiterounded-lg font-Jaldi font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_40%)] transition ease-in-out delay-150 hover:scale-110" >Not implemented</button></Link>
          </div>
        </section>
        <footer className="h-20">
          This is a footer
        </footer>
      </main>
    </>
  );
};

export default Home;
