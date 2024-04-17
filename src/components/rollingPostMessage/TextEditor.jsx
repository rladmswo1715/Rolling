import './textEditor.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "ckeditor5-custom-build";

export default function TextEditor({setData}) {
  
  const edrtorConfiguration = {
		toolbar: {
			items: [
				'Bold',
				'italic',
				'underline',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'fontBackgroundColor',
				'undo',
				'redo'
			]
		},
		language: 'ko',
  };
  
  return ( 
    <div>
      <CKEditor
        editor={ Editor }
        config={edrtorConfiguration}
				style={{ height: '300px' }}
      />
    </div>
  )
}