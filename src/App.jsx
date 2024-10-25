import React from 'react'
import './App.css'
import {useState} from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [open, setOpen] = useState('окрыть')
  const change = () => {
    setImg(!img)
    setOpen(img ? 'открыть' : 'закрыть')
  }
  
  
  
  console.log(num)


  return (
    <>
  <div className="box">
    <button onClick={change}>{open} фото</button>
    {img &&  <img src="https://virtus-img.cdnvideo.ru/images/og-jpg/plain/d5/d536d84d-38e3-48b7-877e-7a8e3fba367a.png" alt="" />}
   
  </div>

    <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
    <div className="box">
      <h4>{num}</h4>
      <button onClick={() => setNum(num + 1)}>добавить</button>
      <button onClick={() => setNum(num - 1)}>убавить</button>
      <button onClick={() => setNum(num * 2)}>удвоить</button>
      <button onClick={() => setNum(num / 2)}>поделить</button>
      <button onClick={() => setNum(num * 0)}>обнулить</button>
    </div>
    
    </>
  )
}

export default App