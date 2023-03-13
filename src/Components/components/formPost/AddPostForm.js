import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Component} from 'react';

export class AddPostForm extends Component{
    
    state = {
        postTitle: '',
        postDescription: '',
    }

    handlePostTitelChange=(e)=>{
        this.setState({
            postTitle: e.target.value
        })
    }
    handlepostDescriptionlChange=(e)=>{
        this.setState({
            postDescription: e.target.value
        })
    }

  render() {
    const closeFormBlog = this.props.handleAddPostFormHide
    return(
        <>
        <form action="" className="wrapper">
            <span className='close' onClick={closeFormBlog}>
                <HighlightOffIcon />
            </span>
            <div >
                <input 
                type="text" 
                name="postTitle" 
                value={this.state.postTitle}
                onChange={this.handlePostTitelChange} />
            </div>
            <div>
                <textarea 
                name="postDescription" 
                value={this.state.postDescription}
                onChange={this.handlepostDescriptionlChange} 
                ></textarea>
            </div>
            <div>
                <button onClick={closeFormBlog} className="addbtn" type="button">Add Post</button>
            </div>
        </form>
        <div onClick={closeFormBlog} className="overlay"></div>
        </>
    )
  }
}