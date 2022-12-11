import styles from '../styles/main_page/style.module.css'

import Link from "next/link"
import Image from 'next/image'
import centr from '../images/main_page/img/centr.svg'
import solomon__ from '../images/main_page/img/solomon__.svg'
import whatsup from '../images/main_page/img/whatsup.png'
import tictok from '../images/main_page/img/tictok.png'
import dzen2 from '../images/main_page/img/dzen2.svg'
import teleg from '../images/main_page/img/teleg.svg'
import vk2 from '../images/main_page/img/vk2.png'
import icons8 from '../images/main_page/img/icons8.svg'
import Group_300_1 from '../images/main_page/img/Group_300_1.svg'
import Vector from '../images/main_page/img/Vector.png'
import Ornament_12 from '../images/main_page/img/Ornament_12.svg'
import Fill_2329 from '../images/main_page/img/Fill_2329.svg'
import Group_1x from '../images/main_page/img/Group_1x.svg'
import Group_2 from '../images/main_page/img/Group_2.svg'
import Group_3 from '../images/main_page/img/Group_3.svg'
import Group_4 from '../images/main_page/img/Group_4.svg'
import Group_66 from '../images/main_page/img/Group_66.svg'
import Messaging_funCuate from '../images/main_page/img/Messaging_fun-cuate_.svg'
import CodingCuate_1 from '../images/main_page/img/Coding-cuate_1.svg'
import Group_67 from '../images/main_page/img/Group_67.svg'
import img1 from '../images/main_page/img/1.svg'
import img2 from '../images/main_page/img/2.svg'
import img3 from '../images/main_page/img/3.svg'
import Group_2981 from '../images/main_page/img/Group_298.svg'
import pug from '../images/main_page/img/____07_10_2022___pag.jpg'
import img1B from '../images/main_page/img/1B.svg'
import img2B from '../images/main_page/img/2B.svg'
import img3B from '../images/main_page/img/3B.svg'
import Group_56 from '../images/main_page/img/Group_56.svg'
import dzen from '../images/main_page/img/dzen.svg'
import telegram from '../images/main_page/img/telegram.svg'
import tiktok from '../images/main_page/img/tiktok.svg'
import vk from '../images/main_page/img/vk.svg'
import surprisebox from '../images/main_page/img/surprisebox.svg'
import blog1 from '../images/main_page/img/blog1.jpg'
import blog2 from '../images/main_page/img/blog2.jpg'
import blog3 from '../images/main_page/img/blog3.jpg'
import Head from 'next/head'
import IMG_4022 from '../images/main_page/img/IMG_4022.jpg'
import tild6337_group_313 from  '../images/main_page/img/tild6337-3038-4533-a266-623935396437__group_313.svg'
import Screenshot_44 from '../images/main_page/img/Screenshot_44.jpg'



import Typed from 'react-typed';
import { Router, useRouter } from 'next/router'
import { getPosts } from '../controllers/pagesController/getPosts'



