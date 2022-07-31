import './Card.css'


export default function Card(props){
    console.log(props)
    return (
        <>
            <img src={props.imageUrl} alt="" />
            <div>
                <div>

                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h6>{props.startDate} - {props.endDate}</h6>
                <p>{props.description}</p>
            </div>
        </>
    )
}