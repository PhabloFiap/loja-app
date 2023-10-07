import Image from 'next/image'
import Link from "next/link";
export default function Post2(){

    return(
        <div>
        <div>
            <Image
            src="/img/auau.jpeg"
            alt="cachorro"
            width={200}
            height={500}
            />
            <figcaption><Link href="./post/post1">post1</Link></figcaption>
            <figcaption><Link href="/">menu</Link></figcaption>
        </div>
        </div>
    )
}