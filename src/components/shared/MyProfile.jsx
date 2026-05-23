"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { LuPencil } from 'react-icons/lu';
import UpdateProfileModal from './UpdateProfileModal';

const MyProfile = () => {

    const {data: session} = authClient.useSession();
    const  user = session?.user;

    return (
        <div>
            <Card className='w-70 md:w-175 mx-auto md:mx-0 p-6 bg-linear-to-l from-[#008075] to-[#00655C]'>
                <div className='md:flex items-center gap-8'>
                <Image
                alt='user Image'
                height={100}
                width={100}
                src={user?.image}
                className='h-20 w-20 md:h-25 md:w-25 rounded-full mx-auto md:mx-0 mb-5 md:mb-0'
                />

                <div className='text-center md:text-left'>
                    <h4 className='text-white font-bold text-[22px] md:text-[30px]'>{user?.name}</h4>
                    <p className='text-white/80 text-[14px] md:text-[18px] mt-2 mb-6'>{user?.email}</p>

                    <UpdateProfileModal user={user}></UpdateProfileModal>
                </div>
                </div>
            </Card>
        </div>
    );
};

export default MyProfile;