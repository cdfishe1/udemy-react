import './Card.css';

function Card(props) {
    //This defines classes that the card prop will delegate. Card plus any classes that are used in children components.
    const classes = 'card ' + props.className;

    return (
        <>  
            <li className={classes}>{props.children}</li>
        </>
    )
}
//props.children allows children props of this prop to inherit the classes of Card
export default Card