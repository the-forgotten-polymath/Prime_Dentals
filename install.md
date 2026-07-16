Using Claude Marketplace (Claude Code)

Install directly in Claude Code with two commands:

/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
Using CLI (Recommended)

# Install CLI globally
npm install -g ui-ux-pro-max-cli

# Go to your project
cd /path/to/your/project

# Install for your AI assistant
uipro init --ai claude      # Claude Code
uipro init --ai cursor      # Cursor
uipro init --ai windsurf    # Windsurf
uipro init --ai antigravity # Antigravity
uipro init --ai copilot     # GitHub Copilot
uipro init --ai kiro        # Kiro
uipro init --ai codex       # Codex CLI
uipro init --ai qoder       # Qoder
uipro init --ai roocode     # Roo Code
uipro init --ai gemini      # Gemini CLI
uipro init --ai trae        # Trae
uipro init --ai opencode    # OpenCode
uipro init --ai continue    # Continue
uipro init --ai codebuddy   # CodeBuddy
uipro init --ai droid       # Droid (Factory)
uipro init --ai kilocode    # KiloCode
uipro init --ai warp        # Warp
uipro init --ai augment     # Augment
uipro init --ai codewhale   # CodeWhale
uipro init --ai all         # All assistants
The npm package is ui-ux-pro-max-cli; it still installs the uipro command. Older uipro-cli releases are stale and should not be used for current assets.

Global Install (Available for All Projects)

uipro init --ai claude --global   # Install to ~/.claude/skills/
uipro init --ai cursor --global   # Install to ~/.cursor/skills/
Other CLI Commands

uipro versions              # List available versions
uipro update                # Refresh skill files from installed CLI package
uipro init --offline        # Compatibility flag; installs bundled templates
uipro uninstall             # Remove skill (auto-detect platform)
uipro uninstall --ai claude # Remove specific platform
uipro uninstall --global    # Remove from global install
Prerequisites

Python 3.x is required for the search script (standard library only — the scripts install nothing and make no network calls).

Check if Python is installed:

python3 --version
If it is missing, install it yourself from python.org or with your OS package manager (Homebrew, apt, winget). These install steps are for you, the human user — AI agents using this skill should never install software on your machine; they are instructed to ask you instead.

Usage

Skill Mode (Auto-activate)

Supported: Claude Code, Cursor, Windsurf, Antigravity, Codex CLI, Continue, Gemini CLI, OpenCode, Qoder, CodeBuddy, Droid (Factory), KiloCode, Warp, Augment, CodeWhale

The skill activates automatically when you request UI/UX work. Just chat naturally:

Build a landing page for my SaaS product
Trae: Switch to SOLO mode first. The skill will activate for UI/UX requests.
Workflow Mode (Slash Command)

Supported: Kiro, GitHub Copilot, Roo Code, KiloCode

Use the slash command to invoke the skill:

/ui-ux-pro-max Build a landing page for my SaaS product
Example Prompts

Build a landing page for my SaaS product

Create a dashboard for healthcare analytics

Design a portfolio website with dark mode

Make a mobile app UI for e-commerce

Build a fintech banking app with dark theme
How It Works

You ask - Request any UI/UX task (build, design, create, implement, review, fix, improve)
Design System Generated - The AI automatically generates a complete design system using the reasoning engine
Smart recommendations - Based on your product type and requirements, it finds the best matching styles, colors, and typography
Code generation - Implements the UI with proper colors, fonts, spacing, and best practices
Pre-delivery checks - Validates against common UI/UX anti-patterns
Supported Stacks

The skill provides stack-specific guidelines for:

Category	Stacks
Web (HTML)	HTML + Tailwind (default)
React Ecosystem	React, Next.js, shadcn/ui
Vue Ecosystem	Vue, Nuxt.js, Nuxt UI
Angular	Angular
PHP	Laravel (Blade, Livewire, Inertia.js)
Other Web	Svelte, Astro, Three.js
Desktop	JavaFX, WPF, WinUI 3, Avalonia, Uno Platform, UWP
iOS	SwiftUI
Android	Jetpack Compose
Cross-Platform	React Native, Flutter
Just mention your preferred stack in the prompt, or let it default to HTML + Tailwind.

Design System Command (Advanced)

For direct access to the design system generator:

Note: If you installed via Continue, replace .claude/skills/ with .continue/skills/ in the commands below. For Droid (Factory), use .factory/skills/.
# Generate design system with ASCII output
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --design-system -p "Serenity Spa"

# Generate with Markdown output
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown

# Domain-specific search
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart

# Stack-specific guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "tableview binding" --stack javafx
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "atlantafx primer enterprise theme" --stack javafx
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "enterprise tableview density permission" --stack javafx
Persist Design System (Master + Overrides Pattern)

Save your design system to files for hierarchical retrieval across sessions:

# Generate and persist to design-system/MASTER.md
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"

# Also create a page-specific override file
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp" --page "dashboard"
This creates a design-system/ folder structure:

design-system/
├── MASTER.md           # Global Source of Truth (colors, typography, spacing, components)
└── pages/
    └── dashboard.md    # Page-specific overrides (only deviations from Master)
How hierarchical retrieval works:

When building a specific page (e.g., "Checkout"), first check design-system/pages/checkout.md
If the page file exists, its rules override the Master file
If not, use design-system/MASTER.md exclusively
Context-aware retrieval prompt:

I am building the [Page Name] page. Please read design-system/MASTER.md.
Also check if design-system/pages/[page-name].md exists.
If the page file exists, prioritize its rules.
If not, use the Master rules exclusively.
Now, generate the code...
Architecture & Contributing

For Users

The codebase has been restructured to use a template-based generation system. All platform-specific files (.cursor/, .windsurf/, .kiro/, .factory/, etc.) are now generated dynamically by the CLI.

Always use the CLI to install:

npm install -g ui-ux-pro-max-cli
uipro init --ai <platform>
This ensures you get the latest templates bundled with the installed CLI package and the correct file structure for your AI assistant. Update the npm package first when a new release is published.