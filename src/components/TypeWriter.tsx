/*
 * @Description: 渐进式的展示文本效果
 * @Author: didadida262
 * @Date: 2024-04-22 11:07:28
 * @LastEditors: didadida262
 * @LastEditTime: 2024-04-22 15:07:51
 */


import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export interface Props {
  text: string;
  className: string;
}

export default function TypeWriter({ text, className }: Props) {
  const textIndex = useMotionValue(0);

  const baseText = useTransform(textIndex, () => text);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(
    rounded,
    (latest) => `${baseText.get().slice(0, latest)}`
  );
  const updatedThisRound = useMotionValue(true);
  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: 1,
      duration: 5,
      ease: 'easeIn',
      repeat: Infinity,
      repeatDelay: 2,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          console.warn(1)
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          console.warn(2)
          updatedThisRound.set(true);
        }
      }
    });
  }, []);

  return <motion.h2 className={className}>{displayText}</motion.h2>;
}
