import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {postsActions} from '../store';


 class PostForm extends Component {
constructor(props){
    super(props);
    this.state={
        title:'',
        body:''
    }
}
onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});

}
onSubmit=(e)=>{
    e.preventDefault();

    const post ={
        title:this.state.title,
        body:this.state.body
    }
    const{addToPostsList}=this.props;
    addToPostsList(post)
    
}
    render() {
        return (
            <div>
                <h1>AddPosts</h1>
                <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title:</label><br/>
                       <input name="title" type="text" onChange={this.onChange} value={this.state.text} />
                   </div>
                   <div>
                       <label>Body:</label><br/>
                       <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}/>
                   </div>
                   <br/>
                   <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes ={
    addToPostsList:PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch =>({
    addToPostsList:(post)=>dispatch(postsActions.addPost(post))
    });


export default connect(null,mapDispatchToProps)(PostForm)