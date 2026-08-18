import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
        id: string;
        onChange?: (value) => void;
        label : string;
        columnClasse?: string;
}

export const Input = ({ 
    onChange,
    label,
    columnClasse,
    id,
    ...inputProps


}: InputProps) => {
    return (
        <div className={`field column ${columnClasse}` }>
            <label className="label" htmlFor="inputCod">{label}</label>
            <div className="control">
                <input className="input" type="text"
                    id={id} {...inputProps}                 
                    onChange={event => {
                        if (onChange) {
                            onChange(event.target.value)
                        }  }
                    }
                    />
            </div>
        </div>
    )
}