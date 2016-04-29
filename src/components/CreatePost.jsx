import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/'

class CreatePost extends React.Component {
	constructor(props) {
		super(props)
	}

	addPost (e) {
		var title = this.refs.newPostTitle.value
		var body = this.refs.newPostBody.value
		var newPost = addPost({title, body})
		this.props.dispatch(newPost)
	}

	render () {
		return (
			<div>
				Post Title:<br />
				<input ref="newPostTitle" type="text" name="title" placeholder="write Post title here" />
				<br />
				Post Body:<br />
				<input ref="newPostBody" type="text" name="body" placeholder="write Post body here" />
				<br /><br />
				<button onClick={this.addPost.bind(this)}>New Post</button>
			</div>
		)}}

export default connect(
)(CreatePost)

export { CreatePost }
