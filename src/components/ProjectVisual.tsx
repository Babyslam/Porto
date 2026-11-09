import { Check, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import type { ProjectVisual as VisualKind } from "../data";

const classifierRows = [
  { topic: "news", score: 86 },
  { topic: "food", score: 84 },
  { topic: "finance", score: 72 },
  { topic: "sport", score: 72 },
  { topic: "health", score: 70 },
  { topic: "travel", score: 65 },
];

function ClassifierVisual() {
  return (
    <div className="viz viz--classifier">
      <div className="viz-window">
        <div className="viz-window__bar">
          <span className="viz-window__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>classifier / validation</span>
          <span className="viz-status">MODEL LIVE</span>
        </div>

        <div className="classifier">
          <div className="classifier__heading">
            <span>Topic</span>
            <span>F1 score</span>
          </div>
          {classifierRows.map((row) => (
            <div className="classifier__row" key={row.topic}>
              <span className="classifier__topic">{row.topic}</span>
              <span className="classifier__bar">
                <i style={{ width: `${row.score}%` }} />
              </span>
              <span className="classifier__score">{row.score}</span>
            </div>
          ))}
        </div>

        <div className="viz-window__foot">
          <span>DECISION TREE · TF-IDF</span>
          <span>10,962 SAMPLES</span>
        </div>
      </div>

      <div className="viz-chip viz-chip--top">
        <Sparkles size={14} />
        <span>7-class NLP</span>
      </div>
      <div className="viz-chip viz-chip--bottom">
        <span className="viz-chip__dot" />
        <span>weighted F1&nbsp; 0.78</span>
      </div>
    </div>
  );
}

function PortalVisual() {
  return (
    <div className="viz viz--portal">
      <div className="portal">
        <div className="portal__bar">
          <span className="portal__brand">
            <LockKeyhole size={13} />
            WBS
          </span>
          <span className="portal__anon">ANONYMOUS</span>
        </div>

        <div className="portal__body">
          <div className="portal__icon">
            <ShieldCheck size={24} />
          </div>
          <p className="portal__eyebrow">Secure intake · 01</p>
          <h4>
            Report misconduct.
            <br />
            Stay protected.
          </h4>
          <div className="portal__fields">
            <span />
            <span />
            <span className="portal__fields--short" />
          </div>
          <div className="portal__steps">
            <span className="is-current">01 Report</span>
            <span>02 Review</span>
            <span>03 Resolve</span>
          </div>
        </div>

        <div className="portal__footer">
          <span>
            <Check size={12} /> Access controlled
          </span>
          <span>
            <Check size={12} /> Identity protected
          </span>
        </div>
      </div>

      <div className="viz-chip viz-chip--top">
        <ShieldCheck size={14} />
        <span>RBAC enforced</span>
      </div>
      <div className="viz-chip viz-chip--bottom">
        <span className="viz-chip__dot" />
        <span>100% anonymous</span>
      </div>
    </div>
  );
}

function TourismVisual() {
  return (
    <div className="viz viz--tourism">
      <div className="tourism">
        <div className="tourism__map">
          <svg
            viewBox="0 0 520 340"
            className="tourism__contours"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M-20 95 C90 45 150 120 255 92 S390 10 550 65" />
            <path d="M-20 145 C95 100 170 170 280 132 S410 70 550 115" />
            <path d="M-20 200 C100 155 190 225 310 180 S430 125 550 170" />
            <path d="M-20 260 C80 220 210 285 330 235 S455 190 550 230" />
            <path d="M-20 310 C120 270 235 330 355 290 S480 250 550 280" />
          </svg>
          <span className="tourism__route" aria-hidden="true" />
          <span className="tourism__pin tourism__pin--one">
            <i />
            <span>Destinations</span>
          </span>
          <span className="tourism__pin tourism__pin--two">
            <i />
            <span>Stays</span>
          </span>
          <span className="tourism__pin tourism__pin--three">
            <i />
            <span>Guides</span>
          </span>
          <span className="tourism__map-label">EAST JAVA · ID</span>
        </div>

        <div className="tourism__panel">
          <span className="tourism__panel-label">REGIONAL GUIDE / 03</span>
          <h4>One place for the whole journey.</h4>
          <div className="tourism__tags">
            <span>Explore</span>
            <span>Stay</span>
            <span>Guide</span>
          </div>
          <div className="tourism__line" />
          <span className="tourism__cms">Managed with a central CMS</span>
        </div>
      </div>

      <div className="viz-chip viz-chip--top">
        <span className="viz-chip__dot" />
        <span>Live content model</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  if (kind === "classifier") return <ClassifierVisual />;
  if (kind === "portal") return <PortalVisual />;
  return <TourismVisual />;
}
