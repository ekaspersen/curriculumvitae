export default function Contact() {
    return (
        <div className="px-4 py-16 max-w-screen-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg opacity-80 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                to me through any of the following platforms.
            </p>
            <ul className="mt-4 space-y-2 text-lg opacity-80">
                <li>
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:eskilkasp@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        eskilkasp@gmail.com
                    </a>
                </li>
                <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                        className="text-blue-500 hover:underline"
                    >
                        Eskil K. Hagen on LinkedIn
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/ekaspersen"
                        className="text-blue-500 hover:underline"
                    >
                        Eskil Kaspersen on GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
}
