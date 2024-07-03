import React, { useState, useEffect } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function ScreenIcon() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  // 实现全屏
  const fullScreenFun = function () {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).mozRequestFullScreen) {
        // Firefox
        (elem as any).mozRequestFullScreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        // IE/Edge
        (elem as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        // Firefox
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        // Chrome, Safari and Opera
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        // IE/Edge
        (document as any).msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div className="screen_use_page" onClick={fullScreenFun}>
      {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    </div>
  );
}
