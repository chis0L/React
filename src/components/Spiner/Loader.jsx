import modul from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={modul.backdrop}>
      <span class={modul.loader}></span>
    </div>
  );
};
