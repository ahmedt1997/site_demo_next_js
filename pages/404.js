import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFounf = () => {
    const router = useRouter()
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },2000)
    },[])


    return ( 
        <div className="NotFound">
            <h2>Ooooop ....</h2>
            <p>This page was is not exsist</p>
            <Link href="/"><a>Go to Home page</a></Link>
        </div>
     );
}
 
export default NotFounf;