import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}){
    return(
        <div className="max-w-screen-xl sm:m-auto sm mx-2">
        {children}
      </div>
    )
}