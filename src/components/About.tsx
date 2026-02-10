export default function About() {
    return (
        <section id="about" className="relative overflow-hidden">
            {/* Glassmorphism - full width, smaller */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 right-10 -translate-y-1/2 w-36 h-36 rounded-full blur-3xl opacity-15"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
                <div
                    className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-10"
                    style={{ backgroundColor: '#ec4899' }}
                ></div>
            </div>

            <div className="section-container relative z-10">
                <h2 className="text-2xl sm:text-3xl text-center font-bold" style={{ marginBottom: '2rem' }}>About Me</h2>
                <div className="card">
                    <p className="text-lg leading-relaxed text-muted">
                        I’m a web developer with backend foundation and a growing focus on frontend development. I enjoy building user-friendly interfaces using modern web technologies while ensuring clean structure and maintainable code. My background in backend development allows me to better understand how frontend and backend work together to create complete, scalable web applications.
                    </p>
                </div>
            </div>
        </section>
    );
}
