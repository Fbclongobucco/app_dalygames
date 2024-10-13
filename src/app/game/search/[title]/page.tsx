import { Container } from "@/components/container";
import { GameCard } from "@/components/gamecard";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";


async function getData(title: string) {

    try {
        const decodeTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
        return res.json()
    } catch (err) {
        return null;
    }

}


export default async function Page({ params: { title } }: {
    params: { title: string }
}) {

    const games: GameProps[] = await getData(title)

    return (
        <main>
            <Container>
                <Input />
                <h1 className="font-bold text-xl mt-8 mb-5">veja o que encontramos na nossa base</h1>
                {!games && (
                    <p>jogo não encontrado...!</p>
                )}
                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games && games.map((item) => (
                        <GameCard key={item.id} data={item} />
                    )
                    )}
                </section>
            </Container>
        </main>
    )
}
