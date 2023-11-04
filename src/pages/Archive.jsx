import { useOutletContext } from 'react-router-dom';
import Memo from '../components/Memo';
import { useEffect, useState } from 'react';

const ArchiveFragment = () => {
    const { handlePriviewPaneClick, tempResult, setMData } = useOutletContext();
    const [checkData, setCheckData] = useState(true);
    const handleDeleteBtn = (idMemo) => {
        setMData(tempResult.filter(item => item.id !== idMemo))
    }
    const handleArchiveMoveBtn = (idMemo) => {
        setMData(tempResult.map(item => {
            if (item.id === idMemo) {
                return { ...item, archived: false }
            }
            return item
        }))
    }

    useEffect(() => {
        setCheckData(tempResult.some(item => item.archived === true))
    }, [tempResult])

    return checkData === true ?
        tempResult.map((item) => (
            item.archived === true ? (<Memo handlePriviewPaneClick={handlePriviewPaneClick} key={item.id} data={item} handleDeleteBtn={handleDeleteBtn} handleArchiveMoveBtn={handleArchiveMoveBtn} />) : ('')
        )) : (
            <h1 className='text-white text-6xl'>No Note...</h1>
        )

}
export default ArchiveFragment;