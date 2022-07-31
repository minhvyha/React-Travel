import './Nav.css'
import web from './assets/web.svg'

export default function Nav(){
    return (
        <>
            <nav>
                <img src={web} alt="" />
                <h6>my travel journal</h6>
            </nav>
        </>
    )
}