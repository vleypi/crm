import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image';
import HeaderTool from '@editorjs/header';
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize  from 'react-textarea-autosize'
import { setEditor } from '../../../store/slices/editor'
import styles from '../../../styles/blog_crm/editor/editor.module.css'
import Publish from './Publish/Publish'

const Editor = () => {

    const dispatch = useDispatch()

    const header = useRef()

    const editor = new EditorJS({
        placeholder: 'Нажми Tab для выбора инструмента',
        data:{
           
        },
        tools: {
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: 'http://localhost:5001/api/blog/uploadImg', // Your backend file uploader endpoint
                    },
                    actions: [
                        {
                            name: 'new_button',
                            icon: '<svg>...</svg>',
                            title: 'New Button',
                            toggle: true,
                            action: (name) => {
                                alert(`${name} button clicked`);
                            }
                        }
                    ]
                }
            },
            header: HeaderTool
        },
        onChange: (e)=>{
            save()
        },
        onReady: () =>{
            
        }
    })

    const save = () =>{
        editor.save().then(async outputData=>{
            dispatch(setEditor({
                blocks: outputData,
                header: header.current.value
            }))
        })
    }

    let autosave = null
    
    const textareaSaver = () => {
        clearTimeout(autosave)

        if(header.current.value){
            autosave = setTimeout(()=>{
                save()
            },1000)
        }
        else{
            save()
        }
        
    }

  

    return (
            <div className={styles.editor} id="editor">
               <div className={styles.editorContainer}>
                    <TextareaAutosize 
                        ref={header}
                        placeholder='Заголовок' 
                        maxLength="120"
                        className={styles.header}
                        onChange={textareaSaver}
                        autoFocus
                    />
                    <div id="editorjs" className={styles.editorjs}></div>
               </div>
               <Publish styles={styles}/>
            </div>
    )
}

export default Editor