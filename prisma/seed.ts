import { PrismaClient } from '@prisma/client'
import type { Hero, Ability } from './seed-data';
import { heroesList } from './seed-data'
const prisma = new PrismaClient()


//Add relation between Hero and ability


async function main() {
    console.log('start seeding')
    heroesList.map(async (elem: Hero) => {
        await prisma.heroes.create({
            data: {
                name: elem.name,
                age: elem.age,
                nationality: elem.nationality,
                role: elem.role,
                health: elem.health,
                image: elem.image
            }
        })
    })
    console.log('finished seeding the db')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })