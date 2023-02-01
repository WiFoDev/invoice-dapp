import {PlusSvg} from "@/assets/plus";

export const Button = ({children, type}: any) => {
  return (
    <>
      <button className={`btn-${type} flex items-center gap-4`}>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <PlusSvg />
        </div>
        {children}
      </button>
    </>
  );
};

export const ButtonSecondary = () => {
  return (
    <>
      <button className="btn-primary">New Invoice</button>;
    </>
  );
};
