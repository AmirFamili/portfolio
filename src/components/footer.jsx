import React from 'react';

const footer = () => {
    return (
        <div className='w-full h-20 text-center pt-2 bg-slate-950'>

            <a href="https://www.linkedin.com/in/amir-mohammad-famili/" target="_blank">
                <i class=" text-3xl p-3 fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/AmirFamili" target="_blank">
                <i className="text-3xl p-3 fa-brands fa-github"></i>
            </a>

            <a href="https://stackoverflow.com/users/22900969/amir-famili" target="_blank">
                <i class="text-3xl p-3 fa-brands fa-stack-overflow"></i>
            </a>

            <a href="https://wa.me/09125835269" target="_blank">
                <i class="text-3xl p-3 fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://t.me/amirm222" target="_blank">
                <i class="text-3xl p-3  fa-brands fa-telegram"></i>
            </a>

        </div>
    );
}

export default footer;