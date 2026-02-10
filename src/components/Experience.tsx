export default function Experience() {
    return (
        <section id="experience" className="relative overflow-hidden">
            {/* Glassmorphism - full width, smaller */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 left-5 w-32 h-32 rounded-full blur-3xl opacity-12"
                    style={{ backgroundColor: '#ec4899' }}
                ></div>
                <div
                    className="absolute bottom-1/3 right-5 w-36 h-36 rounded-full blur-3xl opacity-12"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
                {/* Center blob - new */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-12"
                    style={{ backgroundColor: '#a855f7' }}
                ></div>
            </div>

            <div className="section-container relative z-10">
                <h2 className="text-2xl sm:text-3xl text-center font-bold" style={{ marginBottom: '2rem' }}>Professional Experience</h2>
                <div className="flex flex-col gap-4">
                    {/* Experience Item 1 */}
                    <div className="card">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold">Web Developer</h3>
                            <span className="badge-outline w-fit text-xs sm:text-sm">Sep 2025 - Dec 2025</span>
                        </div>
                        <p className="gradient-text font-medium mb-3">Black Virtual Services S.A de C.V</p>
                        <div className="space-y-1">
                            <p className="text-muted text-sm sm:text-base">
                                -Developed and maintained web applications using Laravel (PHP).
                            </p>
                            <p className="text-muted text-sm sm:text-base">
                                -Contributed to AI-powered projects including chatbots and intelligent search.
                            </p>
                            <p className="text-muted text-sm sm:text-base">
                                -Participated in maintenance of augmented reality (AR) services.
                            </p>
                            <p className="text-muted text-sm sm:text-base">
                                -Collaborated with multidisciplinary teams to meet business objectives.
                            </p>
                        </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="card">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold">Web Developer (Intern)</h3>
                            <span className="badge-outline w-fit text-xs sm:text-sm">Jan 2025 - Apr 2025</span>
                        </div>
                        <p className="gradient-text font-medium mb-3">Navegante Estrategia Web</p>
                        <div className="space-y-1">
                            <p className="text-muted text-sm sm:text-base">
                                -Developed and admiistrative credentials management system using CodeIgniter and MySQL.
                            </p>
                            <p className="text-muted text-sm sm:text-base">
                                -Implemented backend logic, testing and debugging.
                            </p>
                        </div>
                    </div>

                    {/* Experience Item 3 */}
                    <div className="card">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1 sm:gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold">Web Developer (Intern)</h3>
                            <span className="badge-outline w-fit text-xs sm:text-sm">May 2023 - Aug 2023</span>
                        </div>
                        <p className="gradient-text font-medium mb-3">ITALIKA</p>
                        <div className="space-y-1">
                            <p className="text-muted text-sm sm:text-base">
                                -Built a responsive static website using HTML, CSS and JAVASCRIPT.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
