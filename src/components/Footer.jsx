import padlockIconWhite from "../assets/padlockIcon-white.png"
function Footer() {
  return (
    <div className="footerContainer">
      <div className="flex flex-col md:flex-row gap-6 text-white">
        <div className="flex-1">
          Copyright (c) 2023  |  Clarifionsupport@clarifion.com
        </div>
        <div className="flex-1">
          <div className="flex flex-row gap-2 justify-center">
            <img className="w-5" src={padlockIconWhite} alt="padlockIcon" />
            <p>Secure 256-bit SSL encryption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
