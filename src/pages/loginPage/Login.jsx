import { useState } from "react";
import logoType from "../../components/svg/logoType.svg";

const Phoneregex = /^09[0-9]{2}[0-9]{7}$/;
const EmailRegex = /(.*)\@(.*)\.(\w+)/;
const WhiteSpaceRegex = /^\s*$/;

function Login() {
  // ok
  const [inputvalue, func] = useState();
  const [error, funcE] = useState(true);
  const [blank, funcB] = useState(true);

  //  ok
  function Clicked() {
    const PhoneRes = Phoneregex.test(inputvalue);
    const EmailRes = EmailRegex.test(inputvalue);
    const WhiteSpaceRes = WhiteSpaceRegex.test(inputvalue);

    console.log(PhoneRes);
    console.log(EmailRes);
    console.log(WhiteSpaceRes);

    if (PhoneRes == true || EmailRes == true) {
      console.log("ok");
      document.getElementById("input").style.borderColor = "#12ff49";
      funcE(true);
      funcB(true);
    } else if (WhiteSpaceRes) {
      console.log("blank");
      document.getElementById("input").style.borderColor = "#ff1212";
      funcB(false);
      funcE(true);
    } else {
      console.log("error");
      document.getElementById("input").style.borderColor = "#ff1212";
      funcB(true);
      funcE(false);
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

          {/* ok */}
          <p
            className={`text-xs mt-2 text-red-600 ${
              error ? "hidden" : "block"
            }`}
          >
            شماره موبایل یا ایمیل نادرست است.
          </p>
          <p
            className={`text-xs mt-2 text-red-600 ${
              blank ? "hidden" : "block"
            }`}
          >
            لطفا این قسمت را خالی نگذارید
          </p>
          {/* ok */}

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
