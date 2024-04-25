import './textEditor.scss';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState, useContext } from 'react';
import { useFormDataSet } from '../../hooks/useFormDataSet';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';
/* 툴바 custom import */
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { List  } from '@ckeditor/ckeditor5-list';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { FontBackgroundColor } from '@ckeditor/ckeditor5-font';

const editorConfiguration = {
  plugins: [ Essentials, Bold, Underline, Italic, Paragraph, List, Indent, FontBackgroundColor, IndentBlock ],
  toolbar: [ 
            'bold', 'italic','underline', 'bulletedList', 'numberedList',
            '|',
            'outdent', 'indent',
				    '|',
				    'fontBackgroundColor', 'undo', 'redo'
          ]
};

export default function TextEditor() {
	const [content, setContent] = useState('');
  const {setData} = useContext(MsgCreateDataSet);

	useFormDataSet(setData, 'content', content);
  
  return ( 
    <div>
      <CKEditor
        editor={ ClassicEditor }
        config={ editorConfiguration }
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