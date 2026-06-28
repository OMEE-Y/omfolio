'use client';

import Link from 'next/link';

import { ArrowLeft, WarningIcon } from '@phosphor-icons/react';

export default function NotFound() {
  return (
    <div style={styles.container}>
    
      <style>{`
        @media (min-width: 768px) {
          .responsive-card {
            display: flex !important;
            flex-direction: row !important;
            align-items: center;
          }
          .responsive-image-container {
            width: 50% !important;
            min-height: 100% !important;
          }
          .responsive-content {
            width: 50% !important;
            padding: 48px !important;
          }
          .responsive-title {
            font-size: 2.5rem !important;
          }
        }
      `}</style>

      <div style={styles.topAccentBar} />

      <main className="responsive-card" style={styles.card}>
        <div className="responsive-image-container" style={styles.imageContainer}>
          <img
            src="https://media.tenor.com/TUJ_WGkQ6pcAAAAM/dog-computer.gif"
            alt="404 Not Found"
            style={styles.gif}
          />
        </div>

        <div className="responsive-content" style={styles.content}>
          <div style={styles.codeContainer}>
            <WarningIcon size={18} color="#888" weight="bold" />
            <p style={styles.code}>404 ERROR</p>
          </div>

          <h1 className="responsive-title" style={styles.title}>Page Not Found</h1>

          <p style={styles.description}>
            The page you're looking for doesn't exist, may have been moved,
            or the URL might be incorrect.
          </p>

          <Link href="/" style={styles.button}>
            <ArrowLeft size={18} weight="bold" />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '16px',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  },

  topAccentBar: {},

  card: {
    width: '100%',
    maxWidth: 900,
    overflow: 'hidden',
    background: '#111',
    border: '1px solid #2a2a2a',
    borderRadius: 10,
    boxShadow: '0 20px 60px rgba(0,0,0,.45)',
    display: 'flex',
    flexDirection: 'column',
  },

  imageContainer: {
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    width: '100%',
  },

  gif: {
    display: "block",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    maxHeight: 280,
    objectFit: "contain",
  },

  content: {
    padding: '32px 24px',
    width: '100%',
    boxSizing: 'border-box',
  },

  codeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: 10,
  },

  code: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 2,
    margin: 0,
  },

  title: {
    color: '#fff',
    fontSize: '1.8rem',
    fontWeight: 800,
    margin: '0 0 16px',
    lineHeight: 1.2,
  },

  description: {
    color: '#9a9a9a',
    lineHeight: 1.6,
    fontSize: 15,
    maxWidth: 550,
    marginBottom: 32,
  },

  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: '#fff',
    color: '#000',
    padding: '12px 24px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
    width: '100%',
    maxWidth: '200px',
    boxSizing: 'border-box',
    transition: 'background 0.2s ease',
  },
};