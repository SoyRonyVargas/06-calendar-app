import DatePicker , { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useModal from "../hooks/useModal";
import es from 'date-fns/locale/es';
import useUI from "../hooks/useUI";

registerLocale("es", es)

const ModalEvent = () => {
    
    const {
        errors,
        submited,
        formState,
        onInputChange,
        handleSubmitForm,
        handleInputDateChange,
    } = useModal()

    const {
        isModalOpen,
        isLoadingModal,
        handleHideModal
    } = useUI()

    return (
        <div className={`modal ${ isModalOpen ? 'show-modal' : 'hide-modal' }`}>
            <div className="modal-background" />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Nuevo evento</p>
                    {
                        !isLoadingModal &&
                        <button 
                            disabled={isLoadingModal}
                            onClick={handleHideModal} 
                            className="delete" 
                            aria-label="close" 
                        />
                    }
                </header>
                <section className="modal-card-body">
                    
                    <form className="container" onSubmit={handleSubmitForm}>
            
                        {/* <pre>
                            {
                                JSON.stringify( submited , null , 3 )
                            }
                        </pre>
                        
                        <pre>
                            {
                                JSON.stringify( errors , null , 3 )
                            }
                        </pre> */}

                        <div className="field mb-2">
                            <label className="label">Fecha y hora inicio</label>
                            <div className="control">
                                <DatePicker
                                    onChange={ ( date ) => handleInputDateChange( date , "start" ) }
                                    selected={formState.start}
                                    disabled={isLoadingModal}
                                    timeCaption="Hora"
                                    className="input"
                                    dateFormat={"Pp"}
                                    showTimeSelect
                                    locale="es"
                                />
                                {
                                    (errors?.start && submited) &&
                                    <p className="help is-danger is-strong">
                                        {errors?.start}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="field mb-2">
                            <label className="label">Fecha y hora fin</label>
                            <div className="control">
                                <DatePicker
                                    onChange={ ( date ) => handleInputDateChange( date , "end" ) }
                                    minDate={formState.start}
                                    disabled={isLoadingModal}
                                    selected={formState.end}
                                    timeCaption="Hora"
                                    className="input"
                                    dateFormat={"Pp"}
                                    showTimeSelect
                                    locale="es"
                                />
                                {
                                    (errors?.end && submited) &&
                                    <p className="help is-danger is-strong">
                                        {errors?.end}
                                    </p>
                                }
                            </div>
                        </div>

                        {/* <hr className="my-3" /> */}

                        <div className="field">
                            <label className="label">Titulo y notas</label>
                            <div className="control">
                                <input
                                    type="text"
                                    name="title"
                                    className="input"
                                    autoComplete="off" 
                                    value={formState.title}
                                    onChange={onInputChange}
                                    disabled={isLoadingModal}
                                    placeholder="Título del evento"
                                />
                                {
                                    (errors?.title && submited) &&
                                    <p className="help is-danger is-strong">
                                        {errors?.title}
                                    </p>
                                }
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Información adicional</label>
                            <div className="control">
                                <textarea 
                                    name="notes"
                                    className="textarea" 
                                    disabled={isLoadingModal}
                                    onChange={onInputChange}
                                    value={formState.notes}
                                    placeholder="Contenido..." 
                                />
                                {
                                    (errors?.notes && submited) &&
                                    <p className="help is-danger is-strong">
                                        {errors?.notes}
                                    </p>
                                }
                            </div>
                        </div>

                        
                        <button 
                            type="submit" 
                            disabled={isLoadingModal}
                            className={`button is-fullwidth is-primary ${ isLoadingModal ? "is-loading" : ""}`}
                        >
                            <i className="far fa-save"></i>
                            <span> Guardar</span>
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ModalEvent;
