import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDate, formatTime } from '../utilities/dateFormater'
import colorData from '../utilities/colorData'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const PriviewPane = ({ paneMax, handlePriviewPaneClick, data }) => {
    const [theData, setTheData] = useState({
        title: null,
        body: null,
        createdAt: null,
        id: null,
        colorId: 'colr6'
    })
    const [theColor, setTheColor] = useState({
        headColor: 'bg-gray-700',
        bodyColor: 'bg-gray-500',
        gradientColor: 'from-gray-700 via-gray-700 to-gray-500'
    })

    useEffect(() => {
        if (data !== '') {
            setTheColor((colorData.find(color => color.id === theData.colorId)).color);
            setTheData(data)
        }
    }, [theData.colorId, data])

    return (
        <div className={`fixed top-0 flex flex-row-reverse right-0 h-full w-full z-20 priview-pane ${paneMax}`}>
            <div className={`flex h-full md:w-2/6 w-full ${theColor.bodyColor}`}>
                <div className={`flex flex-col justify-center ${theColor.headColor}`} onClick={handlePriviewPaneClick} >
                    <FontAwesomeIcon icon="fa-solid fa-angles-right" size="2xl" />
                </div>
                <div className="w-full px-5 overflow-y-auto max-h-screen">
                    <h1 className="py-2 text-5xl border-b-2 border-black">{theData.title}</h1>
                    <div className="flex justify-between it py-2">
                        <h3 className="text-lg">{formatDate(theData.createdAt)}</h3>
                        <h3 className="text-lg">{formatTime(theData.createdAt)}</h3>
                    </div>
                    <p className="py-2 text-lg">{theData.body}</p>
                </div>
            </div>
            <div className="md:w-2/3 w-0" onClick={handlePriviewPaneClick}></div>
        </div>
    )
}

export default PriviewPane