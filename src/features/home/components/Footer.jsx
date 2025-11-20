export default function Footer() {
    return (
        <footer className="pt-14">
            <div className="w-fit mx-auto">ご覧いただきありがとうございました🙇‍♂️</div>
            <div className="w-fit mx-auto py-12">
                <div className="text-xs font-thin">気になることやお仕事のご依頼は、下記のメールアドレスにご連絡ください。</div>
                <a className="flex flex-row group justify-center bg-white hover:bg-[#ff3c56] text-[#DF025E] hover:text-white text-sm rounded-full my-4 py-4 px-12" href="mailto:t.okita.41119&#64;gmail.com">
                    t.okita.41119&#64;gmail.com
                    <div className="relative">
                        <div className="absolute border-b border-1 border-[#DF025E] group-hover:border-white ml-4 w-4 top-1/2 -rotate-45
                            after:absolute after:bottom-[-1px] after:right-0 after:h-px after:w-1.5 after:rotate-45 after:bg-[#DF025E] after:content-[''] after:origin-right after:group-hover:bg-white"></div>
                    </div>
                </a>
            </div>
        </footer>
    );
}