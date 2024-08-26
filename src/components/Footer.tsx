const Footer = () => {
    return (

        <div className="w-full footer_inner px-4 flex flex-col gap-12 text-[#7affc7]  rounded-tl-lg rounded-tr-lg ">
            <div className="w-full flex flex-col md:flex-row justify-between font-extrabold items-center py-4">
                <p>bi0s</p>
                <div className=" flex gap-8">
                    <a className="underline" href="https://chat.whatsapp.com/LbMnGHUPPIe3pJ4tHYjv1r"><p>Join Whatsapp</p></a>
                    <a className="underline" href="https://discord.gg/Dn86Sy5Jks"><p>Join Discord</p></a>
                </div>
            </div>
            <svg viewBox="0 0 163 18" className="font-technos fill-accent">
                <text x="0" y="15">Recruitment</text>
            </svg>
        </div>
    )
}
export default Footer
