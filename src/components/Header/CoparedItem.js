

function ComparedItem(props){

console.log(props.data)

    return(
        <>
        {props.data.typeGoods=='Фотокамера' ?
            <div className='labels column'>
                <div className="comparedFeature photoBlock">
                    <img className="compareImg" src={`http://localhost:5000/uploadedIMG/${props.data.img1[0].filename}`} />
                    <img className="delete-compar-btn" src="/imagesHTML/icons/delete.png" />
                </div>
                
                <p className='comparedFeature'>{props.data.brand}</p>
                <p className='comparedFeature'>{props.data.model}</p>
                <p className='comparedFeature'>{props.data.imgdepth}</p>
                <p className='comparedFeature'>{props.data.type}</p>
                <p className='comparedFeature'>{props.data.matrix}</p>
                <p className='comparedFeature'>{props.data.mpx}</p>
                <p className='comparedFeature'>{props.data.video}</p>
                <p className='comparedFeature'>{props.data.exposition}</p>
                <p className='comparedFeature'>{props.data.width}</p>
                <p className='comparedFeature'>{props.data.height}</p>
                <p className='comparedFeature'>{props.data.depth}</p>
                <p className='comparedFeature'>{props.data.weight}</p>
                <p className='comparedFeature'>{props.data.work_price}</p>
                <p className='comparedFeature'>{props.data.weekend_price}</p>
                <p className='comparedFeature'>{props.data.week_price}</p>
                <p className='comparedFeature'>{props.data.month_price}</p>
            </div>
        : <div className='labels column'>
                <div className="comparedFeature photoBlock">
                    <img className="compareImg" src={`http://localhost:5000/uploadedIMG/${props.data.img1[0].filename}`} />
                    <img className="delete-compar-btn" src="/imagesHTML/icons/delete.png" />
                </div>
                
                
                <p className='comparedFeature'>{props.data.brand}</p>
                <p className='comparedFeature'>{props.data.model}</p>
                <p className='comparedFeature'>{props.data.min_focus_length}</p>
                <p className='comparedFeature'>{props.data.diametr}</p>
                <p className='comparedFeature'>{props.data.linceLength}</p>
                <p className='comparedFeature'>{props.data.linseType}</p>
                <p className='comparedFeature'>{props.data.work_price}</p>
                <p className='comparedFeature'>{props.data.weekend_price}</p>
                <p className='comparedFeature'>{props.data.week_price}</p>
                <p className='comparedFeature'>{props.data.month_price}</p>
            </div>


        }
        </>
    )
}

export default ComparedItem