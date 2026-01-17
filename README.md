# Typing-Master-Pro
"A highly optimized typing tutor web app designed specifically for Mobile Landscape (OTG Keyboard) environments. Features a Glassmorphism UI, real-time WPM/Accuracy tracking, and mechanical sound feedback using pure Vanilla JavaScript."

# ⌨️ TypingMaster : Low-Latency Mobile Typing Engine

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![Maintenance](https://img.shields.io/badge/maintained-yes-green?style=for-the-badge)
![Size](https://img.shields.io/github/repo-size/AshishKumar/TypingMaster-OTG?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

> **A high-performance typing tutor engineered specifically for Android devices using physical keyboards via OTG (On-The-Go) in landscape mode.**

---
<img width="1907" height="937" alt="Screenshot 2026-01-17 162844" src="https://github.com/user-attachments/assets/04dda85b-204c-4e90-9ecc-62e7c7bad288" />

## 🚀 Live Demo
### [👉 Click Here to Try the App](https://ashishkfrontend.github.io/Typing-Master-Pro/)
*(Recommended: Open on Mobile in Landscape Mode with a Keyboard attached)*

---

## 🧐 The Problem Statement
Most typing websites are built for desktop viewports. When accessed on a mobile device in **Landscape Mode**:
1.  **Screen Real Estate:** Browser address bars and keyboards consume 60% of the screen.
2.  **Focus Loss:** Touching the screen often triggers the virtual keyboard, disrupting the physical keyboard flow.
3.  **Audio Latency:** Standard web audio implementations cause a delay (lag) on mobile browsers, breaking the typing rhythm.

## 💡 The Solution (Engineering Approach)
**TypingMaster OTG** solves these issues using a mobile-first, performance-centric approach:

### 1. Adaptive Viewport Engine
- Utilizes **CSS Container Queries** and `dvh` (Dynamic Viewport Height) units to ensure the UI fits perfectly without scrolling, regardless of the browser's UI bars.
- Implements a **Smart Scroll Algorithm** in JS that keeps the active line centered dynamically.

### 2. Zero-Latency Audio System
- Replaces standard `new Audio().play()` with a **DOM Node Cloning Strategy**.
- **Technique:** `audioNode.cloneNode(true).play()` allows overlapping sounds during high-speed typing bursts (100+ WPM) without audio cutting or lagging.

### 3. Focus-Lock Mechanism
- Custom Event Listeners (`blur`, `keydown`) ensure the input field automatically re-claims focus if the user accidentally touches the UI, preventing the virtual keyboard from popping up.

---

## 🛠️ Tech Stack & Tools

| Component | Technology | Highlights |
| :--- | :--- | :--- |
| **Core** | ![JavaScript](https://img.shields.io/badge/Vanilla%20JS-ES6+-yellow) | Modular Object-Oriented Design |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-Advanced-blue) | CSS Variables, Glassmorphism, Media Queries |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange) | Accessibility (ARIA) compliant |
| **Assets** | **GitHub CDN** | High-speed raw audio delivery |

---

## 📂 Project Structure

A clean, modular architecture separating concerns for maintainability.

```bash
TypingMaster-OTG/
├── index.html          # Semantic Entry Point
├── style.css           # Responsive Design & Theme Variables
├── script.js           # Game Engine (State, Logic, Audio)
└── README.md           # Documentation
