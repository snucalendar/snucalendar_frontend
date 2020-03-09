import React, { Component } from 'react';
import { post } from 'axios';
import { Input, Form, Modal, Button, Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import _ from 'lodash'

export class AddPost extends Component {
    state = {
        file : null,
        title : '',
        content : '',
        filename : '',

        open: false,
        submit : false,

        isLoading : false,
        results : [],
        value : "",
        id : null,
    }

    openModal = () => {
        this.setState({ open: true })
        this.props.getPostingEventList();
    }

    closeModal = () => this.setState({ open: false, submit : false })

    componentDidUpdate(prevProps){
        if(this.props != prevProps){
            this.forceUpdate()
        }
    }

    

    addPost = () => {
        if(!this.state.id){
            alert('event selection not valid')
            return;
        }

        const url = `/api/events/${this.state.id}/posting/`;
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(url, formData, config).then(() => {
            this.props.getPosting()
            window.alert('uploaded!')
            this.setState({open : false})
        }).catch(() => {
            window.alert('upload error!')
        })
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title, id : result.id })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
    
        setTimeout(() => {
          if (this.state.value.length < 1) return this.setState({value : '', results : [], isLoading : false})
    
          const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
          const isMatch = (result) => re.test(result.title)
    
          this.setState({
            isLoading: false,
            results: _.filter(this.props.posting_event_list, isMatch),
          })
        }, 300)
      }

    render() {
        return (
        <div>
        <Button onClick={this.openModal}>
        +
        </Button>
        <Modal
          open={this.state.open}
          closeOnDimmerClick={true}
          onClose={this.closeModal}
          style = {{left : 'auto', top : 'auto'}}
        >
          <Modal.Header>게시글 추가하기</Modal.Header>
          <Modal.Content>
            <Form> 
                    <Form.Field>
                        <Input label='이미지' type = "file" name="file" file={this.state.file} value={this.state.fileName} onChange={(e) => this.setState({filename : e.target.value, file : e.target.files[0]})} />
                    </Form.Field>
                    <Form.Field label = '행사 이름'/>
                        <Search
                            loading={this.state.isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                            })}
                            results={this.state.results}
                            value={this.state.value}
                        />
                    <Form.Input label='제목' placeholder='...입력'  type = "text" name="title" value={this.state.title} onChange={(e) => this.setState({title : e.target.value})} />
                    <Form.TextArea label='내용' placeholder='행사 홍보 내용을 입력해주세요!' type = "text" name="content" value={this.state.content} onChange={(e) => this.setState({content : e.target.value})} />
                </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.closeModal} negative>
              나가기
            </Button>
            <Button               
              onClick={this.addPost}
              positive
              labelPosition='right'
              icon='checkmark'
              content='완료!'
            />
          </Modal.Actions>
        </Modal>
        </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    getPostingEventList: () => dispatch(actionCreators.getPostingEventList()),
});

export const mapStateToProps = (state) => ({
  posting_event_list: state.evl.posting_event_list,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);