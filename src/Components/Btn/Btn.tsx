import React, { ReactNode, useState } from "react";
import "./btn.scss";

interface btnProps {
  text: string;
  handleClick: Function;
  children?: ReactNode;
  waveColor?: "light" | "dark";
  isReqvest?: boolean;
}

export const Btn = ({
  text,
  handleClick,
  children,
  waveColor = "dark",
  isReqvest = false,
}: btnProps) => {
  const [vieWave, setVieWave] = useState(false);
  const [dataStyle, setDataVue] = useState({});
  const handleBtnClick = (event: React.MouseEvent) => {
    let size = 135;
    let x = event.nativeEvent.offsetX - size / 2;
    let y = event.nativeEvent.offsetY - size / 2;
    setDataVue({
      width: `${size}px`,
      height: `${size}px`,
      top: `${y}px`,
      left: `${x}px`,
    });
    setVieWave(true);
    handleClick();
    setTimeout(() => {
      setVieWave(false);
      setDataVue({});
    }, 500);
  };
  return (
    <>
      {!isReqvest ? (
        <button onClick={handleBtnClick} className="btn">
          {text}
          <span className="btn__stroke"></span>
          {vieWave && (
            <span
              style={dataStyle}
              className={`pulse pulse-${waveColor}`}
            ></span>
          )}
          {children}
        </button>
      ) : (
        <button className="btn">
          {text}
          {children}
        </button>
      )}
    </>
  );
};
