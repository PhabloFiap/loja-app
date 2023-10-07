import Image from 'next/image'
import Link from 'next/link'
export default function Post1(){

    return(
        <div>
            <Image 
            src="/img/wordpress-265132_640.jpg"
            alt="cachorro"
            width={200}
            height={500}
          />

            <figcaption><Link href="/">menu</Link></figcaption>
        </div>
    )
}