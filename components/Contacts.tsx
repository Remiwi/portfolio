import Image from "next/image";

export default function Contacts({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-row items-center justify-center gap-1">
        <Image
          src="/icons/github.png"
          alt="Github Icon"
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <a href="https://github.com/Remiwi">GitHub</a>
      </div>
      <div className="flex flex-row items-center justify-center gap-1">
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn Icon"
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <a href="https://www.linkedin.com/in/remivaughan/">LinkedIn</a>
      </div>
      <div className="flex flex-row items-center justify-center gap-1">
        <Image
          src="/icons/email.png"
          alt="Email Icon"
          width={100}
          height={100}
          className="w-6 h-6"
        />
        <a href="#">Email</a>
      </div>
    </div>
  );
}
