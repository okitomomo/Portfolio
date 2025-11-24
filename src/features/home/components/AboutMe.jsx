export default function AboutMe() {

    const renderAge = () => {
        const b = new Date("1992/11/19");
        const today = new Date();

        let age = today.getFullYear() - b.getFullYear();

        // 誕生日がまだ来てなければ -1
        const hasBirthdayPassed =
            (today.getMonth() > b.getMonth()) ||
            (today.getMonth() === b.getMonth() && today.getDate() >= b.getDate());

        if (!hasBirthdayPassed) {
            age--;
        }
        return age + '歳';
    }

    return (
        <section id="about-me" className="bg-[#191919] px-2 md:px-4 py-8">
            <div className="text-2xl font-eng my-8 text-center md:text-left">About me</div>
            <div className="max-w-5xl mx-auto px-4 md:px-12">
                <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] gap-x-12 items-center">
                    <div>
                        <img src="/Portfolio/img/profile.png" alt="プロフィール画像" className="rounded-lg shadow-lg max-h-[300px]" />
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-x-6 gap-y-2 text-sm items-baseline py-4">
                        <div className="flex justify-between font-bold">
                            <span>名前</span>
                            <span>:</span>
                        </div>
                        <div>沖田 知広 (Okita Tomohiro)</div>
                        <div className="flex justify-between font-bold">
                            <span>年齢</span>
                            <span>:</span>
                        </div>
                        <div>{ renderAge() }</div>
                        <div className="flex justify-between font-bold">
                            <span>出身・在住</span>
                            <span>:</span>
                        </div>
                        <div>北海道</div>
                        <div className="flex justify-between font-bold">
                            <span>好き・得意</span>
                            <span>:</span>
                        </div>
                        <div>プログラミング、ゲーム、映像鑑賞、お肉、チョコレート、お酒、楽器</div>
                        <div className="flex justify-between font-bold">
                            <span>嫌い・苦手</span>
                            <span>:</span>
                        </div>
                        <div>デザイン、アウトドア、映画、野菜、果物、炭酸、お絵かき</div>
                    </div>
                </div>

                <div className="py-4">
                    <div className="text-lg font-bold">ひとこと</div>
                    <div className="leading-relaxed text-sm font-thin p-2">
                        <p>世のシステムエンジニアやプログラマーのイメージを払拭する、「明るいエンジニア」をモットーに活動中です。</p>
                        <p>好きなことを仕事にしたタイプなので、プログラミングや新たな技術に触れるのが好きで、仕事は苦痛ではありません。</p>
                        <p>仕事のスタイルとしては、とにかくコミニュケーションを取りながら良い関係で楽しく仕事したいです。</p>
                        <p>忙しいのも好きです。</p>
                    </div>
                </div>
            </div>
        </section>
    );
}