import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDate } from '../utilities/dateFormater'
import charLimiter from '../utilities/charLimiter'
import colorData from '../utilities/colorData'

// eslint-disable-next-line react/prop-types
const Memo = ({ handlePriviewPaneClick, data, handleDeleteBtn, handleArchiveMoveBtn, usage }) => {
    const { title, body, createdAt, id, colorId } = data ?? {
        title: null,
        body: null,
        createdAt: null,
        id: null,
        colorId: 'colr6'
    }
    const currentColor = colorData.find(color => color.id === colorId)
    const { headColor, bodyColor } = currentColor.color
    
    const usageFor = usage === 'archive' ? ({ icon: 'fa-box-archive', text: 'Archive' }) : ({ icon: 'fa-note-sticky', text: 'Move' })

    return (
        <div className={`rounded-md ${bodyColor} relative w-64 h-72 mx-5 my-5 text-white`}>
            <div className={`w-full ${headColor}  h-3 rounded-t-md`}></div>
            <div className="p-2">
                <h1 className=" text-2xl font-semibold border-b-2 border-white">{charLimiter(title, 25)}</h1>
                <div className="flex justify-end">
                    <span className=" text-lg">{formatDate(createdAt)}</span>
                </div>
                <p className=" text-lg">{charLimiter(body)}</p>
                <div className="absolute w-full h-full left-0 top-0 opacity-0 hover:opacity-100 hover:bg-alphaWhite-950 ease-in duration-200">
                    <div className="flex flex-col justify-center h-4/5 hover:text-blue-700 text-center cursor-pointer" onClick={() => handlePriviewPaneClick(id)}>
                        <FontAwesomeIcon className="" icon="fa-solid fa-magnifying-glass" size="2xl" />
                        Preview
                    </div>
                    <div className="flex h-1/5">
                        <div className="w-1/2 flex flex-col justify-center hover:text-red-700 text-center hover:bg-white cursor-pointer" onClick={() => handleDeleteBtn(id)}>
                            <FontAwesomeIcon className=" tra" icon="fa-solid fa-trash" size="2xl" />
                            Delete
                        </div>
                        <div className="w-1/2 flex flex-col justify-center hover:text-yellow-700 text-center hover:bg-white cursor-pointer" onClick={() => handleArchiveMoveBtn(id)}>
                            <FontAwesomeIcon icon={`fa-solid ${usageFor.icon}`} size="2xl" />
                            {usageFor.text}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Memo