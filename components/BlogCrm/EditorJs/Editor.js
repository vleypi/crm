import EditorJS from '@editorjs/editorjs'

import ImageTool from '@editorjs/image';
import HeaderTool from '@editorjs/header';
import TableTool from '@editorjs/table'
import ListTool from '@editorjs/list'
import InlineCodeTool from '@editorjs/inline-code';
import { useEffect, useRef, useState } from 'react'
import TextareaAutosize  from 'react-textarea-autosize'
import styles from '../../../styles/blog_crm/editor/editor.module.css'
import Publish from './Publish/Publish'

const Editor = ({blog}) => {

    const [header,setHeader] = useState(blog.header)

    const editor = useRef()

    const [blocks,setBlocks] = useState([])

    const onChange = async (e) => {

      const output = await editor.current.save()

      setBlocks(output.blocks)
    };

    
    const textareaSaver = (e) => {
        setHeader(e.target.value)
    }

    useEffect(()=>{
        editor.current = new EditorJS({
            placeholder: 'Нажми Tab для выбора инструмента',
            data: {
              blocks: blog.blocks
            },
            tools: {
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: `http://62.113.96.105:5001/api/blog/uploadImg`,
                        }
                    }
                },
                table: TableTool,
                list: ListTool,
                inlineCode: InlineCodeTool,
                header: HeaderTool
            },
            onChange,
            i18n: {
                /**
                 * @type {I18nDictionary}
                 */
                messages: {
                  /**
                   * Other below: translation of different UI components of the editor.js core
                   */
                  ui: {
                    "blockTunes": {
                      "toggler": {
                        "Click to tune": "Нажмите, чтобы настроить",
                        "or drag to move": "или перетащите"
                      },
                    },
                    "inlineToolbar": {
                      "converter": {
                        "Convert to": "Конвертировать в"
                      }
                    },
                    "toolbar": {
                      "toolbox": {
                        "Add": "Добавить"
                      }
                    }
                  },
              
                  /**
                   * Section for translation Tool Names: both block and inline tools
                   */
                  toolNames: {
                    "Text": "Параграф",
                    "Image": "Картинка",
                    "Heading": "Заголовок",
                    "List": "Список",
                    "Warning": "Примечание",
                    "Checklist": "Чеклист",
                    "Quote": "Цитата",
                    "Code": "Код",
                    "Delimiter": "Разделитель",
                    "Raw HTML": "HTML-фрагмент",
                    "Table": "Таблица",
                    "Link": "Ссылка",
                    "Marker": "Маркер",
                    "Bold": "Полужирный",
                    "Italic": "Курсив",
                    "InlineCode": "Моноширинный",
                  },
              

                  tools: {
                    "warning": { 
                      "Title": "Название",
                      "Message": "Сообщение",
                    },
    
                    "link": {
                      "Add a link": "Вставьте ссылку"
                    },
                    "stub": {
                      'The block can not be displayed correctly.': 'Блок не может быть отображен'
                    }
                  },
              

                  tunes: {
                    "delete": {
                      "Delete": "Удалить"
                    },
                    "moveUp": {
                      "Move up": "Переместить вверх"
                    },
                    "moveDown": {
                      "Move down": "Переместить вниз"
                    }
                  },
                }
              },
        })
    },[])
  

    return (
            <div className={styles.editor} id="editor">
               <div className={styles.editorContainer}>
                    <TextareaAutosize 
                        value={header}
                        placeholder='Заголовок' 
                        maxLength="120"
                        className={styles.header}
                        onChange={textareaSaver}
                        autoFocus
                    />
                    <div id="editorjs" className={styles.editorjs}></div>
               </div>
               <Publish styles={styles} blocks={blocks} header={header} blog={blog}/>
            </div>
    )
}

export default Editor