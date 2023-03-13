import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export function BlogCard({ title, description, likePost, liked, deletePost }: any) {


    const heartFill = liked ? 'red' : 'black'

    return (
        <>

            <div className="post">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <div className="cont">
                    <div className='btnContainer'>
                        <button onClick={likePost} className="button">
                            <FavoriteIcon style={{ fill: heartFill }} />
                        </button>
                    </div>
                    <div className='btnDelete'>
                        <button className='button' onClick={deletePost}>
                            <DeleteIcon style={{ fontSize: 35 }}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}