const Footer = () => {
    return (

        <div className="w-full footer_inner flex flex-col gap-12 text-[#7affc7] h-[350px] rounded-tl-lg rounded-tr-lg text-[#1f2021]">
            <div className="w-full flex flex-col md:flex-row justify-between font-extrabold items-center p-4">
                <p>bi0s</p>
                <div className=" flex gap-8">
                    <a className="underline" href="https://chat.whatsapp.com/LbMnGHUPPIe3pJ4tHYjv1r"><p>Join Whatsapp</p></a>
                    <a className="underline" href=""><p>Join Discord</p></a>
                </div>
            </div>
            <svg viewBox="0 0 163 18" className="font-technos ">
                <text x="0" y="15">Recruitment</text>
            </svg>
        </div>
    )
}
export default Footer
