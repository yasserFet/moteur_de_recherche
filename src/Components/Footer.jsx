import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="search_bg_ri p-4 text-slate-100 ">
      <div className="flex text-center justify-center gap-5 mb-4">
        <a
          href="https://www.facebook.com/SONATRACH/"
          target="blank"
          className="text-2xl"
        >
          <AiFillFacebook />
        </a>
        <a href="" target="blank" className="text-2xl">
          <AiFillInstagram />
        </a>
        <a href="" target="blank" className="text-2xl">
          <AiFillLinkedin />
        </a>
        <a
          className="text-2xl"
          href="https://www.youtube.com/channel/UCNZPL_sNE1nQ2azMKyZX3xQ"
        >
          <AiFillYoutube />
        </a>
      </div>
      <div className="container m-auto text-center">
        © 2023 sonatrach . All rights reserved.
      </div>
    </footer>
  );
}
