import React, { useEffect, useState } from "react";

export const  SimplestGallery =({
  images,
  duration,
  width,
  height,
  background,
  cover,
}) => {
  const [index, setIndex] = useState(0);
  const [button0Background, setButton0Background] = useState('#f0f0f0')
  const [button0Color, setButton0Color] = useState('#000')
  const [button0Border, setButton0Border] = useState('2px solid #f0f0f0')
  const [button1Background, setButton1Background] = useState('#f0f0f0')
  const [button1Color, setButton1Color] = useState('#000')
  const [button1Border, setButton1Border] = useState('2px solid #f0f0f0')




  useEffect(() => {
    if (duration) {
      setInterval(() => {
        setIndex((prev) => {
          if (prev === images.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, duration);
    }
  }, []);

  return (
    <div
      style={{
        background: background?background:'black',
        width: width?width:300,
        overflow: "hidden",
        height: height?height:300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ width: width, display: "flex" }}>
        {images.map((image) => {
          if (images.indexOf(image) === index) {
            return (
              <img
                src={image}
                width={width?width:300}
                height={cover ? (height?height:'300') : "auto"}
              ></img>
            );
          }
        })}
      </div>
      {!duration ? (
        <>
          <button
            onClick={() => {
              if (index === 0) {
                setIndex(images.length);
              }
              {
                setIndex((prev) => prev - 1);
              }
            }}

            onMouseEnter={()=>{
                    setButton0Background('#000')
                    setButton0Color('#fff')
            
            }}

            onMouseLeave={()=>{
                setButton0Background('#fff')
                setButton0Color('#000')
            }}

            style={{
              position: "absolute",
              left: "5%",
              background: button0Background,
              color:button0Color,
              border: button0Border,
              borderRadius: 50,
              padding: "5px",
              width: width / 15,
              height: width / 15,
              fontWeight: 700,
              cursor:"pointer"
            }}
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              if (index === images.length - 1) {
                setIndex(0);
              } else {
                setIndex((prev) => prev + 1);
              }
            }}

            onMouseEnter={()=>{
                    setButton1Background('#000')
                    setButton1Color('#fff')
                 
            }}

            onMouseLeave={()=>{
                setButton1Background('#fff')
                setButton1Color('#000')
            }}
            style={{
              position: "absolute",
              right: "5%",
              background: button1Background,
              color:button1Color,
              border: button1Border,
              borderRadius: 50,
              padding: "5px",
              width: width / 15,
              height: width / 15,
              fontWeight: 700,
              cursor:"pointer"
            }}
          >
            {">"}
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
