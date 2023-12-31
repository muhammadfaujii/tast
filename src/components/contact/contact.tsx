import React from 'react'

function contact() {
    return (
        <>
            <div className='pb-[300px] pt-[200px] drop-shadow-lg'>
                <div className='flex items-center justify-center p-10 '>
                    <div className='mx-auto sm-440:w-[1200px] 2xl:h-[660px] sm-440:h-[500px] bg-[#ffffff] rounded-lg'>
                        <div className='mx-auto float-left 2xl:w-[500px] sm-440:w-[180px] h-full bg-[#1D3A69] rounded-lg'>
                            <div className='text-white 2xl:text-[28px] sm-440:text-[20px] 2xl:p-10 sm-440:p-5'>
                                <p className='font-semibold'>Contact Information</p>
                                <p className='2xl:text-[18px] sm-440:text-[12px] font-normal text-[#C9C9C9]'>Say something to start a live chat!</p>
                            </div>
                            <div className='2xl:p-10 sm-440:p-4 2xl:text-[16px] sm-440:text-[10px]'>
                                <img className='2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-5' src="./images/telp.png" alt="" />
                                <p className='text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:-mt-1'>Telephone (Whatsapp ) +62 81913456</p>
                                <img className='2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-5' src="./images/email.png" alt="" />
                                <p className='text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:-mt-1'>demo@gmail.com</p>
                                <img className='2xl:relative 2xl:top-11 sm-440:relative sm-440:right-0 sm-440:top-9' src="./images/lokasi.png" alt="" />
                                <p className='text-white 2xl:p-5 sm-440:p-0 2xl:ml-10 sm-440:ml-10 sm-440:mt-4'>Jln karapitan bogor</p>
                            </div>
                            <div className='float-right 2xl:-mr-5 2xl:-mt-6 sm-440:mt-[133px] 2xl:w-[200px] sm-440:w-[60px]'><img src="./images/lingkaran.png" alt="" /></div>
                            <div className='float-right 2xl:-mt-10 sm-440:mt-[120px] 2xl:-mr-[150px] sm-440:-mr-12 2xl:w-[200px] sm-440:w-[60px]'><img src="./images/lingkaran2.png" alt="" /></div>
                            <div>
                                <a href=""><img className='float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1' src="./images/twiter.png" alt="" /></a>
                                <a href=""><img className='float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1' src="./images/instagram.png" alt="" /></a>
                                <a href=""><img className='float-left 2xl:mt-[100px] sm-440:mt-[150px] 2xl:ml-9 sm-440:ml-1' src="./images/discord.png" alt="" /></a>
                            </div>
                        </div>
                        <div className='flex items-center justify-center 2xl:pt-3 sm-440:pt-3'>
                            <div className='2xl:p-10 sm-440:p-10 flex flex-wrap gap-10 2xl:w-[700px] sm-440:w-[100px] font-medium'>
                                <div className='sm-440:-ml-[70px] 2xl:ml-[0px]'>
                                    <label htmlFor="firstname" className='font-medium 2xl:text-[17px] sm-440:text-[11px]'>First Name</label>
                                    <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                        <input type="text" placeholder='First Name'
                                            className='2xl:w-[290px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[80px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                    </div>
                                </div>
                                <div className='sm-440:ml-[15px] sm-440:-mt-[101px] 2xl:-mt-[108px] 2xl:ml-[320px]'>
                                    <label htmlFor="lastname" className='font-medium 2xl:text-[17px] sm-440:text-[11px]'>Last Name</label>
                                    <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                        <input type="text" placeholder='Last Name'
                                            className='2xl:w-[290px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[75px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                    </div>
                                </div>
                                <div className='sm-440:-ml-[70px] sm-440:-mt-[50px] 2xl:-mt-[10px] 2xl:ml-[0px]'>
                                    <label htmlFor="email" className='font-medium 2xl:text-[17px] sm-440:text-[11px]'>Email</label>
                                    <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                        <input type="text" placeholder='Email'
                                            className='2xl:w-[290px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[80px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                    </div>
                                </div>
                                <div className='sm-440:ml-[15px] sm-440:-mt-[101px] 2xl:-mt-[108px] 2xl:ml-[320px]'>
                                    <label htmlFor="phonenumber" className='font-medium 2xl:text-[17px] sm-440:text-[11px]'>Phone Number</label>
                                    <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                        <input type="text" placeholder='+628123456789'
                                            className='2xl:w-[290px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[75px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                    </div>
                                </div>
                                <div className='sm-440:-ml-[70px] sm-440:-mt-[50px] 2xl:-mt-[10px] 2xl:ml-[0px]'>
                                    <label htmlFor="message" className='font-medium 2xl:text-[17px] sm-440:text-[11px]'>Message</label>
                                    <div className='2xl:pt-5 sm-440:pt-5 flex gap-10'>
                                        <input type="text" placeholder='Write your message..'
                                            className='2xl:w-[610px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline border-b-2 border-[#8D8D8D]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact