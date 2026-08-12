"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "../config/site";

const projectTypes = [
  "Fiberglass damage",
  "Gelcoat / finish",
  "Jet ski / PWC",
  "Restoration / refresh",
  "Not sure yet",
];

const damageAreas = ["Hull", "Deck", "Transom", "Console", "PWC body", "Other"];

export function ProjectConsole() {
  const [type, setType] = useState(projectTypes[0]);
  const [area, setArea] = useState(damageAreas[0]);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const brief = useMemo(
    () =>
      `Hi Sam — I’m reaching out about a project.\n\nProject: ${type}\nArea: ${area}\nNotes: ${note || "I can explain the damage and share photos when we connect."}`,
    [type, area, note],
  );

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="console-shell">
      <div className="console-topline">
        <span className="console-status"><i /> PROJECT INTAKE / PREVIEW</span>
        <span className="console-code">BACLIFF · TX</span>
      </div>

      <div className="console-grid">
        <div>
          <p className="field-label">01 / WHAT NEEDS ATTENTION?</p>
          <div className="choice-grid">
            {projectTypes.map((item) => (
              <button
                type="button"
                key={item}
                className={type === item ? "choice active" : "choice"}
                onClick={() => setType(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="field-label">02 / WHERE IS IT?</p>
          <div className="damage-map" aria-label="Select project area">
            <div className="mini-boat" aria-hidden="true">
              <div className="mini-deck" />
              <div className="mini-hull" />
              <div className="mini-water" />
            </div>
            <div className="choice-row">
              {damageAreas.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={area === item ? "chip active" : "chip"}
                  onClick={() => setArea(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <label className="note-field">
        <span>03 / WHAT HAPPENED?</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Dock rash, crack, faded finish, restoration idea..."
          rows={4}
        />
      </label>

      <div className="console-actions">
        <button type="button" className="button button-light" onClick={copyBrief}>
          {copied ? "Copied ✓" : "Copy project brief"}
        </button>
        <a className="button button-coral" href={siteConfig.phoneHref}>
          Call Sam · {siteConfig.phoneDisplay}
        </a>
      </div>
      <p className="console-note">
        This preview does not submit or store your information. Confirm Sam&apos;s preferred photo / estimate workflow before launch.
      </p>
    </div>
  );
}
