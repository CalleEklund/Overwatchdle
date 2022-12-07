import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { Hero } from "../utils/types";

const Agehol:NextPage = () =>{
    const [currentHero, setCurrentHero] = useState<Hero>()
    const [nextHero, setNextHero] = useState<Hero>()
    const [heroesList, setHeroesList] = useState<Hero[]>()
    //const [isLoading, setIsLoading] = useState(false)
    const {isLoading, data} = trpc.heroes.getAll.useQuery()


    const getRandomHero = () =>{
        const randomHero = heroesList?.[Math.floor(Math.random()*heroesList.length)]
        console.log(heroesList);
        heroesList?.filter((e)=>{
            console.log(e);
            
        })
        
        
    }
    useEffect(()=>{
        setHeroesList(data)
    })
    if(!isLoading){
        return <h1>{JSON.stringify(heroesList)}</h1>
    }else{
        return <h1>no data</h1>
    }
    
    
    
}

export default Agehol