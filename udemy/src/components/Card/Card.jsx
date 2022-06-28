import './Card.css';

function Card(props) {
    //This defines classes that the card prop will delegate. Card plus any classes that are used in children components.
    const classes = 'card ' + props.className;

    return (
        <>  
            <div className={classes}>{props.children}</div>
        </>
        
    )
}
//props.children allows children props of this prop to inherit the classes of Card
export default Card