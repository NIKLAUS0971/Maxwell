import { BlogCard } from "./components/BlogCard/BlogCard"
import { posts } from "./Data/BazaData"
import { Component } from 'react'
import { AddPostForm } from "./components/formPost/AddPostForm"

console.log(Component)

export class Main extends Component {

    state = {
        showBlog: true,
        blogArr: JSON.parse(localStorage.getItem('BlogPost')) || posts,
        showAddPostForm: false,
    }


    likePost = (pos) => {
        const temp = [...this.state.blogArr]
        temp[pos].liked = !temp[pos].liked

        this.setState({
            blogArr: temp
        })
        localStorage.setItem('BlogPost', JSON.stringify(temp))
    }

    deletePost = (pos) => {
        if (window.confirm(`vi xotite udolit ${this.state.blogArr[pos].title}`)) {

            let temp = [...this.state.blogArr]
            temp.splice(pos, 1);
            this.setState({
                blogArr: temp
            })
            localStorage.setItem('BlogPost', JSON.stringify(temp))

        }
    }

    handleShowAddPostForm = () => {
        this.setState({
            showAddPostForm: true
        })
    }

    handleAddPostFormHide = () => {
        this.setState({
            showAddPostForm: false
        })
    }


    render() {
        const blogPosts = this.state.blogArr.map((item, pos) => {
            return (
                <>
                    <BlogCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        liked={item.liked}
                        likePost={() => this.likePost(pos)}
                        deletePost={() => this.deletePost(pos)} />
                </>

            )
        })


        return (
            <>

                {
                    this.state.showBlog ?
                        <><button onClick={this.handleShowAddPostForm} className="addbtn">Show post</button>
                            <div className="posts">{blogPosts} </div> </> : null
                }
                {
                    this.state.showAddPostForm ? <AddPostForm handleAddPostFormHide={this.handleAddPostFormHide} /> : null
                }


            </>
        )
    }
}