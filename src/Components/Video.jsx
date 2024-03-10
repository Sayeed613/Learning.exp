import { useRef } from "react"
import video from  "../assets/video.mp4"
import "./Video.css"

export default function Video({play, setPlay}) {
   const player =  useRef(null)

   const closePlayer = (e) => {
    if(e.target === player.current){
        setPlay(false)
    }
   }
  return (
    <div className={`video-player ${play? "": "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
