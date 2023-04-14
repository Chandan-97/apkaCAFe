import './servicecard.css'


export default function ServiceCard(props) {
    return (
        <div className='card'>
            <h3>{props.name}</h3>
            <p className='price'>${props.price}</p>
            <p>{props.description}</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
} 