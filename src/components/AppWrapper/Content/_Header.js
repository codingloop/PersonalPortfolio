import Container from "./_Container";
import style from "./style.module.css";
import useTextTypeEffect from "@/utils/hooks/textType";

function Header({ banner }) {
  const codeText = useTextTypeEffect(banner?.rotatingText);

  return (
    <Container>
      <div
        className={`${style.row} pb-0 pt-[60px] mw1400:pt-[30px] mw920:pt-15px`}
      >
        <div className={style.col_t1}>
          <div className={style.header_banner}>
            <div className={`${style.banner_back} mw1400:hidden`}></div>
            <div className="banner-dec not-sure-why-this-is-there"></div>
            <div className={style.banner_overlay}>
              <div className={style.banner_title}>
                <h1>{banner?.title}</h1>
                <div className={style.banner_code}>
                  &lt;<i>code</i>&gt; I{" "}
                  <span className="border-r border-[#838282]">{codeText} </span>
                  &lt;/<i>code</i>&gt;
                </div>
              </div>
              {/* <img src="/images/face-1.png" className={style.banner_photo} /> */}
              {/* Place your overlay image here if you want */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
