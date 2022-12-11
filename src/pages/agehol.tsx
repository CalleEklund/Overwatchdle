import next, { type NextPage } from "next";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { Hero } from "../utils/types";
import { useRouter } from "next/router";


const Agehol: NextPage = () => {
    const [score, setScore] = useState(0)

    //const { isLoading, data } = trpc.heroes.getAll.useQuery()
    const { data, refetch, isLoading } = trpc.heroes.getHeroPair.useQuery()

    const makeGuess = (e: any) => {
        let correct = false
        if (!data) return;

        console.log('first age ', data.first.age, 'second age ', data.second.age, 'guess', e.target.value)

        if (e.target.value === "higher") {
            correct = data.first.age <= data.second.age
        } else if (e.target.value === "lower") {
            correct = data.first.age >= data.second.age
        }
        console.log('correct: ', correct)
        correct ? setScore(score + 1) : setScore(() => {
            return score - 1 < 0 ? 0 : score - 1
        })
        refetch()
    }



    if (!data) {
        return <div>No data</div>
    }
    return (<main className="flex min-h-screen flex-col items-center  bg-mainbg bg-cover bg-no-repeat">
        <p className="text-8xl justify-self-start mt-7">Higher or Lower</p>
        <p className="text-6xl my-8 text-blue">Score: {score}</p>
        <div className="w-full flex flex-row justify-around items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-white text-3xl">{data.first.name}</p>
                <img className="object-fill" src={data.first.image} alt="" />
                <p className="text-white text-3xl">Age: {data.first.age}</p>
            </div>
            <p className="text-4xl text-white">VS</p>
            <div className="flex flex-col justify-center items-center bg-cover bg-center">
                <p className="text-4xl text-white">{data.second.name}</p>
                <img className="object-fill" src={data.second.image} alt="" />

            </div>
        </div>
        <div className="flex flex-col w-full items-center">
            {/**Lägg in så att text skrivs ut vertikalt */}

            <p className="text-white text-xl">Is {data.second.name} Older or Younger than {data.first.name}</p>

            <div className="flex flex-row gap-7 h-12">
                <button className=" bg-blue text-white w-32 rounded-lg" value="higher" onClick={makeGuess}>Older</button>
                <button className=" bg-blue text-white w-32 rounded-lg" value="lower" onClick={makeGuess}>Younger</button>
            </div>
        </div>
    </main >)
}

export default Agehol