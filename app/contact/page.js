export default function Contact() {
    return (
        <div className="px-4 py-16 max-w-screen-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg opacity-80 max-w-xl lg:max-w-2xl leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                to me through any of the following platforms.
            </p>
            <ul className="mt-4 space-y-4 text-lg opacity-80">
                <span className="max-w-xl lg:max-w-2xl">
                    I prefer IG or email, <br /> but you can also find me on
                    LinkedIn and GitHub.
                </span>

                <li>
                    <strong>Instagram:</strong>{" "}
                    <a
                        href="https://github.com/ekaspersen"
                        className="text-rose-300 hover:underline"
                    >
                        @eskilkaspersen
                    </a>
                </li>
                <li>
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:eskilkasp@gmail.com"
                        className="text-rose-300 hover:underline"
                    >
                        eskilkasp@gmail.com
                    </a>
                </li>
                <hr className="w-1/2" />
                <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                        className="text-rose-300 hover:underline"
                    >
                        Eskil Kaspersen Hagen
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/ekaspersen"
                        className="text-rose-300 hover:underline"
                    >
                        /ekaspersen
                    </a>
                </li>
            </ul>
        </div>
    );
}
