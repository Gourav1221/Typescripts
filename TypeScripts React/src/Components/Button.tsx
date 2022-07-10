
import React from 'react'

type ButtonProp={
    children:React.ReactNode;
    color:string;
    leftIcon?:JSX.Element;
    rightIcon?:JSX.Element;
    onClick?:()=>void;
}



export const Button = ({color,children,leftIcon,rightIcon}:ButtonProp) => {
  return (
    <>
    
    
    
    <button style={{color:color}}>
        
        {leftIcon}

        {children}

        {rightIcon}
    
    
    </button>

 
    
    
    
    
    
    
    
    
    </>
 


  )
}
