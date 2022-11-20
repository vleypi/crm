import Link from "next/link"

const MainPage = () =>{
    return(
        <div>
            MainPage
            <button  style={{margin: '0 10px'}}><Link href='/auth' ><a>Auth</a></Link></button>
        </div>
    )
}

export default MainPage