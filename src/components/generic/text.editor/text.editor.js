import ReactQuill from 'react-quill';
import React,{useState} from 'react'
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

export default function TextEditor(props) {
    const [text, setText] = useState('')
    const handleChange =(content, delta, source, editor)=>{
        console.log(editor.getText())
     setText(editor.getHTML())
     props.setValue(content) 

 
    }
    return (
        <EditorWrapper >
          
            <ReactQuill value={text}
            disabled='true'
            onChange={handleChange}
            />
        </EditorWrapper>
    )
}

const EditorWrapper = styled.div`

.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
    height: 200px;
}
`