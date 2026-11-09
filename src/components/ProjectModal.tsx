import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  X,
} from "lucide-react";
import type { Project } from "../data";
import { profile } from "../data";
import ProjectVisual from "./ProjectVisual";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const images = project.images ?? [];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (imageIndex === null) {
      closeRef.current?.focus();
    } else {
      lightboxCloseRef.current?.focus();
    }
  }, [imageIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (imageIndex !== null) {
          setImageIndex(null);
        } else {
          onClose();
        }
        return;
      }

      if (imageIndex !== null && images.length > 1) {
        if (event.key === "ArrowRight") {
          setImageIndex((current) =>
            current === null ? 0 : (current + 1) % images.length,
          );
        }
        if (event.key === "ArrowLeft") {
          setImageIndex((current) =>
            current === null
              ? 0
              : (current - 1 + images.length) % images.length,
          );
        }
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageIndex, images.length, onClose]);

  const showPrevious = () => {
    setImageIndex((current) =>
      current === null
        ? 0
        : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setImageIndex((current) =>
      current === null ? 0 : (current + 1) % images.length,
    );
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Project inquiry — inspired by ${project.title}`,
  )}`;

  return createPortal(
    <div
      className="case-root"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        ref={dialogRef}
      >
        <div className="case-modal__topbar">
          <span>
            {project.index} / {project.category}
          </span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Close case study"
            ref={closeRef}
          >
            <X size={20} />
          </button>
        </div>

        <header className="case-head">
          <div className="case-head__meta">
            <span>{project.context}</span>
            <span>{project.stack.slice(0, 3).join(" · ")}</span>
          </div>
          <h2 id="case-title">{project.fullTitle}</h2>
          <p>{project.summary}</p>
        </header>

        <div className="case-cover" aria-hidden="true">
          <ProjectVisual kind={project.visual} />
        </div>

        <div className="case-metrics">
          {project.metrics.map((metric) => (
            <div className="case-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="case-grid">
          <div className="case-main">
            <section>
              <span className="case-label">The brief</span>
              <h3>What needed to work</h3>
              <p>{project.overview}</p>
            </section>

            <section>
              <span className="case-label">The build</span>
              <h3>What I actually did</h3>
              <ul className="case-list">
                {project.build.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="case-side">
            <div className="case-side__block">
              <span className="case-label">Signals</span>
              <ul className="case-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="case-side__block">
              <span className="case-label">Stack</span>
              <div className="case-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="case-side__cta">
              <span className="case-label">Have a similar problem?</span>
              <a className="button button--light button--full" href={mailto}>
                <Mail size={16} />
                Start a conversation
                <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>
        </div>

        {images.length > 0 && (
          <section className="case-gallery">
            <div className="case-gallery__head">
              <div>
                <span className="case-label">Evidence</span>
                <h3>From the working build</h3>
              </div>
              <span className="case-gallery__count">
                {String(images.length).padStart(2, "0")} artefacts
              </span>
            </div>

            <div className="case-gallery__grid">
              {images.map((image, index) => (
                <button
                  type="button"
                  className="case-gallery__item"
                  key={image.src}
                  onClick={() => setImageIndex(index)}
                  aria-label={`Open image: ${image.caption}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>
                    <span>{image.caption}</span>
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        <footer className="case-footer">
          <button type="button" className="text-link" onClick={onClose}>
            <ArrowLeft size={15} />
            Back to selected work
          </button>
          <span>{profile.name} · {project.index}</span>
        </footer>
      </div>

      {imageIndex !== null && images[imageIndex] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${images[imageIndex].caption}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setImageIndex(null);
          }}
        >
          <button
            type="button"
            className="icon-button lightbox__close"
            onClick={() => setImageIndex(null)}
            aria-label="Close image viewer"
            ref={lightboxCloseRef}
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <figure className="lightbox__figure">
            <img src={images[imageIndex].src} alt={images[imageIndex].alt} />
            <figcaption>
              <span>{images[imageIndex].caption}</span>
              <span>
                {String(imageIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      )}
    </div>,
    document.body,
  );
}