const MainPage = (props) =>{

    const router = useRouter()

    const posts = props.posts.slice(0,3).map((post)=>(
        <div className={styles.bottom_section_form_box} onClick={()=>router.push(`/blog/${post.blog_id}`)}>
            <div className={styles.bottom_section_form_box_img}>
                <div className={styles.bottom_section_blog_img}>
                    <img src={post.image}/>
                </div>
                <h5 style={{paddingBottom: "5%", marginTop: "5%"}}>{post.header}</h5>
                <p>03/11/2022</p>
            </div>
        </div>
    ))

    return(
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;1,300&amp;display=swap" rel="stylesheet" />
            </Head>
            <header>
                <nav className={styles.navigation_panel}>
                    <div className={styles.navigation_panel_logo}>
                        <Image src={solomon__} style = "width: 100%; height: 100%;"/>
                    </div>
                    <div className={styles.navigation_panel_link}>
                        <a href="#snakebox"><p className={styles.navigation_panel_p_link}>Процесс обучения</p></a>
                        <a href="#programm"><p className={styles.navigation_panel_p_link}>Экспресс-программа</p></a>
                        <a href="#contact"><p className={styles.navigation_panel_p_link}>Контакты</p></a>
                        <a href="#blog"><p className={styles.navigation_panel_p_link}>Блог</p></a>
                        <p className={styles.navigation_panel_p_link}>+7(383)23-59-131</p>
                    </div>
                    <div className={styles.navigation_panel_right}>
                        <button className={styles.login} onClick={()=>router.push('/auth')}>Вход</button>
                    </div>
                </nav>
            </header>
            <section className={styles.general_section}>
                <div className = {styles.general_banner}>
                <article className={styles.general_banner_content}>
                    <p style={{fontSize: "20px",fontWeight: "bold"}}>Онлайн школа иностранных языков SOLOMON +</p>
                        <div className={styles.js}>
                            <h1 style={{fontSize: "56px"}}>
                            <span style={{color:"rgb(47, 93, 192)"}}>ПРОСТО </span>СКАЖИ МИРУ
                            <span className={styles.p_text} id={styles.text}>  <Typed
                                    strings={["HELLO", "BONJOUR", "HALLO","你好","HEY"]}
                                    typeSpeed={150}
                                    loop
                                /></span></h1>
                        </div>
                    <h3 style={{fontSize: "24px"}}>БОЛЕЕ ТЫСЯЧИ НАШИХ УЧЕНИКОВ ПОСТАВИЛИ ЦЕЛЬ И ЗАГОВОРИЛИ НА ДРУГОМ ЯЗЫКЕ.</h3>
                    <h3 style={{color:"rgb(47, 93, 192)", fontSize: "24px", fontStyle: "italic", fontWeight: "900"}}>ПОРА СДЕЛАТЬ ПЕРВЫЙ ШАГ!</h3>
                </article>
                <div className = {styles.general_banner_img}>
                    <Image src={Group_300_1} style="width: 100%;"/>
                </div>
                </div>
        <div className={styles.general_banner}>
            <div className={styles.general_banner_form}>
                <p>ПОПРОБУЙТЕ БЕСПЛАТНО, ЗАПОЛНИВ ФОРМУ</p>
                <input className={styles.action_form} id={styles.action_form_first} type="text" placeholder="Имя"/>
                <input className={styles.action_form} id={styles.action_form_first} type="tel" placeholder="8(999)999999"/>
                <input className={styles.action_form} id={styles.action_form_first} type="email" placeholder="Электронная почта"/>
                <label><input className={styles.action_check_form} type="checkbox"/> Согласен(а) с <a href="https://solomon.plus/privacy" style={{color: "#ff8562"}}>политикой конфиденциальности</a></label>
                <button className={styles.general_banner_form_button} id={styles.action_form_first} type="submit">ОТПРАВИТЬ</button>
            </div>
            <div className={styles.general_banner_content}>
                <div className={styles.general_banner_content_right}>
                    <div>
                        <Image src={Vector} width={22} height={22}/>
                    </div>
                    <p className={styles.text_left}>Попробуйте бесплатно - узнайте свой уровень и подберите удобный формат и программу обучения</p>
                </div>
                <div className={styles.general_banner_content_right}>
                    <div>
                        <Image src={Vector} width={22} height={22}/>
                    </div>
                    <p className={styles.text_left}>Подбор программ и стоимости под ваши цели - экзамены, путешествие и общее повышение уровня</p>
                </div>
                <div className={styles.general_banner_content_right}>
                    <div>
                        <Image src={Vector} width={22} height={22}/>
                    </div>
                    <p className={styles.text_left}>Учитесь и копите баллы - снижайте стоимость для себя, родных и друзей</p>
                </div>
                <div className={styles.general_banner_content_right}>
                    <div>
                        <Image src={Vector} width={22} height={22}/>
                    </div>
                    <p className={styles.text_left}>Бесплатно окружите себя английским через нашу экосистему</p>
                </div>
                <div className={styles.general_banner_content_right}>
                    <div>
                        <Image src={Vector} width={22} height={22}/>
                    </div>
                    <p className={styles.text_left}>Индивидуальные заняти по 60 мин. от 799 ₽</p>
                </div>
            </div>
        </div>
        <div className ={styles.general_banner_second}>
            <article className={styles.general_banner_content}>
            <h2 style={{fontSize: '46px', paddingBottom: "5%"}}><span style={{color:"rgb(47, 93, 192)"}}>ПОЧЕМУ СТОИТ ИЗУЧАТЬ</span> ИНОСТРАННЫЕ ЯЗЫКИ?</h2>
            </article>
            <div className={styles.general_banner_grid}>
                <div className={styles.general_banner_content_grid}>
                    <p className={styles.grid_top_text}>УВЕРЕННОСТЬ В ПУТЕШЕСТВИЯХ ЗА ГРАНИЦЕЙ</p>
                    <p className={styles.grid_bottom_text}>Узнать маршрут, купить кофе, познакомится с новыми людьми - чувствуйте себя комфортно в любой ситуации и стране</p>
                    <div className={styles.general_banner_grid_img}>
                        <Image src={Ornament_12}/>
                    </div>
                </div>
                <div className={styles.general_banner_content_grid}>
                    <p className={styles.grid_top_text}>КОМПЬЮТЕРНЫЕ И МОБИЛЬНЫЕ ИНТЕРФЕЙСЫ</p>
                    <p className={styles.grid_bottom_text}>Легко ориентируйтесь в любой программе или приложении</p>
                </div>
                <div className={styles.general_banner_content_grid}>
                    <p className={styles.grid_top_text}>СМЕНИТЬ МЕСТО ЖИТЕЛЬСТВА</p>
                    <p className={styles.grid_bottom_text}>Делайте самые первые и важные шаги к своей мечте</p>
                </div>
                <div className={styles.general_banner_content_grid} >
                    <p className={styles.grid_top_text}>КАРЬЕРА</p>
                    <p className={styles.grid_bottom_text}>Увеличьте свою ценность как специалист и повышайте свой уровень дохода</p>
                </div>
                <div className={styles.general_banner_content_grid}>
                    <p className={styles.grid_top_text}>"ПОСТУПИ В ВУЗ НА БЮДЖЕТ"</p>
                    <p className={styles.grid_bottom_text}>В топовый ВУЗ в стране или за границей</p>
                </div>
            </div>
        </div>
    </section>
    <section className={styles.second_section}>
        <div className={styles.second_section_top}>
            <h2 style={{fontSize: '46px', paddingBottom: "5%"}}>ПОЧЕМУ <span style={{ color:"rgb(47, 93, 192)"}}>SOLOMON PLUS</span></h2>
            <div className={styles.second_section_top_box}>
                <div className={styles.second_section_card}>
                <div className={styles.second_section_card_imgtop}><Image src={Fill_2329}/></div>
                <div className ={styles.second_section_card_bottom_img}><Image src={Group_1x}/></div>
                    <p className={styles.second_section_card_text}>АВТОРСКИЙ МЕТОД</p>
                    <p className={styles.second_section_card_texttop}>C нами вы полюбите учится и достигните высоких результатов</p>
                </div>
                <div className={styles.second_section_card}>
                <div className={styles.second_section_card_imgtop}><Image src={Fill_2329}/></div>
                <div className = {styles.second_section_card_bottom_img}><Image src={Group_2}/></div>
                    <p className={styles.second_section_card_text}>ВЫГОДА</p>
                    <p className={styles.second_section_card_texttop}>Стоимость обучения ниже на 15% в сравнении с другими школами, а лучшие студенты получают стипендию</p>
                </div>
                <div className={styles.second_section_card}>
                <div className={styles.second_section_card_imgtop}><Image src={Fill_2329}/></div>
                <div className = {styles.second_section_card_bottom_img}><Image src={Group_3}/></div>
                    <p className={styles.second_section_card_text}>РЕЗУЛЬТАТ</p>
                    <p className={styles.second_section_card_texttop}>Понять как говорить и мыслить на иностранном языке уже через 2 месяца</p>
                </div>
                <div className={styles.second_section_card}>
                <div className={styles.second_section_card_imgtop}><Image src={Fill_2329}/></div>
                <div className = {styles.second_section_card_bottom_img}><Image src={Group_4}/></div>
                    <p className={styles.second_section_card_text}>СОВРЕМЕННЫЕ И РЕДКИЕ ЯЗЫКИ</p>
                    <p className={styles.second_section_card_texttop}>Учите английский, французский, немецкий, а также турецкий, испанский, персидский, иврит, арабский, китайский, хинди</p>
                </div>
            </div>
        </div>
        <div className={styles.second_section_snake}>
                <div className={styles.second_section_snake_box}>
                <h2 style={{fontSize: '46px', paddingBottom: "5%"}} id={styles.snakebox}><span style={{color: "rgb(47, 93, 192)"}}>ПРОЦЕСС</span> ОБУЧЕНИЯ</h2>
                    <div className = {styles.second_section_snake_box_text}>
                        <p className={styles.second_section_snake_text}>Бесплатное пробное занятие на любую программу</p>
                        <p className={styles.second_section_snake_text}>3 месяца-ваше знание языка становится увереннее</p>
                        <p className={styles.second_section_snake_text}>9 месяцев</p>
                    </div>
                    <div className = {styles.snake_img}>
                    <Image src={Group_66} style={{width: "100%"}}/>
                    </div>
                        <div className={styles.second_section_snake_block_box}>
                            <div className={styles.second_section_snake_block}>01</div>
                            <div className={styles.second_section_snake_block}>02</div>
                            <div className={styles.second_section_snake_block}>03</div>
                            <div className={styles.second_section_snake_block}>04</div>
                            <div className={styles.second_section_snake_block}>05</div>
                            <div className={styles.second_section_snake_block}>06</div>
                        </div>
                    <div className = {styles.second_section_snake_bottom_text}>
                        <p className={styles.second_section_snake_text}>Первые успехи</p>
                        <p className={styles.second_section_snake_text}>Смело познакомитесь с иностранцем</p>
                        <p className={styles.second_section_snake_text}>Смело познакомитесь с иностранцем</p>      
                </div>
        </div>
        </div>
        <div className={styles.second_section_center_box}>
                    <div className={styles.second_section_center_box_img}>
                        <Image src={tild6337_group_313}  sizes="100vw"/>
                    </div>
                    <div className={styles.second_section_center_box_top}>
                    <Image src={Messaging_funCuate}/>
                        <ul>
                            <h2 style={{fontSize: '46px', paddingBottom: "5%"}}>ДЛЯ ВЗРОСЛЫХ</h2>
                            <li className={styles.second_section_center_box_top_li}>Составляем креативные уроки на Ваш вкус и любую тематику</li>
                            <li className={styles.second_section_center_box_top_li}>Увлекательные уроки и форматы обучения</li>
                            <li className={styles.second_section_center_box_top_li}>Расскажем о всех фишках, которые упростят Вам изучение языка с первых занятий</li>
                            <li className={styles.second_section_center_box_top_li}>Преподаватели на связи 24/7 для ответа на любые вопросы</li>
                            <li className={styles.second_section_center_box_top_li}>Со взрослыми мы берем программу Cambridge и обязательно изучаем Business English</li>
                        </ul>
                    </div>
                    <div className={styles.second_section_center_box_top} style={{padding: "0 0 5% 10%", color: "white"}}>
                        <ul >
                            <h2 style={{fontSize: '46px', paddingBottom: "5%"}}>С ДЕТЬМИ</h2>
                            <li>Учим понимать и говорить уже с первых занятий</li>
                            <li>Наставляем и дружим с ребенком для достижения фундаментальных результатов</li>
                            <li>Находим подход к любому ребенку</li>
                            <li>Обучаем в игровом формате</li>
                            <li>Предоставляем родителям видеозаписи уроков и отчеты об успеваемости ребенка</li>
                        </ul>
                        <Image src={CodingCuate_1} style="width: 550px;"/>
                    </div>              
                    </div>
                    <div className={styles.second_section_bottom_box}>
                    <h2  style={{width: "60%",fontSize: '46px', paddingBottom: "5%"}}><span style={{color:"rgb(47, 93, 192)"}}>УЧИТЬ ИНОСТРАННЫЙ ЯЗЫК </span>C <span style={{color:"rgb(99, 168, 199)"}}> SOLOMON+</span> ЭТО</h2>
                        <div className={styles.general_banner}>
                        <div className={styles.class}>
                        <Image src={Group_67} style="width: fit-content;"/>
                        </div>
                            <div className = {styles.general_banner_content}>
                                <div className={styles.general_banner_content_right} style={{alignItems: "baseline"}}>
                                <div style={{width: "22px"}}>
                                    <Image src={Vector} style="width: 22px; height: 22px;"/>
                                </div>
                                    <div className={styles.second_section_bottom_text}>
                                        <h3 className={styles.second_section_bottom_text_h3} >КОМФОРТ</h3>
                                        <p className={styles.text_left}>Профессиональный подбор преподавателя для Вашего комфортного взаимодействия и обучения. Мы найдем подход для каждого студента, согласно его уровню, целям и планам.</p>
                                    </div>
                                </div>
                                <div className={styles.general_banner_content_right} style={{alignItems: "baseline"}}>
                                <div style={{width: "22px"}}>
                                    <Image src={Vector}  style="width: 22px; height: 22px;"/>
                                </div>
                                <div className={styles.second_section_bottom_text}>
                                    <h3 className={styles.second_section_bottom_text_h3}>ВРЕМЯ</h3>
                                    <p className={styles.text_left}>Выберите удобный график обучения или составьте свой план - мы подберем преподавателя, который всегда будет начинать урок вовремя или вернем стоимость занятия.</p>
                                </div>
                                </div>
                                <div className={styles.general_banner_content_right} style={{alignItems: "baseline"}}>              
                                <div style={{width: "22px"}}>
                                    <Image src={Vector}  style="width: 22px; height: 22px;"/>
                                </div>
                            <div className={styles.second_section_bottom_text}>
                                <h3  className={styles.second_section_bottom_text_h3}>ЛОЯЛЬНОСТЬ И РЕЗУЛЬТАТ</h3>
                                <p className={styles.text_left}>У каждого студента могут быть свои причины изучать язык. Не подходят наши программы? Составим персональный курс с индивидуальной стоимостью обучения.</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    <div className={styles.second_section_bottom_box_reviews}>
                        <h2 style={{color: "#2f5dc0",fontSize: '46px', paddingBottom: "5%"}}>УЧЕНИКИ СТАНОВЯТСЯ <br/>НАШИМИ ДРУЗЬЯМИ</h2>
                        <div className={styles.phone_img_bottom}>
                        <Image src={img1}/>
                        <Image src={img2}/>
                        <Image src={img3}/>
                        </div>
                        <div className={styles.phone_img}>
                            <div className={styles.phone_under_img}>
                            <Image src={IMG_4022}/>
                            </div>
                            <div className={styles.phone_under_img}>
                            <Image src={Group_2981} style={{width: '270px'}}/>
                            </div>
                        </div>
                    </div>
        </div>
        <div className={styles.second_section_form_box}>
                    <Image src={pug} style={{width: "400px", borderRadius: "20px", webkitBoxShadow: "-1px -1px 8px 10px rgba(221, 222, 223, 0.50)",
        mozBoxShadow: "-1px -1px 8px 10px rgba(221, 222, 223, 0.50)",
        boxShadow: "-1px -1px 8px 10px rgba(221, 222, 223, 0.50)"}}/>
                    <div className={styles.second_section_form_box_text}>
                        <h2 style={{color: "white",fontSize: '46px', paddingBottom: "5%"}}>ГОСУДАРСТВЕННАЯ ЛИЦЕНЗИЯ</h2>
                        <div className={styles.second_section_form_box_img}>
                        <div className={styles.section_form_mark_img}>
                            <Image src={img1B} style="width: 81px;"/>
                        </div>
                            <p>Государство одобряет наши программы</p>
                        </div>
                        <div className={styles.second_section_form_box_img}>
                        <div className={styles.section_form_mark_img}>
                            <Image src={img2B} style="width: 81px;"/>
                        </div>
                            <p>С помощью лицензии сделай налоговый вычет</p>
                        </div>
                        <div className={styles.second_section_form_box_img}>
                        <div className={styles.section_form_mark_img}>
                            <Image src={img3B} style="width: 81px;"/>
                        </div>
                            <p>Оплати обучение материнским капиталом</p>
                        </div>
                    </div>
        </div>
    </section>
    <section className={styles.bottom_section}>
                <div className={styles.bottom_section_top}>
            <h2 style={{fontSize: '46px', paddingBottom: "5%"}}><span style={{color: "rgb(47, 93, 192)"}}>ПРОГРАММЫ </span>ОБУЧЕНИЯ</h2>
            <div class={styles.bottom_section_top_box}>
                <div className={styles.bottom_section_top_card}>
                    <h3 style={{paddingBottom: "10%"}}>ЭКОСИСТЕМА</h3>
                    <ul>Бесплатно
                        <li>Бесплатное обучение во всех соцсетях</li>
                        <li>Окружи себя языком везде и погрузись в языковую среду</li>
                        <li>Контент каждый день, прямые эфиры, подкасты</li>
                        <li>Просмотр фильмов, мультфильмов в онлайн-режиме с возможностью обсуждения</li>
                        <li>Языковые чаты</li>
                        <li>Знакомство не только с английским, но и с другими языками школы</li>
                        <li>Доступ к языковым клубам для активных подписчиков</li>
                    </ul>
                    <button className={styles.general_banner_form_button} type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
                <div className={styles.bottom_section_top_card}>
                    <h3>ОСНОВАЯ ПРОГРАММА "АНГЛИЙСКИЙ ЯЗЫК"</h3>
                    <ul>4 999 ₽ / мес.
                        <li>Профессиональные преподаватели</li>
                        <li>3 занятия по 1.5 часа в неделю</li>
                        <li>Группы из 4 человек</li>
                        <li>Языковой клуб с носителем языка</li>
                        <li>Увлекательные форматы уроков</li>
                    </ul>
                    <button className={styles.general_banner_form_sale}>Скидка до 15 % при покупке от 3 мес.</button>
                    <button className={styles.general_banner_form_button} type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
                <div className={styles.bottom_section_top_card}>
                    <h3 style={{paddingBottom: "10%"}}>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</h3>
                    <ul><span style={{color: "gray", textDecoration: "line-through"}}>1200 ₽ </span>800 ₽/ 1 занятие англ. яз.<br/>
                        <span style={{color: "gray", textDecoration: "line-through"}}>1300 ₽ </span>900 ₽/ 1 занятие кит. яз.
                        <li>Бесплатный пробный урок, определим уровень и программу обучения</li>
                        <li>Необходимое количество часов конкретному ученику, всё индивидуально</li>
                        <li>Удобное расписание и время</li>
                        <li>Бесплатные учебные материалы и пособия, вы платите только за обучение и за свой комфорт</li>
                        <li>При оплате сразу за год получаете в подарок занятия с носителем языка на год</li>
                    </ul>
                    <button className={styles.general_banner_form_button} type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
                <div className={styles.bottom_section_top_card}>
                    <h3 style={{paddingBottom: "10%"}}>ОСНОВНАЯ ПРОГРАММА "КИТАЙСКИЙ ЯЗЫК"</h3>
                    <ul>5 499 ₽
                        <li>Профессиональные преподаватели</li>
                        <li>3 занятия по 1.5 часа в неделю</li>
                        <li>Группы из 4-х человек</li>
                        <li>Языковой клуб с носителем языка</li>
                        <li>Увлекательные форматы уроков</li>
                    </ul>
                    <button className={styles.general_banner_form_button} type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
                <div className={styles.bottom_section_top_card}>
                    <h3 style={{paddingBottom: "10%"}}>ЯЗЫКОВОЙ КЛУБ</h3>
                    <ul>от 3 500 ₽
                        <li>Бесплатный пробный урок</li>
                        <li>2 занятия по 1.5 часа в неделю</li>
                        <li>Подходит для любого уровня от начального до продвинутого</li>
                        <li>Каждое занятие новые темы</li>
                        <li>Прокачай свой разговорный английский с носителями языка</li>
                        <li>Для каждого уровня свои программы </li>
                        <li>Удобное расписание и время</li>
                    </ul>
                    <button className={styles.general_banner_form_button}  type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
                <div className={styles.bottom_section_top_card}>
                    <h3 style={{paddingBottom: "10%"}}>ЭКСПРЕСС-ПРОГРАММА "АНГЛИЙСКИЙ ДЛЯ ПУТЕШЕСТВИЙ"</h3>
                    <ul>15 999 ₽ / 2 мес.
                        <li>3 занятия по 1.5 часа в неделю</li>
                        <li>Группы из 6 человек</li>
                        <li>2 месяца обучения</li>
                        <li>Практика с носителями языка</li>
                        <li>Универсальная программа, подойдет даже для самого ленивого студента</li>
                    </ul>
                    <button className={styles.general_banner_form_button}  type="submit"><a href="#form_submit">НАЧАТЬ ОБУЧЕНИЕ</a></button>
                </div>
            </div>
        </div>
                <div className={styles.bottom_section_center}>
            <div className={styles.bottom_section_center_box}>
            <div className={styles.bottom_section_box_img}>
                <Image src={centr} style="width: fit-content"/>
            </div>
                {/* <iframe style={{marginleft: "40%",
                        borderRadius: "20px",
                        width: "300", height: "520",
                        src: "https://www.youtube.com/embed/h5jRyda8Yw8",
                        title: "Алия,преподаватель по французскому",
                        frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen}}>
                </iframe> */}
            </div>
            <div className={styles.bottom_section_center_box}>
                <h2 style={{fontSize: '46px', paddingBottom: "5%"}}>ПРЕПОДАВАТЕЛИ</h2>
                <p>ТОЖЕ ЛЮДИ,СО СВОИМИ ИНТЕРЕСАМИ. ВЫБЕРИ СВОЕГО И СОВЕРШЕНСТВУЙ ИНОСТРАННЫЙ ЯЗЫК, РАЗГОВАРИВАЯ НА ЛЮБИМЫЕ ТЕМЫ</p>
                <ul className={styles.bottom_section_last_box}>
                    <li>ЯЗЫК<span className={styles.last_attribute}>Французский</span></li>
                    <li>ОПЫТ
                        <span className={styles.last_attribute}>2+ лет</span>
                    </li>
                    <li>ИНТЕРЕСЫ
                        <span className={styles.last_attribute}>Музыка</span>
                        <span className={styles.last_attribute}>Французская кухня</span>
                        <span className={styles.last_attribute}>Книги Виктора Гюго и Александра Дюма</span>
                    </li>
                </ul>
            </div>
        </div>
                <div className={styles.bottom_section_bottom}>
            <div className={styles.bottom_section_img}>
            <Image src={Group_56} style="width: 370px;"/>
                <p>Каждый день бот будет присылать тебе карточки на английском языке и мини-тесты.</p>
                <p>В боте три уровня - пройди их все и получи персональное предложение от школы.</p>
                <p style={{color: "#0088cc", fontWeight: "bold"}}>TELEGRAM</p>
                <button a href="https://telegram.me/solomonplus_bot" className={styles.general_banner_form_button} type="submit">ПОДКЛЮЧИТЬ ЧАТ - БОТ SOLOMON+</button>
            </div>
            <div className={styles.bottom_section_text}>
                <h2 style={{fontSize: '46px', paddingBottom: "5%"}}>ЭКОСИСТЕМА</h2>
                <p>БЕСПЛАТНО ИЗУЧАЙ АНГЛИЙСКИЙ ЯЗЫК В ПРИВЫЧНЫХ СОЦСЕТЯХ</p>
                <p id={styles.bottom_section_p_style}>ВСЕ СОЦИАЛЬНЫЕ СЕТИ</p>
                <div className={styles.bottom_section_logo_img}>
                    <Image src={dzen} style="width: 42px;"/>
                    <Image src={telegram} style="width: 42px;"/>
                    <Image src={tiktok} style="width: 42px;"/>
                    <Image src={vk} style="width: 42px;"/>
                </div>
                <div className={styles.bottom_button_form}>
                    <div className={styles.bottom_button_form_img}>
                        <Image src={Screenshot_44} style="borderRadius: 30px;"/>
                    </div>
                    <p>Киноклуб SOLOMON</p>
                    <p>Смотрим кино и сериалы в оригинале, развлекаемся и совершенствуем знание языка</p>
                    <label className={styles.bottom_button_form_label}>
                        <input className={styles.action_form} type="email" placeholder="Ваш e-mail"/>
                        <button className={styles.general_banner_form_button} >ПОДПИСАТЬСЯ</button>
                    </label>
                </div>
            </div>
        </div>
                <div id={styles.form_submit} className={styles.bottom_section_form_call}>
            <div className={styles.bottom_section_form_call_left}>
                    <p>Попробовать <span style={{color: "rgb(15, 93, 192)"}}>БЕСПЛАТНО</span> + в подарок вы получаете чек-лист по всем временам английского языка с практическими заданиями</p>
                <div className={styles.form_call_left_img}>
                    <Image src={surprisebox}/>
                </div>
            </div>
            <div className={styles.bottom_section_form_call_right}>
                <input  className={styles.action_form} type="text" placeholder="Имя"/>
                <input className={styles.action_form} type="text" placeholder="Фамилия"/>
                <input className={styles.action_form} type="tel" placeholder="+7 (999) 999999"/>
                <form>
                        <select className={styles.action_form} name="select" size="1">
                            <option selected value="s1">Цель обучения. Выберите вариант из списка</option>
                            <option value="s2">Для себя</option>
                            <option value="s3">Для работы</option>
                            <option value="s4">Повышение успеваемости</option>
                            <option value="s5">Олимпиада</option>
                            <option value="s6">Впр</option>
                            <option value="s7">ОГЭ</option>
                            <option value="s8">ЕГЭ</option>
                            <option value="s9">Международный экзамен</option>
                        </select>
                </form>
                <input className={styles.action_form} type="text" placeholder="Текущий уровень развития языка"/>
                <label>
                    <input className={styles.action_check_form} type="checkbox"/> Согласен (на) с <a href="https://solomon.plus/privacy" style={{color: "#ff8562"}}>политикой конфиденциальности</a></label>
                <button className={styles.general_banner_form_button} type="submit">Отправить</button>
            </div>
        <div className={styles.bottom_section_blog}></div>
        </div>
        {posts.length > 0 &&
            <div style={{cursor: 'pointer'}} className={styles.bottom_section_form_blog} onClick={()=>router.push(`/blog`)}>
                <div className={styles.bottom_section_form_text}>
                    <h2 style={{fontSize: '46px', paddingBottom: "5%"}} id={styles.blog}>БЛОГ</h2>
                    <h3 style={{paddingBottom: "5%"}}>ДЕЛИМСЯ ПОЛЕЗНОЙ ИНФОРМАЦИЕЙ ДЛЯ НАШИХ СТУДЕНТОВ</h3>
                </div>
                <div className={styles.bottom_section_form_blog_box}>
                    {posts}
                </div>
            </div>  
        }
    </section>
        <footer className={styles.footer_section}>
        <div className={styles.footer_section_box}>
        <Image src={solomon__} style={{width: "200px"}}/>
                 <div className={styles.footer_section_box_social}>
                    <div className={styles.social_footer}>
                        <a href="https://api.whatsapp.com/send/?phone=79930284898&text&type=phone_number&app_absent=0">
                        <Image src={whatsup} style="width: 100%"/>
                        </a>
                    </div>
                    <div className={styles.social_footer}>
                        <a href="https://www.tiktok.com/@_solomon_plus?_t=8VSerMvtM9a&_r=1">
                        <Image src={tiktok} style="width: 100%"/>
                        </a>
                    </div>
                    <div className={styles.social_footer}>
                        <a href="https://dzen.ru/solomonplus">
                        <Image src={dzen} style="width: 100%"/>
                        </a>
                    </div>
                    <div className={styles.social_footer}>
                        <a href="https://t.me/+99mHJlJXYus3ZTNi">
                        <Image src={teleg} style="width: 100%"/>
                        </a>
                    </div>
                    <div className={styles.social_footer}>
                        <a href="https://vk.com/ensolomon">
                        <Image src={vk} style="width: 100%"/>
                        </a>
                    </div>
                </div>
            <div id={styles.footer_section_text}>
                <p>© 2022 SOLOMON PLUS</p>
                <a href="https://solomon.plus/privacy" style={{color: "#ff8562", fontSize: "12px"}}>Политика конфиденциальности</a>
                <p>ИП МУЧКАЕВА ДИАНА ДМИТРИЕВНА</p>
                <p>ОГРНИП 322547600078525</p>
                <p>ИНН 540959551715</p>
                <p>г.Новосибирск</p>
            </div>
        </div>
        
        <div className={styles.footer_section_box}>
            <h5>НАВИГАЦИЯ</h5>
            <p>Процесс обучения</p>
            <p>Программы обучения</p>
            <p>О школе и основателях</p>
            <p>Узнай свой уровень</p>
        </div>
        <div className={styles.footer_section_box}>
            <h5 id={styles.contact}>КОНТАКТЫ</h5>
            <p>englishsolomon.en@gmail.com</p>
            <p>+ 7 (993) 028-48-98</p>
        </div>
    </footer>
        </>
    )
}


export default MainPage

export const getServerSideProps = async (ctx) => {
    const server = getPosts(ctx)
    return server
}