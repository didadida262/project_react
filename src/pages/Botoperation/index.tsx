/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-05-27 10:10:25
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 18:36:19
 */
import { Button} from 'antd';
import { useContext } from "react"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector  } from 'react-redux';

import { ButtonCommon, EButtonType } from '@/components/ButtonCommon'

import {ThemeContext, ThemeMode} from '../../components/themeProvider'

const LightDark = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  console.log('currentTheme>>>',currentTheme)
  const handleClick = async (mode) => {
    // dispatch(setLightDarkMode(mode) as any)
    
  }
  return (
    <div className="h-[60px] px-2 py-2">
      {/* <Button icon={ currentTheme === 'Dark Mode'? <BsFillMoonFill />: <BsFillSunFill />} onClick={() => setCurrentTheme(currentTheme === 'Dark Mode'?ThemeMode.LIGHT_MODE: ThemeMode.DARK_MODE)}>
       <span>{currentTheme}</span>
      </Button> */}
      <ButtonCommon
        type={EButtonType.SIMPLE}
        onClick={() => setCurrentTheme(currentTheme === 'Dark Mode'?ThemeMode.LIGHT_MODE: ThemeMode.DARK_MODE)}>
          { currentTheme === 'Dark Mode'? <BsFillMoonFill />: <BsFillSunFill />}
          <span
          className='ml-[8px]'
        >{currentTheme}</span>
      </ButtonCommon>
    </div>
    )
}

export default LightDark