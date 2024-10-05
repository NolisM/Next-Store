import { Hero } from "../../components/Home/Hero"
import { Description } from "../../components/Home/Description"

export default function name({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Hero />
            <Description />
            {children}
        </>
    )

}