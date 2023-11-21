import style from "./style.module.css";

function Footer() {
  return (
    <div className="overflow-hidden p-0 w-full m-auto ml-[30px] mw920:ml-0">
      <div className={style.footer}>
        <div className="mb-[10px] mx-auto">© 2023 Ishwar Bhat</div>
      </div>
    </div>
  );
}

export default Footer;
