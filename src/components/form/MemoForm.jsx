/* eslint-disable react/prop-types */
import { formatDate, formatTime } from '../../utilities/dateFormater'
import colorData from '../../utilities/colorData';
import InputRadioCustom from './InputRadioCustom';

const MemoForm = ({ DateNow, handlechangeNewMemo, formValue, TitleValLength }) => {
    const [titleValLength, setTitleValLength]= TitleValLength
   
    const handlechangeTitle = (event) => {
        handlechangeNewMemo(event)
        setTitleValLength(event.target.value.length)
    }
    return (
        <form className="container mx-auto px-2 text-white overflow-y-auto customMaxH">
            <div className="relative">
                <input type="text" name="title" id="" placeholder="Title Here" value={formValue.title} className="w-full text-5xl bg-transparent pr-20 border-b-4 border-white outline-none" autoComplete="off" maxLength={50} onChange={handlechangeTitle} />
                <div className="absolute inset-y-0 right-0 flex items-center  pointer-events-none">
                    <h1 className=" text-2xl">{titleValLength}/50</h1>
                </div>
            </div>
            <div className="flex justify-between">
                <h3 className="text-xl">{formatDate(DateNow)}</h3>
                <h3 className="text-xl">{formatTime(DateNow)}</h3>
            </div>
            <textarea name="body" id="" cols="30" rows="10" value={formValue.body} className="resize-none w-full my-10 text-2xl h-full bg-transparent outline-none" placeholder="Add Memo Here" onChange={handlechangeNewMemo}></textarea>

            <div className="flex justify-center flex-wrap items-center w-3/4 mx-auto mt-4">
                {colorData.map(item => (<InputRadioCustom key={item.id} data={item} handleChange={handlechangeNewMemo} />))}

            </div>

        </form>
    )
}

export default MemoForm