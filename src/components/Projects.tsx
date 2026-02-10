import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden">
            {/* Glassmorphism - full width, smaller */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-5 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-12"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
                <div
                    className="absolute top-1/2 right-5 -translate-y-1/2 w-36 h-36 rounded-full blur-3xl opacity-10"
                    style={{ backgroundColor: '#ec4899' }}
                ></div>
            </div>

            <div className="px-6 py-12 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-center" style={{ marginBottom: '2rem' }}>Projects</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Project Card 1 */}
                    <a href="https://zamnaweather.vercel.app/" target="_blank" rel="noopener noreferrer" className="card text-left max-w-sm w-full block cursor-pointer hover:scale-[1.02] transition-transform">
                        <Image
                            src="/projects/weather.webp"
                            alt="Weather App screenshot"
                            width={384}
                            height={192}
                            className="h-48 w-full rounded-xl object-cover"
                            style={{ marginBottom: '0.5rem' }}
                            sizes="(max-width: 640px) 100vw, 384px"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PC9zdmc+"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Weather App</h3>
                        <p className="text-muted text-sm sm:text-base" style={{ marginBottom: '0.5rem' }}>
                            Real-time weather application using public API.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge">React</span>
                            <span className="badge">API</span>
                            <span className="badge">CSS</span>
                            <span className="badge">Responsive</span>
                        </div>
                    </a>

                    {/* Project Card 2 */}
                    <a href="https://echosfrombeyond.vercel.app/" target="_blank" rel="noopener noreferrer" className="card text-left max-w-sm w-full block cursor-pointer hover:scale-[1.02] transition-transform">
                        <Image
                            src="/projects/webGame.webp"
                            alt="Echos from Beyond Website screenshot"
                            width={384}
                            height={192}
                            className="h-48 w-full rounded-xl object-cover"
                            style={{ marginBottom: '0.5rem' }}
                            sizes="(max-width: 640px) 100vw, 384px"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PC9zdmc+"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Echos from Beyond Website</h3>
                        <p className="text-muted text-sm sm:text-base" style={{ marginBottom: '0.5rem' }}>
                            University Project | Promotional website for a video game.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge">React</span>
                            <span className="badge">CSS</span>
                            <span className="badge">Responsive</span>
                        </div>
                    </a>

                    {/* Project Card 3 */}
                    <a href="https://webportfolio-ivory-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="card text-left max-w-sm w-full block cursor-pointer hover:scale-[1.02] transition-transform">
                        <Image
                            src="/projects/portfolio.webp"
                            alt="Developer Portfolio screenshot"
                            width={384}
                            height={192}
                            className="h-48 w-full rounded-xl object-cover"
                            style={{ marginBottom: '0.5rem' }}
                            sizes="(max-width: 640px) 100vw, 384px"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PC9zdmc+"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Developer Portfolio</h3>
                        <p className="text-muted text-sm sm:text-base" style={{ marginBottom: '0.5rem' }}>
                            Personal portfolio built with Next.js and Tailwind CSS, focused on clean UI and, reponsive design and reusable components.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge">NextJS</span>
                            <span className="badge">Tailwind CSS</span>
                            <span className="badge">Responsive</span>
                            <span className="badge">UI</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
