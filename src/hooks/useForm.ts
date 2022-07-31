import { useState , useEffect , useMemo } from 'react';
import { FormDatePicker } from '../calendar/types';

export const useForm = <T>( initialForm : T , validations : any = {} , cb : Function ) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ submited , setSubmited ] = useState<boolean>(false)
    const [ errors , setErrors ] = useState<{ [x:string]: string }>();

    useEffect( () => {

        createValidators()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState])
    
    useEffect( () => {

        setFormState(initialForm)

    }, [initialForm])

    useEffect( () => {

        return () => {
            setSubmited(false)
        }

    }, [])

    const isFormValid = useMemo( () => {

        if( !errors ) return false

        for( let field of Object.keys(errors!) )
        {
            if( errors[field as keyof typeof errors] !== null ) return false
        }

        return true

    } , [errors])

    const onInputChange = ({ target } : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const handleInputDateChange: FormDatePicker = (date, name) => {

        setFormState({
            ...formState,
            [name]: date
        })

    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const errors : any = {}
        
        for( let field of Object.keys(validations) ){

            const [ fn , errorMsg ] = validations[field]

            errors[field] = fn(formState[field as keyof typeof formState]) ? null : errorMsg

        }

        setErrors(errors)

    }

    const handleSubmitForm = ( event : React.FormEvent<HTMLFormElement> ) => {

        event.preventDefault()

        handleSubmitedForm()

        if( !isFormValid ) return
        
        cb()

        setSubmited(false)
        
    }

    const handleSubmitedForm = () => setSubmited(true)

    return {
        ...formState,
        errors,
        submited,
        formState,
        onResetForm,
        isFormValid,
        setFormState,
        onInputChange,
        handleSubmitForm,
        handleSubmitedForm,
        handleInputDateChange
    }
    
}