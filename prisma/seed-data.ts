type Hero = {
    id: number,
    name: string,
    description: string,
    role: string,
    secondary: string,
    image: string,
    difficulty: number
}

export const heroesList: Hero[] = [
    {
        id: 1,
        name: 'Genji',
        description: 'Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.',
        role: 'Offense',
        secondary: 'Mobile DPS',
        image: 'https://blzgdapipro-a.akamaihd.net/hero/genji/hero-select-portrait.png',
        difficulty: 3
    },
]  