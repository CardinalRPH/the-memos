import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import MemoForm from './form/MemoForm';

// eslint-disable-next-line react/prop-types
const NewMemo = ({ blurState, setMemoData, memoData }) => {
    const [maximize, setMaximize] = useState('')
    const [memoText, setMemoText] = useState({
        icon: 'plus',
        text: 'Create New Memo'
    })
    const [DateNow, setDateNow] = useState(new Date().toISOString())
    const [inputForm, setInputForm] = useState({
        id: Date.now(),
        title: '',
        body: '',
        colorId: 'colr6',
        createdAt: null,
        archived: false,
    })

    const [titleValLength, setTitleValLength] = useState(0);

    const handleNewMemoClick = () => {
        setMaximize(maximize === 'create-memo-hide' || maximize === '' ? 'create-memo-show' : 'create-memo-hide')
        setDateNow(new Date().toISOString());

        if (inputForm.title !== '' && inputForm.body !== '') {
            saveNewData();
        }
    }

    const handlechangeNewMemo = (event) => {
        setInputForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const saveNewData = () => {
        setMemoData([...memoData, { ...inputForm, createdAt: DateNow }])
        setInputForm({
            id: Date.now(),
            title: '',
            body: '',
            colorId: 'colr6',
            createdAt: DateNow,
            archived: false,
        })
        setTitleValLength(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDateNow(new Date().toISOString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [])

    useEffect(() => {
        const isMaximize = maximize === 'create-memo-show';
        const isNotEmpty = inputForm.title !== '' && inputForm.body !== '';

        if (isMaximize && isNotEmpty) {
            setMemoText({ icon: 'check', text: 'Save and Return' });
        } else if ((!isMaximize || isMaximize === '') && !isNotEmpty) {
            setMemoText({ icon: 'plus', text: 'Create New Memo' });
        } else {
            setMemoText({ icon: 'minus', text: 'Return' });
        }
    }, [inputForm, maximize]);

    return (
        <div className={`fixed w-full bottom-0 h-full create-memo z-10 pl-16 bg-slate-600 customShadow ${maximize} ${blurState}`}>
            <div className="flex flex-col justify-center items-center m-3 cursor-pointer" onClick={handleNewMemoClick}>
                <div className="border-t-4 border-white pb-1 h-1 w-1/4"></div>
                <div className="flex px-3 text-white">
                    <FontAwesomeIcon icon={`fa-solid fa-${memoText.icon}`} className="px-1" size="xl" />
                    <h4 className="px-1 text-xl">{memoText.text}</h4>
                </div>
            </div>
            {/* Note form */}
            <MemoForm DateNow={DateNow} handlechangeNewMemo={handlechangeNewMemo} formValue={inputForm} TitleValLength={[titleValLength, setTitleValLength]} />

        </div>
    )
}

export default NewMemo;