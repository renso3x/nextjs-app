import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Helo {session && <span>{session.user!.name}</span>}</h1>
      <Image
        src="https://bit.ly/react-cover"
        alt="my-profile"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw,33vw"
        priority
      />
    </main>
  );
}
