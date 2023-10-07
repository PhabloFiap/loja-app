import Link from "next/link";

export default function home (){

  return(
    <ul>
      <h1>HOME</h1>
      <li><Link href="/post">Post</Link></li>
      <li><Link href="./post/post1">post1</Link></li>
      <li><Link href="./post/post2">post2</Link></li>
    </ul>
  )
}