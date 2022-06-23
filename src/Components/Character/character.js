function Character(props){
    let {id,name,status,species,gender,image} = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>{id}</p>
            <div>{status}</div>
            <div>{species}</div>
            <h2>{gender}</h2>
            <img src={image} alt={name}/>
        </div>

    )
}
export default Character