import Image from 'next/image'

export default function DSAISignature() {
    return (
        <div className="flex items-end justify-end place-items-center gap-2 pl-16 pointer-events-none">
          By{' '}
            <Image
              src="/dsai_logo.png"
              alt="DSAI Logo"
              className="dark:invert"
              width={55}
              height={24}
              priority
            />
        </div>
    )
}