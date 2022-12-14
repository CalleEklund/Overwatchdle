import { type NextPage } from "next";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import Link from "next/link";
import Image from 'next/image'


const Agehol: NextPage = () => {
    const [score, setScore] = useState(0)
    const [hasLost, setHasLost] = useState(false)
    const { data, refetch } = trpc.heroes.getHeroPair.useQuery()

    const makeGuess = (option: string) => {
        let correct = false
        if (!data) return;
        if (option === "higher") {
            correct = data.first.age <= data.second.age
        } else if (option === "lower") {
            correct = data.first.age >= data.second.age
        }
        correct ? setScore(score + 1) : setHasLost(true)
        refetch()
    }



    if (!data) return <div>No data</div>

    return (<main className="flex min-h-screen flex-col items-center bg-mainmenu bg-cover bg-no-repeat">
        <p className="text-8xl justify-self-start mt-7">Higher or Lower</p>
        {!hasLost ? (<><p className="text-6xl my-8 text-orange font-semibold">Score: {score}</p>
            <div className="w-full flex flex-row justify-around items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-3xl">{data.first.name}</p>
                    <Image src={data.first.image} alt="hero number 1" width={300} height={300} className="animate-fade-in" />
                    <p className="text-white text-3xl">Age: {data.first.age}</p>
                </div>
                <p className="text-4xl text-white">VS</p>
                <div className="flex flex-col justify-center items-center bg-cover bg-center">
                    <p className="text-4xl text-white">{data.second.name}</p>
                    <Image src={data.second.image} alt="hero number 2" width={300} height={300} className="animate-fade-in" />
                    {/**<img className="object-fill" src={data.second.image} alt="" />*/}

                </div>
            </div>
            <div className="flex flex-col w-full items-center gap-6">
                {/**Lägg in så att text skrivs ut vertikalt */}

                <p className="text-white text-xl">Is <span className="text-black font-bold text-2xl">{data.second.name}</span> Older or Younger than <span className="text-black font-bold text-2xl">{data.first.name}</span></p>

                <div className="flex flex-row gap-7 h-12">
                    <button className="bg-blue text-white w-32 rounded-lg" value="higher" onClick={() => { makeGuess('higher') }}>Older</button>
                    <button className="bg-blue text-white w-32 rounded-lg" value="lower" onClick={() => { makeGuess('lower') }}>Younger</button>
                </div>
            </div></>)
            :
            <div className="border-orange border-4 rounded-lg m-auto w-1/4 p-4 py-14 flex flex-col items-center gap-4">
                <p className="text-6xl text-darkblue">You Lost...</p>
                <p className="text-6xl text-blue">You scored: {score} </p>
                <div className="flex flex-row gap-4">
                    <button className="bg-green-600 text-white w-32 rounded-lg p-2" onClick={() => { setScore(0); setHasLost(false) }}>Play Again</button>
                    <Link href="."><button className="bg-red-600 text-white w-32 rounded-lg p-2">Home page</button></Link>
                </div>

            </div>}
    </main >)
}
export default Agehol