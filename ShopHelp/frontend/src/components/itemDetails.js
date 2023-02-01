import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ItemDetails = ({item}) =>{
    const handleDelete = async() =>{
        const response = await fetch('/api/items/'+ item._id,{
            method:'DELETE'
        })
        const json = response.json()
        if(response.ok){
            console.log("item deleted")
        }
    }
    return(
        <div className="item-details">
            <h4>{item.title}</h4>
            <p><strong>Quantity: </strong>{item.quantity}</p>
            <p><strong>Price</strong>{item.price}</p>
            <p>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleDelete} >delete</span>
        </div>
    )
}
export default ItemDetails