import React, { useEffect } from "react";

import { CanvasContext } from "./../hooks/useCanvas";
import useResponsiveSize from "./../hooks/useResponsiveSize";
import Wave from "./Wave";

const Canvas = () => {
  const canvasRef = React.useRef(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = React.useState();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <canvas id="canvas" ref={canvasRef} width={width} height={220}></canvas>
        <Wave />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
