import React from 'react';
import axios from 'axios';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleFile(e) {
        let file = e.target.files[0]
        this.setState({ file })
    }

    handleUpload(e) {
        e.preventDefault();
        let file = this.state.file
        let fromdata = new FormData();
        fromdata.append('image', file);
        const headers = {
            'Authorization': localStorage.getItem('api_key'),
            'Content-Type': 'multipart/form-data'
        }
        const user = {
            filedata: fromdata,
            type: 1,
        };
        axios.post(`sth sth`, user, {
            headers
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleUpload}>
                <label>File</label><br />
                <input type='file' onChange={this.handleFile} />
                <button>Send File!</button>
            </form>
        )
    }
}