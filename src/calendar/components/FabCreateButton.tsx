import useCalendarStore from '../hooks/useCalendarStore'
import { FabCreateButtonWrapper } from '../styled'
import { FaPlus } from 'react-icons/fa'
import useUI from '../hooks/useUI'

const FabCreateButton = () => {

    const { handleCreateVoidEvent } = useCalendarStore()

    const { handleShowModal } = useUI()

    const handleNewButton = () => {

        handleCreateVoidEvent()

        handleShowModal()

    }
    
    return (
        <FabCreateButtonWrapper>
            <button onClick={handleNewButton} className="button is-large is-primary">
                <span className="icon">
                    <FaPlus />
                </span>
            </button>
        </FabCreateButtonWrapper>
    )
}

export default FabCreateButton