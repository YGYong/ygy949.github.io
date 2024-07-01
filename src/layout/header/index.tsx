import "./index.less";
export default function HeaderIndex() {
  const features = [
    { title: "首页" },
    { title: "功能" },
    { title: "关于" },
    { title: "联系我们" },
    { title: "我的" },
  ];
  return (
    <div className="header_page">
      <div className="header_page_container">
        {features.map((item) => (
          <div className="header_page_featrue" key={item.title}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
