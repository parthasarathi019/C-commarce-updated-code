import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Buy_Now = () => {
    const data = useLoaderData();
    const { _id, Product_Name, Description, Brand_Name, Product_Code, Price, Price_Without_Discount, Available_Size, Color_Variants, Commission, Product_Description, Doc_1_PC, Doc_2_PC, Doc_3_PC } = data;
    console.log(data);
    const Handle_Adds = () => {

        Swal.fire({
            title: "Conformed!",
            text: "Orderer Succfull!",
            icon: "success"
        });
    }
    return (
        <div className='md:max-w-[1220px] mx-auto px-2 md:px-0 pt-5 md:pt-0'>
            <form onSubmit={Handle_Adds}>
                <section className='flex flex-col md:flex-row justify-between md:gap-x-4 gap-y-5'>
                    <section className='md:w-[50%] bg-slate-0 md:p-4 bg-white'>
                        <p className='text-center text-[18px] py-7'>To confirm the order, enter your name, address, mobile number, and click on the <span className='text-primaryColor1'>confirm order</span> button</p>
                        <section className='flex flex-col gap-y-4'>
                            <div>
                                <p className='pl-[5px]'>Your Name</p>
                                <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Name' type="text" />
                            </div>
                            <div>
                                <p className='pl-[5px]'>Your Mobile Number</p>
                                <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Mobile Number' type="text" />
                            </div>
                            <div>
                                <p className='pl-[5px]'>Your Full Address</p>
                                <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Full Address' type="text" />
                            </div>
                            <div className=''>
                                <p className='pl-[5px]'>Delivery charge:</p>
                                <p ><select className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-3 pl-[8px] mt-1' name='select' id="select">
                                    <option value="DJI">Inside Dhaka (60 Tk.)</option>
                                    <option value="Parrot">Outside Dhaka (120 Tk.)</option>
                                </select></p>
                            </div>
                            <input type="submit" value="Order Now" className='w-full py-3 bg-orange-500 rounded-[3px] cursor-pointer' />
                            {/* <button className='w-full py-3 bg-orange-500 rounded-[3px]'></button> */}
                        </section>
                    </section>
                    <section className='md:w-[50%] bg-white md:p-4 md:pt-0 py-4 md:py-0'>
                        <p className='text-[18px] text-center md:text-left'>Your Order</p>
                        <div className='flex justify-between items-center pt-5 md:gap-x-4 gap-x-2'>
                            <div className='w-[20%]'><img className='w-[90px] h-[60px] md:w-[80px] md:h-[80px] rounded-[2px]' src={Doc_1_PC} alt="" /></div>
                            <div className='w-[70%] font-serif text-[10.5px] md:text-[14px]'>{Product_Name}</div>
                            <div className='w-[10%] text-right'><p>TK</p> <p>{Price}</p></div>
                        </div>
                        <hr className='mt-3 border-t-2' />
                        <div className='flex gap-y-2 flex-col mt-10'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Total:</p>
                                <p className='font-bold'><span className='font-semibold'>TK</span> {Price}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Delivery charge:</p>
                                <p className='font-bold text-orange-600'><span className='font-semibold'>TK</span> 60</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-bold text-[18px]'>Total:</p>
                                <p className='font-bold text-[19.2px]'>TK {Price + 60}</p>
                            </div>
                        </div>
                    </section>
                </section>
            </form>
        </div>
    )
}

export default Buy_Now