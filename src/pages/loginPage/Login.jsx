import logoType from "../../components/svg/logoType.svg";

function Login() {
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
        <div className="text-xs text-gray-500 flex flex-col gap-2">
          <p>سلام!</p>
          <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </div>
        <input
          type="text"
          className="outline-none rounded-lg border border-cyan-400 py-3 px-3 caret-cyan-400"
        />
        <p></p>
        <button className="font-bold text-white bg-red-500 py-3 rounded-lg">
          ورود
        </button>
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
