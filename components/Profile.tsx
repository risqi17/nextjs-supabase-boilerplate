"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import useUser from '@/app/hook/useUser'
import Image from 'next/image';

export default function Profile() {
    const {isFetching, data} = useUser();

    if (isFetching) {
        return <></>
    }

  return (
    <div>
        {!data?.id ? (
            <Link href="/auth" className="animate-fade">
                <Button variant="outline">SignIn</Button>
            </Link>    
        ) : (
            <>
                {data.image_url ? 
                    (<Image src={data.image_url || ""} alt={data.display_name || ""} width={50} height={50} className="rounded-full animate-fade"/>)
                    :  
                    (
                        <div className="h-[50px] w-[50px] flex items-center justify-center ring-2">
                            <h1>{data.email[0]}</h1>
                        </div>
                    )
                }
            </>
        )}
    </div>
  );
}
