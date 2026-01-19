import { Header } from "../components/Header";

export function NotFoundPage({cart}) {
    return (
        <>
        <Header cart={cart} />
        <div className="not-found-message" style={{marginTop:'100px'}}>           
            <h1 >Error 404. Page not found. </h1>
        </div>
        </>

    )
}