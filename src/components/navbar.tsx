export const Navbar = () =>{
    return(
        <>
            <div className='h-16 outline-dashed flex justify-between items-center'>
                <div className='flex items-center ml-6 gap-2'>
                <img className="w-8" src="/logoScissors.svg" alt="logoIcon" />
                <h1>Pndek</h1>
                </div>
                <div className="mr-4">
                <button className='rounded-2xl bg-white text-black mr-4'>Sign In</button>
                <button className='rounded-3xl bg-black text-white p-3'>Try for free</button>
                </div>
            </div>
        </>
    )
}