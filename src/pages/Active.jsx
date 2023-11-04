import { useOutletContext } from 'react-router-dom';
import Memo from '../components/Memo';
import { useEffect, useState } from 'react';

const ActiveFragment = () => {
    const { handlePriviewPaneClick, tempResult, setMData } = useOutletContext();
    const [checkData, setCheckData] = useState(true);
    const handleDeleteBtn = (idMemo) => {
        setMData(tempResult.filter(item => item.id !== idMemo))
    }
    const handleArchiveMoveBtn = (idMemo) => {
        setMData(tempResult.map(item => {
            if (item.id === idMemo) {
                return { ...item, archived: true }
            }
            return item
        }))
    }

    useEffect(() => {
        setCheckData(tempResult.some(item => item.archived === false))
    }, [tempResult])

    return checkData === true ?
        tempResult.map((item) => (
            item.archived === false ? (<Memo handlePriviewPaneClick={handlePriviewPaneClick} key={item.id} data={item} handleDeleteBtn={handleDeleteBtn} handleArchiveMoveBtn={handleArchiveMoveBtn} usage='archive' />) : ('')
        )) : (
            <h1 className='text-white text-6xl'>No Note...</h1>
        )
}
export default ActiveFragment;