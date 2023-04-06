import React, {useState,useEffect} from 'react'

const ScrollBar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollWidth((window.scrollY/(document.body.scrollHeight-window.innerHeight))*100)
        })
        return (
            window.removeEventListener('scroll',  () => {
                setScrollWidth((window.scrollY/(document.body.scrollHeight-window.innerHeight))*100)
            })
        )
    }, []);

  return (
    <div className="w-full h-[5px] bg-slate-200 fixed top-0 left-0 z-[10]">
        <div style={{width: scrollWidth + '%'}} className={` h-[100%] bg-[#5651e5]`} ></div>

    </div>
  )
}

export default ScrollBar