import React, { Component } from 'react';
import { post } from 'axios';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class AddPost extends Component {
    state = {
        file : null,
        title : '',
        content : '',
        filename : ''
    }

    componentDidUpdate(prevProps){
        if(this.props != prevProps){
            this.forceUpdate()
        }
    }
        
    addPost() {
        const url = `/api/events/1/posting/`;
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return post(url, formData, config)
    }

    render() {
        if(this.props.submit){
            this.addPost()
        }
        return (
            <Form>
                <Form.Group inline>
                <label>구분</label>
                <Form.Radio
                    label='Club'
                />
                <Form.Radio
                    label='Festival'
                />
                <Form.Radio
                    label='Show'
                />
                <Form.Radio
                    label='Etc'
                />
                </Form.Group>  

                <Form.Field>
                    <Input label='이미지' type = "file" name="file" file={this.state.file} value={this.state.fileName} onChange={(e) => this.setState({filename : e.target.value, file : e.target.files[0]})} />
                </Form.Field>
                <Form.Input label='제목' placeholder='...입력'  type = "text" name="title" value={this.state.title} onChange={(e) => this.setState({title : e.target.value})} />
                <Form.TextArea label='내용' placeholder='행사 홍보 내용을 입력해주세요!' type = "text" name="content" value={this.state.content} onChange={(e) => this.setState({content : e.target.value})} />
            </Form>
        )
    }
}

export default AddPost;