import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - 'Tasty Food'`
    },[title])
};

export default useTitle