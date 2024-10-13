
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement

type TButtonOption = {
    classname?:string;
    varient:string;
    buttonName:string;
}

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> & TButtonOption



const getVarient = (varient:string) => {
    switch (varient) {
        case 'outline':
            return 'btn-outline';
            
        case 'ghost':
            return 'btn-ghost';
        default:
            return 'btn-solid'
    }
}

const Button = forwardRef<TRef, TButton>( ({classname,varient,buttonName, ...rest}, ref) => {
    return <button {...rest} ref={ref} className={cn(
        getVarient(varient),
        classname
    )}>
        {buttonName}
    </button>
});

export default Button;