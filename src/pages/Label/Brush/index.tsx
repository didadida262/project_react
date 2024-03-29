/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import paper from 'paper'
import { judeToolExisted } from '../../../utils/paperjsWeapon'

const brushComponent = (props) => {
  const { activeTool, onClick } = props
  const name = 'brush'
  let initPoint = new paper.Point(0, 0)
  let circle = null as any
  let path = null as any
  let tool = null as any

  const initTool = () => {
    tool = new paper.Tool()
    tool.name = name
    circle = new paper.Path.Circle({
      center: 0,
      radius: 10,
      strokeColor: 'red'
    })
    path = new paper.CompoundPath({
    })
    tool.onMouseDown = (e) => {
      initPoint = e.point
    }
    tool.onMouseDrag = (e) => {
     new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red'
      })
    }
    tool.onMouseMove = (e) => {
      circle.remove()
      circle = new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red'
      })
    }
    tool.onMouseUp = (e) => {
    }
    tool.activate()
  }
  const switchTool = () => {
    if (activeTool !== name) return
    if (!judeToolExisted(paper, name)) {
      initTool()
    }
  }

  useEffect(() => {
    return () => {
    }
  }, [])

  useEffect(() => {
    switchTool()
    console.log('paper>>>', paper)
  }, [activeTool])
  return (
    <div className='brush mgb10'>
      <Button
        className={ activeTool === 'brush' ? 'active' : ''}
        style={{ width: 80}} 
        onClick={ () => onClick(name) }>
         <i className="fa fa-paint-brush"></i> 
       </Button>
    </div>
  )
}

export default brushComponent