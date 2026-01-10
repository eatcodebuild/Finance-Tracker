import "../global.css";

export default function SolidBtn({ text }) {
  return (
    <button className="bg-primary px-5 py-2 rounded-md shadow-sm text-white cursor-pointer duration-200">
      {text}
    </button>
  );
}
