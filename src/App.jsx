export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #020617;
          color: white;
        }

        section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .container {
          max-width: 1100px;
          text-align: center;
        }

        /* HERO */
        .badge {
          display: inline-block;
          margin-bottom: 24px;
          padding: 8px 18px;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          color: #c7d2fe;
        }

        .title {
          font-size: clamp(80px, 14vw, 160px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -4px;
        }

        .title span {
          display: block;
          background: linear-gradient(90deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin-top: 28px;
          font-size: 20px;
          line-height: 1.7;
          color: #cbd5f5;
        }

        /* ABOUT */
        .dark {
          background: radial-gradient(circle at top, #0f172a, #020617);
        }

        .heading {
          font-size: 56px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .text {
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5f5;
          max-width: 900px;
          margin: auto;
        }

        /* SERVICES */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 50px;
        }

        .card {
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          text-align: left;
        }

        .card h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.6;
          color: #cbd5f5;
        }

        /* FOOTER */
        footer {
          text-align: center;
          padding: 40px 20px;
          font-size: 14px;
          color: #94a3b8;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>

      {/* PAGE 1 – HERO */}
      <section>
        <div className="container">
          <span className="badge">Premium Digital Agency</span>
          <h1 className="title">
            COMING
            <span>SOON</span>
          </h1>
          <p className="subtitle">
            We are building a next-generation web & app development agency
            focused on performance, security, and scalable digital products.
          </p>
        </div>
      </section>

      {/* PAGE 2 – ABOUT */}
      <section className="dark">
        <div className="container">
          <h2 className="heading">Who We Are</h2>
          <p className="text">
            We are a technology-driven agency helping startups, founders,
            and enterprises transform ideas into reliable digital products.
            Our work focuses on clean architecture, modern UI/UX, and
            long-term scalability — not shortcuts or copy-paste solutions.
          </p>
        </div>
      </section>

      {/* PAGE 3 – SERVICES */}
      <section>
        <div className="container">
          <h2 className="heading">What We Build</h2>

          <div className="grid">
            <div className="card">
              <h3>Web Applications</h3>
              <p>
                High-performance web platforms using modern frameworks,
                secure APIs, and scalable infrastructure.
              </p>
            </div>

            <div className="card">
              <h3>Mobile Applications</h3>
              <p>
                Clean, fast, and production-ready mobile apps built for
                real users and real growth.
              </p>
            </div>

            <div className="card">
              <h3>Backend & Cloud</h3>
              <p>
                Secure backend systems, authentication, databases,
                and cloud-ready architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Your Agency Name. All rights reserved.
      </footer>
    </>
  );
}
