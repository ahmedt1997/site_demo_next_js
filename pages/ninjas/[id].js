export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((data)=>{
        return {
            params:{id:data.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }

}
export const getStaticProps = async (context) => {

    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json()
    return {
        props : {
            data

        }
    }

}


const Details = ({data}) => {
    return ( 
        <div className="About">
            <h2>About Page {data.name}</h2>
            <h1>{data.name}</h1>
            <p>{data.address.city}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
        </div>
     );
}
 
export default Details;