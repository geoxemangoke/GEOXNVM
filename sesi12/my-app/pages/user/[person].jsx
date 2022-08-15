import { useRouter } from "next/router"
import Link from 'next/link'
import { Currency } from "../Currency";

const Person = () => {
    const router = useRouter()
    // const { person, age } = router.query

    const r = useRouter();

    console.log(r.query);
    
    return (
        <>
            {r.query.person}<br></br>
            {r.query.age && 
            <>
                <div>age: {r.query?.age}</div>
                <Currency/><br></br>
                <Link href='/api/hello'><a>Hello</a></Link>
            </>
            }
            {
                console.log( router.query, '===============  router.query =============')
            }
        <div>
            {r.query.npk && 
            <>
                <div>NPK : {r.query?.npk}</div>
                <Link href='/user-ssr'><a>User</a></Link>
            </>
            }
            </div>
        </>
    )
}

export default Person