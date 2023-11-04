import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import PriviewPane from '../components/PriviewPane'
import NewMemo from '../components/NewMemo'
import memoData from '../utilities/memoData'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    const [paneMax, setPaneMax] = useState('')
    const [blurState, setBlurState] = useState('')
    const [paneData, setPaneData] = useState('');

    const [mData, setMData] = useState(memoData);
    const [tempResult, setTempResult] = useState(mData);

    const handlePriviewPaneClick = (idMemo) => {
        setPaneMax(paneMax === 'priview-pane-hide' || paneMax === '' ? 'priview-pane-show' : 'priview-pane-hide')
        setBlurState(paneMax === 'priview-pane-show' ? '' : 'blur-sm')
        setPaneData(paneMax === 'priview-pane-hide' || paneMax === '' ? (tempResult.find(item => item.id === idMemo)) : (''))
    }

    useEffect(() => {
        setTempResult(mData)
    }, [mData])

    const handleSearchChange = (event) => {
        const searchText = event.target.value
        setTempResult(mData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())))
    }

    const OutletContext = {
        handlePriviewPaneClick,
        tempResult,
        setMData
    }

    return (
        <div className="relative bg-slate-800 w-full min-h-screen">
            {/* header */}
            <Header blurState={blurState} handleSearchChange={handleSearchChange} />
            {/* sideBar */}
            <SideBar blurState={blurState} />
            {/* content */}
            <div className={`relative z-0 w-full py-32 pl-16 ${blurState}`}>
                <div className="flex flex-wrap w-full px-10 py-10 justify-center">
                    {/* the Note */}
                    <Outlet context={OutletContext} />
                    {/* end the note */}
                </div>
            </div>
            {/* priview pane */}
            <PriviewPane paneMax={paneMax} handlePriviewPaneClick={handlePriviewPaneClick} data={paneData} />
            {/* create New */}
            <NewMemo blurState={blurState} setMemoData={setMData} memoData={tempResult} />
        </div>

    )
}

export default RootLayout