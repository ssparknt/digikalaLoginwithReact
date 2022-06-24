import { useState } from "react";
import logoType from "../../components/svg/logoType.svg";

const Phoneregex = /^09[0-9]{2}[0-9]{7}$/;
const EmailRegex = /(.*)\@(.*)\.(\w+)/;
const WhiteSpaceRegex = /^\s*$/;

function Login() {
  const [inputvalue, func] = useState();

  function Clicked() {
    const PhoneRes = Phoneregex.test(inputvalue);
    const EmailRes = EmailRegex.test(inputvalue);
    const WhiteSpaceRes = WhiteSpaceRegex.test(inputvalue);

    console.log(PhoneRes);
    console.log(EmailRes);
    console.log(WhiteSpaceRes);

    if (PhoneRes == true || EmailRes == true) {
      console.log("ok");
      document.getElementById("ptest").style.display = "none";
      document.getElementById("input").style.borderColor = "#12ff49";
    } else if (WhiteSpaceRes) {
      console.log("blank");
      document.getElementById("ptest").innerHTML =
        "لطفا این قسمت را خالی نگذارید";
      document.getElementById("ptest").style.display = "block";
      document.getElementById("ptest").style.color = "#ff1212";
      document.getElementById("input").style.borderColor = "#ff1212";
    } else {
      console.log("error");
      document.getElementById("ptest").innerHTML =
        "شماره موبایل یا ایمیل نادرست است.";
      document.getElementById("ptest").style.display = "block";
      document.getElementById("ptest").style.color = "#ff1212";
      document.getElementById("input").style.borderColor = "#ff1212";
    }
  }

  return (
    <main className="w-full h-full flex justify-center items-center">
      <section
        className="w-96 h-auto bg-white rounded-lg py-10 px-9 flex flex-col gap-6 border"
        dir="rtl"
      >
        <div className="w-full flex justify-center">
          <img src={logoType} className="w-40" />
        </div>
        <h1 className="font-bold text-xl">ورود | ثبت‌نام</h1>
        <div className="text-xs text-gray-900 flex flex-col gap-2">
          <p>سلام!</p>
          <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </div>
        <div>
          <input
            type="text"
            className="outline-none rounded-lg border w-full border-cyan-400 py-3 px-3 caret-cyan-400"
            id="input"
            onChange={(e) => func(e.target.value)}
          />
          <p id="ptest" className="text-xs mt-2"></p>
          <button
            className="font-bold w-full mt-7 text-white bg-red-500 py-3 rounded-lg"
            onClick={Clicked}
          >
            ورود
          </button>
        </div>
        <p className="text-xxs mt-2">
          ورود شما به معنای پذیرش{" "}
          <a href="#" className="text-cyan-600">
            شرایط دیجی‌کالا
          </a>{" "}
          و{" "}
          <a href="#" className="text-cyan-600">
            قوانین حریم‌ خصوصی
          </a>{" "}
          است
        </p>
      </section>
    </main>
  );
}

export default Login;
// ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است
