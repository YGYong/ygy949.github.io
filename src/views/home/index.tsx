// import axios from "axios";
import "@/assets/icons/a.svg";
import SvgIcon from "@/components/svgIcons";
// import axios from "axios";
// import "@/assets/icons/b.svg"
export default function HomePage() {
  // axios({
  //   url: "http://172.20.10.2:8888/deviceService/createLonLatQrCode?lon=116.98058&lat=34.703112&name=你好",
  //   method: "get",
  //   responseType: "blob",
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  // }).then((res) => {
  //   console.log(res, "jiekoudiaoyong");
  // });
  return (
    <div>
      HomePage
      <div>
        SVG图标
        <SvgIcon icon="home" className="text-red-500" width={32} height={32} />
        <SvgIcon icon="首页" className="text-red-500" width={32} height={32} />
        {/* <SvgIcon icon="a" className="text-blue-500" width={24} height={24} /> */}
      </div>
    </div>
  );
}
