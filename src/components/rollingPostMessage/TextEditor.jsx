import './textEditor.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import { useState, useContext } from 'react';
import { useFormDataSet } from '../../hooks/useFormDataSet';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';
import { EDITOR_CONFIG } from '../../constants/ckEditor';

export default function TextEditor() {
	const [content, setContent] = useState('');
  const {setData} = useContext(MsgCreateDataSet);

	useFormDataSet(setData, 'content', content);
  
  return ( 
    <div>
      <CKEditor
        editor={ Editor }
        config={EDITOR_CONFIG}
				onBlur={ (event, editor) => {
					setContent(editor.getData());
				}}
        onChange={(event, editor) => {
          setContent(editor.getData());
        }}
      />
    </div>
  )
}