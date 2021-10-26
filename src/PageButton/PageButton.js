import React, {useState} from "react";
import styles from './PageButton.module.css'
import ModalWindow from "../ModalWindow/ModalWindow";


const PageButton = () => {

    const [isModalActive, setIsModalActive] = useState(false)
    const [isVisibility, setIsVisibility] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const handleOnChangeInputValue = event => setInputValue(event.target.value)

    let sum = parseInt(inputValue * 12 * 13/100)

    const handleOnClickCount = () => {
        setIsVisibility(false)
    }


    return(
        <div className={styles.container__background}>
            <div className={styles.container__background_button}>
                <button className={styles.button__background}
                        onClick={() => setIsModalActive(true)}
                >Налоговый вычет</button>
            </div>
            <ModalWindow isModalActive={isModalActive} isVisibility={isVisibility}>
                <div className={styles.container__header}>
                    <button className={styles.button__exit} onClick={() => setIsModalActive(false)}/>
                    <div className={styles.container__context_info}>
                        <h2 className={styles.info__name_heading}>Налоговый вычет</h2>
                        <p className={styles.info__text}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
                    </div>
                </div>
                <div className={styles.container__body}>
                    <div className={styles.container__context_func}>
                        <h4 className={styles.info__name_sum}>Ваша зарплата в месяц</h4>
                        <input className={styles.info__input} type="number" placeholder="Введите данные"
                               onChange={handleOnChangeInputValue}
                               value={inputValue}
                        />
                        <button className={styles.button__calc}
                                onClick={handleOnClickCount}
                        >Рассчитать</button>
                        <div className={styles.container__context_result} hidden={isVisibility}>
                            <h5 className={styles.info__name_result}>Итого можете внести <br/>в качестве досрочных:</h5>
                            <ul className={styles.unordered__list}>
                                <li className={styles.unordered__list_point}>
                                    <input className={styles.unordered__list_point_checkbox_first} type="checkbox" id="point_first" />
                                    <label htmlFor="point_first">{sum} рублей <span className={styles.unordered__list_point_year}>в 1-ый год</span></label>
                                </li>
                                <li className={styles.unordered__list_point}>
                                    <input className={styles.unordered__list_point_checkbox_second} type="checkbox" id="point_second" />
                                    <label htmlFor="point_second">{sum} рублей <span className={styles.unordered__list_point_year}>в 2-ой год</span></label>
                                </li>
                                <li className={styles.unordered__list_point}>
                                    <input className={styles.unordered__list_point_checkbox_third} type="checkbox" id="point_third" />
                                    <label htmlFor="point_third">{sum} рублей <span className={styles.unordered__list_point_year}>в 3-ий год</span></label>
                                </li>
                                <li className={styles.unordered__list_point}>
                                    <input className={styles.unordered__list_point_checkbox_fourth} type="checkbox" id="point_fourth" />
                                    <label htmlFor="point_fourth">{sum} рублей <span className={styles.unordered__list_point_year}>в 4-ый год</span></label>
                                </li>
                                <li className={styles.unordered__list_point}>
                                    <input className={styles.unordered__list_point_checkbox_five} type="checkbox" id="point_fifth"/>
                                    <label htmlFor="point_fifth">{sum} рублей <span className={styles.unordered__list_point_year}>в 5-ый год</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.container__context_select}>
                        <h5 className={styles.info__name_select}>Что уменьшаем?</h5>
                        <input className={styles.select_radiobutton} type="radio" id="first" name="select_radiobutton" value="time"/>
                        <label className={styles.select_radiobutton_label_first} htmlFor="first">Срок</label>
                        <input className={styles.select_radiobutton} type="radio" id="second" name="select_radiobutton" value="sum"/>
                        <label className={styles.select_radiobutton_label_second} htmlFor="second">Платеж</label>
                    </div>
                </div>
                <div className={styles.container__footer}>
                    <button className={styles.footer_button}>Добавить</button>
                </div>
            </ModalWindow>
        </div>
    )
}

export default PageButton