export const eventValidatons = {
    start: [ 
        ( value : Date ) => Object.prototype.toString.call(value) === "[object Date]" &&  value instanceof Date ,
        "Ingresa una fecha de inicio valida."
    ],
    end: [ 
        ( value : Date ) => value instanceof Date && Object.prototype.toString.call(value) === "[object Date]"  ,
        "Ingresa una fecha de inicio valida."
    ],
    title: [ ( value : string ) => value.length > 0 , "Ingresa el titulo."],
    notes: [ ( value : string ) => value.length > 0 , "Ingresa las notas."],
    allDay: [ ( value : boolean ) => value === false , ""],
}
