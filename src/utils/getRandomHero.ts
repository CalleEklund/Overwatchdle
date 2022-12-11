const MAX_HERO_ID = 36

export const getRandomHero: (notThisOne?: number) => number = (notThisOne) => {
    const heroIndexNumber = Math.floor(Math.random() * MAX_HERO_ID) + 1

    if (heroIndexNumber !== notThisOne) return heroIndexNumber
    return getRandomHero(notThisOne);
}

export const getHeroesForVote = () => {
    const firstId = getRandomHero()
    const secondId = getRandomHero(firstId)

    return [firstId, secondId]
}