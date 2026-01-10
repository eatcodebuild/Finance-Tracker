import "../global.css";

export default function SolidBtn({ text, bgColor = "bg-violet-600" }) {
  return <button className={`${bgColor} px-5 py-2 rounded-md shadow-sm text-white cursor-pointer hover:bg-purple-500 duration-200`}>{text}</button>;
}
